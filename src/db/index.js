import mongoose from "mongoose";
import { Db_NAME } from "../constants.js";


const connectDb = async () => {
    try {
        const dbConnection = await mongoose.connect(`${process.env.MONGODB_URL}/${Db_NAME}`);
        console.log(`\n MongoDb connected !! DB Host: ${dbConnection.connection.host
            }`)
    } catch (error) {
        console.log(error, 'Connection error');
        process.exit(1)
    }
}


export default connectDb;