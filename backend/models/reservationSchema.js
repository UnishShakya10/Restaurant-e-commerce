import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain at least 3 characters!"],
        maxLength: [30, "First name cannot exceed 30 characters!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain at least 3 characters!"],
        maxLength: [30, "Last name cannot exceed 30 characters!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email!"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must contain only 10 digits!"],
        maxLength: [10, "Phone number must contain only 10 digits!"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    guestCount: {
        type: Number,
        required: [true, "Please select how many guests are attending."],
        min: [1, "A reservation must be for at least one guest."],
        validate: {
            validator: Number.isInteger,
            message: "Guest count must be a whole number.",
        },
    },
    orderItems: {
        type: [{
            dishId: {
                type: Number,
                required: true,
                min: 1,
            },
            name: {
                type: String,
                required: true,
                trim: true,
                maxLength: 80,
            },
            course: {
                type: String,
                required: true,
                enum: ["Appetizer", "Main Course", "Dessert", "Drink"],
            },
            price: {
                type: Number,
                required: true,
                min: 0,
            },
            quantity: {
                type: Number,
                required: true,
                min: 1,
                max: 10,
            },
        }],
        default: [],
        validate: {
            validator: (items) => items.length <= 50,
            message: "A reservation cannot contain more than 50 menu selections.",
        },
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);