// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error("Please add MONGODB_URI");
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = {
//     conn: null,
//     promise: null,
//   };
// }

// async function connectDB() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI);
//   }

//   cached.conn = await cached.promise;

//   return cached.conn;
// }

// export default connectDB;


import mongoose from "mongoose";

export const connectToDB = async () => {
    const dbUri = process.env.DB_URI as string;
    if (!dbUri) {
        throw new Error("DB_URI environment variable is not defined");
    }
    await mongoose
        .connect(dbUri)
        .then(() => {
            console.log("MongoDB connected");
        })
        .catch((err) => {
            console.error("MongoDB connection error:", err);
        });
};