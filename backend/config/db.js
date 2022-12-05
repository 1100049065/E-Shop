import mongoose from 'mongoose';


const connectDB = async () => {
    try{
        const conn = await mongoose.connect
        //('mongodb+srv://DeepikaEShop:5seshuru@cluster0.ovxlc74.mongodb.net/deepshop?retryWrites=true&w=majority')
        (process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    }catch(error){
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1)
    }
}

export default connectDB