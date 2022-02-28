import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./UserReducer";

const rootReducer = combineReducers({
    userReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk))