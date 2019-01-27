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

export const getDayIndex = day => {
  switch (day) {
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
      return 0;
  }
};
