import mongoose  from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from 'dotenv'
dotenv.config()

// if we run dev or run script, it gives error if above dotenv lines are commented, as no env varibalebles are loaded, but iwe run load script it preloads the env variables so it runs 

const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDb Connected ! DB HOST: ${connectionInstance.connection.host}`);
        // console.log(connectionInstance);
        
    } catch (error) {
        console.error("MongoDb Connection error :",error);
        process.exit(1)
    }
}
export default connectDB