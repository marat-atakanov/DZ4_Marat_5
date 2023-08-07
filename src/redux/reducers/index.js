import {combineReducers} from "redux";
import titleReducer from "./titleReducer";
import usersReducer from "./userReducer";

export const rootReducer = combineReducers({
    titleReducer,
    usersReducer
})