import { combineReducers } from "redux";
import expReducer from "./expReducer";

const rootReducer = combineReducers({
  exp: expReducer,
});

export default rootReducer;
