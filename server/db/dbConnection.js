import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"Resturant"
    }).then(()=>{
        console.log("Connect to database successfully");
    }).catch(err=>{
        console.log('Error Connecting in db');
    })
}