import { combineReducers } from "redux";
import skillReducer from "./skill";

const rootReducer = combineReducers({
  skill: skillReducer,
});

export default rootReducer;