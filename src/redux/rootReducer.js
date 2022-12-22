import { combineReducers } from "redux";

import shoppingReducer from "./reducer/shopping-reducer";

const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default rootReducer;
