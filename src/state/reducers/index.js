import { combineReducers } from "redux";
import colorReducer from "./colorReducer";
import numberReducer from "./numberReducer";
const reducers = combineReducers({
  color: colorReducer,
  number: numberReducer,
});

export default reducers;
