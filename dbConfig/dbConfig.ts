import mongoose from "mongoose";

 export default async function connect(){

  try{
  
   await mongoose.connect("mongodb+srv://authentication:<db_password>@authentication.vocf4dt.mongodb.net/")
   const connection = mongoose.connection;
   

   connection.on("connected",()=>{
    console.log("MongoDB Connected Successfully")
   })


  }catch(error){

    console.log("something goes wrong")
    console.log(error)
  }
 } 