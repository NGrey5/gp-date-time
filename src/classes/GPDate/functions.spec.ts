import { newDateFromGPDateString } from "./functions";

describe("GPDate functions", () => {
  it("should return a new date from a GP date string", () => {
    const gpDateString = "960515";
    const compareDate = new Date("05-15-1996");
    const date = newDateFromGPDateString(gpDateString);
    expect(date).toEqual(compareDate);
  });
});
