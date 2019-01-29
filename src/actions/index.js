import { GET_JSON_FROM_INPUT } from "./types";
import { getDayIndex, sortByHourValue, sortByDayOfWeek } from "../utils";

export function getJsonFromInput(jsonData) {
  let weeklyOpeningHours = Object.keys(jsonData)
    .map(dayOfWeek => {
      const hours = jsonData[dayOfWeek].sort(sortByHourValue);

      const item = {
        dayOfWeek,
        index: getDayIndex(dayOfWeek),
        hours
      };

      return item;
    })
    .sort(sortByDayOfWeek);

  return {
    type: GET_JSON_FROM_INPUT,
    payload: weeklyOpeningHours
  };
}
