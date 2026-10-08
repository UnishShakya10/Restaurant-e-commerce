import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { RestaurantDataContext, restaurantData } from "./RestaurantDataContext.js";
import apiClient from "../api.js";

export function RestaurantDataProvider({ children }) {
    const [dishes, setDishes] = useState([]);
    const [menuStatus, setMenuStatus] = useState("loading");
    const [menuError, setMenuError] = useState("");

    const fetchDishes = useCallback(async (signal) => {
        setMenuStatus("loading");
        setMenuError("");

        try {
            const { data } = await apiClient.get("/menu", { signal });
            if (!data.success || !Array.isArray(data.dishes)) {
                throw new Error("The menu service returned an invalid response.");
            }
            if (signal?.aborted) return;
            setDishes(data.dishes);
            setMenuStatus("loaded");
        } catch (error) {
            if (signal?.aborted || axios.isCancel(error)) return;
            setMenuError(error.response?.data?.message
                || (error instanceof Error ? error.message : "Unable to load the menu."));
            setMenuStatus("error");
        }
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        fetchDishes(controller.signal);
        return () => controller.abort();
    }, [fetchDishes]);

    const value = useMemo(() => ({
        ...restaurantData,
        dishes,
        menuStatus,
        menuError,
        retryMenu: () => fetchDishes(),
    }), [dishes, fetchDishes, menuError, menuStatus]);

    return (
        <RestaurantDataContext.Provider value={value}>
            {children}
        </RestaurantDataContext.Provider>
    );
}

RestaurantDataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
