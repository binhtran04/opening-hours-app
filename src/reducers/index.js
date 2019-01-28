import { combineReducers } from "redux";
import openingHours from "./openingHours";

const rootReducer = combineReducers({
  weeklyOpeningHours: openingHours
});

export default rootReducer;
