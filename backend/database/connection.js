
import mongoose from "mongoose";

const connectDB = ()=>{
    try {
        mongoose.connect("mongodb+srv://anupsharma08092001:GFvvRClc1Kg1O74O@cluster0.cndqw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("connected");
    } catch (error) {
        console.log("error in connecting database",error);
    }

}

export default connectDB;