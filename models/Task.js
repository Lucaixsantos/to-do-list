import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  check: {
    type: Boolean,
    default: false, // Define o valor padrão como "false"
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Task", taskSchema);
