import mongoose from "mongoose";

const connectToDb = () => {
  mongoose
    .connect(
      process.env.BD_URI
    )
    .then(() => console.log("MongoDB Conectado"))
    .catch((err) => console.log(err));
};

export default connectToDb;
