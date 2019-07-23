"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.TaskSchema = new Schema({
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
//# sourceMappingURL=taskSchema.js.map