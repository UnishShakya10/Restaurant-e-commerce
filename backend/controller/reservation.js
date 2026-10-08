import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";
import { MenuItem } from "../models/menuItemSchema.js";

export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, date, time, guestCount, orderItems = [] } = req.body;
    if (!firstName || !lastName || !email || !phone || !date || !time || guestCount === undefined) {
        return next(new ErrorHandler("Please fill full reservation form!", 400));
    }
    if (!Number.isInteger(guestCount) || guestCount < 1) {
        return next(new ErrorHandler("Guest count must be a whole number of at least one.", 400));
    }

    if (!Array.isArray(orderItems) || orderItems.length > 50) {
        return next(new ErrorHandler("Selected menu items are invalid.", 400));
    }

    const selectedDishIds = new Set();
    for (const item of orderItems) {
        if (
            !item
            || !Number.isInteger(item.dishId)
            || item.dishId < 1
            || !Number.isInteger(item.quantity)
        ) {
            return next(new ErrorHandler("Selected menu items are invalid.", 400));
        }

        if (item.quantity < 1 || item.quantity > 10 || selectedDishIds.has(item.dishId)) {
            return next(new ErrorHandler("Selected menu items are invalid.", 400));
        }

        selectedDishIds.add(item.dishId);
    }

    try {
        const menuItems = orderItems.length
            ? await MenuItem.find({
                dishId: { $in: [...selectedDishIds] },
                isAvailable: true,
            }).lean()
            : [];
        if (menuItems.length !== selectedDishIds.size) {
            return next(new ErrorHandler("One or more selected dishes are no longer available.", 400));
        }

        const menuItemsById = new Map(menuItems.map((item) => [item.dishId, item]));
        const validatedOrderItems = orderItems.map((item) => {
            const menuItem = menuItemsById.get(item.dishId);
            return {
                dishId: item.dishId,
                name: menuItem.title,
                course: menuItem.course,
                price: menuItem.price,
                quantity: item.quantity,
            };
        });

        await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            date,
            time,
            guestCount,
            orderItems: validatedOrderItems,
        });
        res.status(200).json({
            success: true,
            message: "Reservation request sent successfully.",
        })
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(validationErrors.join(" , "), 400));
        }
        return next(error);
    }
};