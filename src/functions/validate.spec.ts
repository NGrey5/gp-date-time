import { isValidYYMMDD } from "./validate";

describe("isValidYYMMDD", () => {
  it("should validate a date string of format YYMMDD", () => {
    const invalid1 = "05151996";
    const invalid2 = "51596";
    const valid = "960515";
    expect(isValidYYMMDD(invalid1)).toBeFalsy();
    expect(isValidYYMMDD(invalid2)).toBeFalsy();
    expect(isValidYYMMDD(valid)).toBeTruthy();
  });
});
