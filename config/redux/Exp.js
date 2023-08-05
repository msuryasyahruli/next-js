import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";

const exp = createStore(rootReducer, applyMiddleware(thunk,logger))

export default exp;