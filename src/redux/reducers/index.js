import {combineReducers} from "redux";
import {productReducer} from "./product";
import {userReducer} from "./user";

// all reducer 생성
export const allReducers = combineReducers({
	products : productReducer,
	user : userReducer,
});