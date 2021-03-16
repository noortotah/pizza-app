import { combineReducers } from "redux";
import ordersReducer from "./ordersReducers";
import pizzaReducer from "./pizzaReducer";

const reducers = combineReducers({
    pizzaReducer,
    ordersReducer
})

export default reducers;