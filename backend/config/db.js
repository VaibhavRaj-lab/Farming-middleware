import mongoose from 'mongoose'

const connectDB = async () => {
    console.log("heelo")
    try {
        const conn = await mongoose.connect("mongodb+srv://FinalYear:g0TY3LgXjVeGU35I@cluster0.4uixkzk.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB;