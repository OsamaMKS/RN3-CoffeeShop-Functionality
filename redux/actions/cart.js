import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "./actionTypes";

export const addItem = (newItem) => ({
  type: ADD_ITEM,
  payload: newItem,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const checkout = () => ({
  type: CHECKOUT,
});
