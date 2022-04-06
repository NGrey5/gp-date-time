import { GPDate } from "./GPDate";

describe("GPDate", () => {
  it("should create with the current date", () => {
    const date = new Date();
    const gpDate = new GPDate();

    expect(date).toEqual(gpDate.toDate());
  });

  it("should create with a provided date", () => {
    const date = new Date("05-15-1996");
    const gpDate = new GPDate(date);
    expect(gpDate.toDate()).toEqual(date);
  });

  it("should create a new GPDate from YYMMDD string", () => {
    const YYMMDD = "960515";
    const gpDate = GPDate.fromYYMMDD(YYMMDD);

    const compareDate = new Date("05-15-1996");
    expect(gpDate.toDate()).toEqual(compareDate);
  });

  it("should throw an error from an invalid formatted YYMMDD", () => {
    const invalid = "05151996";
    try {
      const gpDate = GPDate.fromYYMMDD(invalid);
      fail();
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });

  it("should throw an error from an invalid date result from YYMMDD", () => {
    const invalid = "200231"; // February 31st 2020 is not a date
    try {
      const gpDate = GPDate.fromYYMMDD(invalid);
      fail();
    } catch (err) {
      expect(err).toBeTruthy();
    }
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
