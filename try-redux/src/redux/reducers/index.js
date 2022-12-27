import countReducer from "./counterReducers";
import { combineReducers } from "redux";
import themeReducer from "./themeReducers";


const reducers = combineReducers({
    countReducer,themeReducer
})

export default reducers