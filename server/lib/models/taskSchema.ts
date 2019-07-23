import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface TaskQuery {
  title: string;
  description?: string;
  status?: string;
  updatedAt?: number;
}

export const TaskSchema = new Schema({
  title: {
    type: String,
    required: "Enter task title"
  },
  description: {
    type: String
  },
  status: {
    type: String,
    default: "Unstarted"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
});
