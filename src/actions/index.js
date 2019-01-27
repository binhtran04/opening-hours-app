import { PARSE_HOURS_JSON_DATA } from "./types";
import { formatUnixTime, getDayIndex } from "../utils";

export function parseHoursJSONData(jsonData) {
  let openingHoursArr = Object.keys(jsonData).map(day => {
    // sort hours data
    const hoursData = jsonData[day].sort((a, b) => {
      return a.value - b.value;
    });

    const item = {
      day,
      index: getDayIndex(day),
      hoursData
    };

    return item;
  });

  // move the special close hour (hour span to the next day)
  // to the previous day
  openingHoursArr.forEach((item, index, array) => {
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

  openingHoursArr.forEach(item => {
    item.hours = item.hoursData.map(hoursItem => {
      return formatUnixTime(hoursItem.value);
    });
  });

  return {
    type: PARSE_HOURS_JSON_DATA,
    payload: openingHoursArr
  };
}
