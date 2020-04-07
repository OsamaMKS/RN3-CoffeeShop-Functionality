import { combineReducers } from "redux";

// Reducers
import cartR from "./cart";

const rootReducer = combineReducers({
  cartReducer: cartR,
});

export default rootReducer;
