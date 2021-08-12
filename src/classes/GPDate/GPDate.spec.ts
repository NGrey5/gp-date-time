import { GPDate } from "./GPDate";
import { GPDateStringFormat } from "./types";

describe("GPDate", () => {
  it("should create with the current date", () => {
    const date = new Date();

    const gpDate = new GPDate();

    expect(date).toEqual(gpDate["date"]);
  });

  it("should create with a provided date", () => {
    const date = new Date("05-15-1996");
    const gpDate = new GPDate(date);
    expect(gpDate["date"]).toEqual(date);
  });

  it("should set the date from a valid GP date string", () => {
    const gpDateString = "960515";
    const gpDate = new GPDate();
    gpDate.setDateFromGPDateString(gpDateString);

    const compareDate = new Date("05-15-1996");
    expect(gpDate["date"]).toEqual(compareDate);
  });

  it("should throw an error from an invalid GP date string", () => {
    const gpDate = new GPDate();
    try {
      gpDate.setDateFromGPDateString("05151996");
      fail();
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });

  it("should return the correctly formated date string", () => {
    const date = new Date("05-15-1996");
    const gpDate = new GPDate(date);

    let format: GPDateStringFormat;

    format = "YYMMDD";
    expect(gpDate.toString({ format })).toEqual("960515");

    format = "MMDDYY";
    expect(gpDate.toString({ format })).toEqual("051596");

    format = "MM/DD/YY";
    expect(gpDate.toString({ format })).toEqual("05/15/96");

    format = "MM-DD-YY";
    expect(gpDate.toString({ format })).toEqual("05-15-96");

    format = "MM/DD/YYYY";
    expect(gpDate.toString({ format })).toEqual("05/15/1996");

    format = "MM-DD-YYYY";
    expect(gpDate.toString({ format })).toEqual("05-15-1996");

    format = "MM/YY";
    expect(gpDate.toString({ format })).toEqual("05/96");

    format = "MM-YY";
    expect(gpDate.toString({ format })).toEqual("05-96");

    format = "MM/YYYY";
    expect(gpDate.toString({ format })).toEqual("05/1996");

    format = "MM-YYYY";
    expect(gpDate.toString({ format })).toEqual("05-1996");
  });

  it("should return the gp date string format", () => {
    const date = new Date("05-15-1996");
    const gpDate = new GPDate(date);

    expect(gpDate.toGPDateString()).toEqual("960515");
  });

  it("should return the Date object", () => {
    const date = new Date("05-15-1996");
    const gpDate = new GPDate(date);

    expect(gpDate.toDate()).toEqual(date);
  });
});
