export const formatUnixTime = unixTime => {
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

export const getDayIndex = dayOfWeek => {
  switch (dayOfWeek) {
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
      return null;
  }
};

export const sortByDayOfWeek = (a, b) => {
  const dayIndexA = getDayIndex(a.dayOfWeek);
  const dayIndexB = getDayIndex(b.dayOfWeek);
  return dayIndexA - dayIndexB;
};

export const sortByHourValue = (a, b) => {
  return a.value - b.value;
};

export const geteOpeningHours = (todayHours, nextDayHours) => {
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

export const isToday = dayOfWeek => {
  const now = new Date();
  const todayIndex = now.getDay();
  const currentDayIndex = getDayIndex(dayOfWeek);

  return (
    todayIndex === currentDayIndex ||
    (todayIndex === 0 && currentDayIndex === 7)
  );
};

export const generateHoursDisplayText = formattedHours => {
  if (!formattedHours.length) {
    return "Closed";
  }

  let hourDisplayText = "";
  formattedHours.forEach((item, index) => {
    if (index === 0) {
      hourDisplayText += item;
      return;
    }
    if (index % 2 === 0) {
      hourDisplayText += `, ${item}`;
    } else {
      hourDisplayText += ` - ${item}`;
    }
  });

  return hourDisplayText;
};
