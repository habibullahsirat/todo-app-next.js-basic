import mongoose, { Schema } from "mongoose";

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  completed: {
    type: Boolean,
    default: false,
  },
});

delete mongoose.models.Todo;

export const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
