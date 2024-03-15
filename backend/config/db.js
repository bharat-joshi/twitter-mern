

import mongoose from "mongoose";
import dotnet from "dotenv";

dotnet.config({
    path: "../config/.env"
})

const databaseConnection = () => {

    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("Database connected successfully")).catch((error) => console.log(error));
}

export default databaseConnection;