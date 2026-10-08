import { MenuItem } from "../models/menuItemSchema.js";

export const getMenu = async (req, res, next) => {
    try {
        const dishes = await MenuItem.find({ isAvailable: true })
            .select("dishId title category course description price image")
            .sort({ dishId: 1 })
            .lean();

        res.status(200).json({
            success: true,
            dishes: dishes.map(({ dishId, ...dish }) => ({ id: dishId, ...dish })),
        });
    } catch (error) {
        next(error);
    }
};
