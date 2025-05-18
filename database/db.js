import mongoose from "mongoose";

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://Lucasjetski:gunsnrose@todolist.hvfqbql.mongodb.net/?retryWrites=true&w=majority&appName=todolist"
    )
    .then(() => console.log("MongoDB Conectado"))
    .catch((err) => console.log(err));
};

export default connectToDb;
