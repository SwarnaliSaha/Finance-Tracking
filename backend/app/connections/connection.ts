import { connect } from "mongoose";

export const connectToMongo = async()=>{
    try {
        const {MONGO_CONNECTION} = process.env;
        await connect(MONGO_CONNECTION||"");
        console.log("connected");
        return true;
    } 
    catch (error) {
        console.log("Could not connect to mongo");
        throw {message:"Connection Error! ",error:error}
    }
}