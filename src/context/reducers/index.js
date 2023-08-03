import { combineReducers } from "redux";
import feedsReducer from "./feedsReducers";
import productFeedsReducer from "./productFeedsReducers";
import cartReducer from "./cartReducer";

const myReducer = combineReducers({
  feeds: feedsReducer,
  productFeeds: productFeedsReducer,
  cartItems: cartReducer,
});

export default myReducer;
