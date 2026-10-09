
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

import app from "./app.js";
import { dbConnection } from "./database/dbConnection.js";

const PORT = process.env.PORT || 4000;

try {
  await dbConnection();
  console.log("Connected to database successfully!");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
  process.exit(1);
}
