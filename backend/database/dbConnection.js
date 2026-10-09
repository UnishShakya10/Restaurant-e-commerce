import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let memoryServer;
let memoryFallbackAttempted = false;

const getMongoUri = async () => {
    if (process.env.MONGO_URI && !memoryFallbackAttempted) {
        return process.env.MONGO_URI;
    }

    if (!memoryServer) {
        memoryServer = await MongoMemoryServer.create();
    }

    return memoryServer.getUri();
};

export const dbConnection = async () => {
    const mongoUri = await getMongoUri();

    try {
        return await mongoose.connect(mongoUri, {
            dbName: "RESTAURANT",
        });
    } catch (error) {
        if (memoryFallbackAttempted) {
            throw error;
        }

        memoryFallbackAttempted = true;
        console.warn("Primary MongoDB connection failed. Falling back to an in-memory MongoDB instance.");

        if (!memoryServer) {
            memoryServer = await MongoMemoryServer.create();
        }

        return mongoose.connect(memoryServer.getUri(), {
            dbName: "RESTAURANT",
        });
    }
};