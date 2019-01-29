/**
 * Get the unix time and return the corresponding time string
 * @param {number} unixTime
 * @returns {string} 12 hour format e.g. 10 AM
 */
export const formatUnixTime = unixTime => {
  if (isNaN(parseInt(unixTime, 10))) {
    return "";
  }
  const convertedDate = new Date(unixTime * 1000);
  const isPM = convertedDate.getUTCHours() >= 12;
  const isMidday = convertedDate.getUTCHours() === 12;
  const hours = convertedDate.getUTCHours() - (isPM && !isMidday ? 12 : 0);
  const minutes =
    convertedDate.getUTCMinutes() === 0
      ? ""
      : "0" + convertedDate.getUTCMinutes();

  return `${hours}${minutes === "" ? "" : "." + minutes.substr(-2)} ${
    isPM ? "PM" : "AM"
  }`;
};

/**
 *
 * @param {string} dayOfWeek
 * @returns {number} index of the day
 */
export const getDayIndex = dayOfWeek => {
  if (typeof dayOfWeek !== "string") {
    return 1000;
  }
  switch (dayOfWeek.toLowerCase()) {
    case "monday":
      return 1;
    case "tuesday":
      return 2;
    case "wednesday":
      return 3;
    case "thursday":
      return 4;
    case "friday":
      return 5;
    case "saturday":
      return 6;
    case "sunday":
      return 7;
    default:
      return 1000;
  }
};

/**
 * Compare the opening hours of two concecutive days
 * and return the correct opening hours for the current day.
 * @param {array} todayHours
 * @param {array} nextDayHours
 * @returns {array} correct opening hours
 */
export const getOpeningHours = (todayHours, nextDayHours) => {
  if (!todayHours.length) {
    return [];
  }

  // remove the first hour if type close
  if (todayHours[0].type === "close") {
    todayHours = todayHours.slice(1);
  }

  // add the close hour from the next day if any
  if (
    todayHours[todayHours.length - 1].type === "open" &&
    nextDayHours[0].type === "close"
  ) {
    var hours = [...todayHours, nextDayHours[0]];
    return hours;
  }

  return todayHours;
};

/**
 * Take day of the week and return true if the day is today
 * otherwise return false
 * @param {string} dayOfWeek
 * @returns {boolean} isToday
 */
export const isToday = dayOfWeek => {
  const now = new Date();
  const todayIndex = now.getDay();
  const currentDayIndex = getDayIndex(dayOfWeek);

  return (
    todayIndex === currentDayIndex ||
    (todayIndex === 0 && currentDayIndex === 7)
  );
};
