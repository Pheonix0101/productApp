import { combineReducers } from "redux";
import CartREducer from "./CartReducer";

const RootReducer = combineReducers({
  cart: CartREducer,
});

export default RootReducer;
