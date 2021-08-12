import { validateGPDateString } from "./validateGPDateString";

describe("validGPDateString", () => {
  it("should validate a gp date string", () => {
    const invalid = "05151996";
    const valid = "960515";
    expect(validateGPDateString(invalid)).toBeFalsy();
    expect(validateGPDateString(valid)).toBeTruthy();
  });
});
