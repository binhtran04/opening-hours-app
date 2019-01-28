import { GET_JSON_FROM_INPUT } from "./types";
import {
  formatUnixTime,
  getDayIndex,
  sortByHourValue,
  sortByDayOfWeek
} from "../utils";

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

  // move the special close hour (hour span to the next day)
  // to the previous day
  /* weeklyOpeningHours.forEach((item, index, array) => {
     const nextItem = array[index + 1];

    // not empty hours data
    // and not the last item
    // and last hour obj is type "open"
    // and first hour obj of next day is "close"
    if (
      item.hoursData.length &&
      nextItem &&
      item.hoursData[item.hoursData.length - 1].type === "open" &&
      nextItem.hoursData[0].type === "close"
    ) {
      const movedHour = nextItem.hoursData.shift();
      item.hoursData.push(movedHour);
    }
  });

  weeklyOpeningHours.forEach(item => {
    item.hours = item.hoursData.map(hoursItem => {
      return formatUnixTime(hoursItem.value);
    });
  }); */

  return {
    type: GET_JSON_FROM_INPUT,
    payload: weeklyOpeningHours
  };
}
