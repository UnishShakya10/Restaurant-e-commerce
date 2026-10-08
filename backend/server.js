import app from "./app.js";
import { dbConnection } from "./database/dbConnection.js";

try {
    await dbConnection();
    console.log("Connected to database successfully!");
    app.listen(process.env.PORT, () => {
        console.log(`Server Running on PORT ${process.env.PORT}`);
    });
} catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exitCode = 1;
}