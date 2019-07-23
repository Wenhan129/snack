import { combineReducers } from "redux";
import taskReducer from "../reducers/task";

const rootReducer = combineReducers({
  tasks: taskReducer
});

export default rootReducer;
