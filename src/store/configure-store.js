import { combineReducers, createStore } from "redux";
import rootReducer from "./reducers";

export const store = createStore(rootReducer);
