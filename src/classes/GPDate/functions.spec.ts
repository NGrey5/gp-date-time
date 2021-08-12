import { newDateFromGPDateString, testValidGPDateString } from "./functions";

describe("GPDate functions", () => {
  it("should validate a gp date string", () => {
    const invalid = "05151996";
    const valid = "960515";
    expect(testValidGPDateString(invalid)).toBeFalsy();
    expect(testValidGPDateString(valid)).toBeTruthy();
  });

  it("should return a new date from a GP date string", () => {
    const gpDateString = "960515";
    const compareDate = new Date("05-15-1996");
    const date = newDateFromGPDateString(gpDateString);
    expect(date).toEqual(compareDate);
  });
});
