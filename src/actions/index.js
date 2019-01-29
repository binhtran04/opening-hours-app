import { GET_JSON_FROM_INPUT } from "./types";
import { getDayIndex } from "../utils";

export function getJsonFromInput(jsonData) {
  const _sortByDayOfWeek = (a, b) => {
    const dayIndexA = getDayIndex(a.dayOfWeek);
    const dayIndexB = getDayIndex(b.dayOfWeek);
    return dayIndexA - dayIndexB;
  };

  const _sortByHourValue = (a, b) => {
    return a.value - b.value;
  };

  const weeklyOpeningHours = Object.keys(jsonData)
    .map(dayOfWeek => {
      const hours = jsonData[dayOfWeek].sort(_sortByHourValue);

      const item = {
        dayOfWeek,
        index: getDayIndex(dayOfWeek),
        hours
      };

      return item;
    })
    .sort(_sortByDayOfWeek);

  return {
    type: GET_JSON_FROM_INPUT,
    payload: weeklyOpeningHours
  };
}
