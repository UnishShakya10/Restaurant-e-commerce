import { createContext, useContext } from "react";
import restaurantContent from "../restApi.json";

export const restaurantData = restaurantContent.data[0];
export const RestaurantDataContext = createContext(null);

export function useRestaurantData() {
    const context = useContext(RestaurantDataContext);

    if (!context) {
        throw new Error("useRestaurantData must be used within RestaurantDataContext.Provider");
    }

    return context;
}
