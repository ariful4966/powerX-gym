import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
    dataReducer,
    authReducer
})