import data from "../../data/dummy-data";

export const FETCH_SHOP = "FETCH_SHOP";

export const fetchShop = () => ({ type: FETCH_SHOP, payload: data.shop });
