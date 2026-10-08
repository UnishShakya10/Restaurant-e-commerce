import dotenv from "dotenv";
import mongoose from "mongoose";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dbConnection } from "../database/dbConnection.js";
import { MenuItem } from "../models/menuItemSchema.js";

const configPath = fileURLToPath(new URL("../config/config.env", import.meta.url));
const menuPath = fileURLToPath(new URL("../data/menuSeed.json", import.meta.url));

dotenv.config({ path: configPath });

try {
    const dishes = JSON.parse(await readFile(menuPath, "utf8"));

    if (!Array.isArray(dishes) || dishes.length === 0) {
        throw new Error("No menu dishes were found in backend/data/menuSeed.json.");
    }

    await dbConnection();
    const operations = dishes.map((dish) => ({
        updateOne: {
            filter: { dishId: dish.id },
            update: {
                $set: {
                    title: dish.title.trim(),
                    category: dish.category,
                    course: dish.course,
                    description: dish.description,
                    price: dish.price,
                    image: dish.image,
                },
                $setOnInsert: { dishId: dish.id, isAvailable: true },
            },
            upsert: true,
        },
    }));

    const result = await MenuItem.bulkWrite(operations, { ordered: true });
    console.log(`Menu seed complete: ${result.upsertedCount} inserted, ${result.modifiedCount} updated.`);
} catch (error) {
    console.error("Unable to seed menu items:", error);
    process.exitCode = 1;
} finally {
    await mongoose.disconnect();
}
