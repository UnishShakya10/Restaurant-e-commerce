import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
    dishId: {
        type: Number,
        required: true,
        unique: true,
        min: 1,
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 80,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    course: {
        type: String,
        required: true,
        enum: ["Appetizer", "Main Course", "Dessert", "Drink"],
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxLength: 300,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    image: {
        type: String,
        required: true,
        trim: true,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

export const MenuItem = mongoose.model("MenuItem", menuItemSchema);
