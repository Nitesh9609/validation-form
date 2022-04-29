import { combineReducers } from "redux";
import loginReducer from "./login/login.reducer";

export const rootReducer = combineReducers({
  loginState: loginReducer,
});
