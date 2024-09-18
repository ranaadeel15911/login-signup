import mongoose from "mongoose";
const connectDB = async()=>{
    try {
        const resp = await mongoose.connect("mongodb+srv://rana:adeel193725@cluster0.fwgii60.mongodb.net/login?retryWrites=true&w=majority&appName=Cluster0")
        if (resp) {
            console.log('mongodb connected')
        }
    } catch (error) {
        console.log(error)
    }
    
}

export default connectDB