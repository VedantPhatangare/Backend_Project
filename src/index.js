import connectDB from './db/dbconnection.js'
import { app } from './app.js';

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log(error);
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDb Connection Failed !",err);
})











/*
(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log(error);
       })

       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
        
       })
    } catch (error) {
        console.error("ERROR: ",error);
        
    }
})()
    */
