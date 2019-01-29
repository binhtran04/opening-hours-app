import * as utils from "./index";

it("format unix time", () => {
  expect(utils.formatUnixTime(3600)).toEqual("1 AM");
  expect(utils.formatUnixTime(36000)).toEqual("10 AM");
  expect(utils.formatUnixTime(64800)).toEqual("6 PM");
  expect(utils.formatUnixTime(37800)).toEqual("10.30 AM");
  expect(utils.formatUnixTime("")).toEqual("");
  expect(utils.formatUnixTime(null)).toEqual("");
  expect(utils.formatUnixTime(undefined)).toEqual("");
});

it("get correct day index", () => {
  expect(utils.getDayIndex("monday")).toEqual(1);
  expect(utils.getDayIndex("Monday")).toEqual(1);
  expect(utils.getDayIndex("thursday")).toEqual(4);
  expect(utils.getDayIndex("saturday")).toEqual(6);
  expect(utils.getDayIndex("Wednesday")).toEqual(3);
  expect(utils.getDayIndex(null)).toEqual(1000);
  expect(utils.getDayIndex(undefined)).toEqual(1000);
  expect(utils.getDayIndex("not valid day")).toEqual(1000);
});

it("get opening hours", () => {
  const mondayHours = [];
  const tuesdayHours = [
    {
      type: "open",
      value: 36000
    },
    {
      type: "close",
      value: 64800
    }
  ];
  const fridayHours = [
    {
      type: "open",
      value: 36000
    }
  ];
  const saturdayHours = [
    {
      type: "close",
      value: 3600
    },
    {
      type: "open",
      value: 36000
    },
    {
      type: "close",
      value: 39600
    },
    {
      type: "open",
      value: 57600
    }
  ];
  const sundayHours = [
    {
      type: "close",
      value: 3600
    },
    {
      type: "open",
      value: 43200
    },
    {
      type: "close",
      value: 75600
    }
  ];

  expect(utils.getOpeningHours(mondayHours, tuesdayHours)).toEqual([]);
  expect(utils.getOpeningHours(fridayHours, saturdayHours)).toEqual([
    {
      type: "open",
      value: 36000
    },
    {
      type: "close",
      value: 3600
    }
  ]);
  expect(utils.getOpeningHours(saturdayHours, sundayHours)).toEqual([
    {
      type: "open",
      value: 36000
    },
    {
      type: "close",
      value: 39600
    },
    {
      type: "open",
      value: 57600
    },
    {
      type: "close",
      value: 3600
    }
  ]);
  expect(utils.getOpeningHours(sundayHours, mondayHours)).toEqual([
    {
      type: "open",
      value: 43200
    },
    {
      type: "close",
      value: 75600
    }
  ]);
});
