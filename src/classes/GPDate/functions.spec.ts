import { formatGPDateToString } from "./functions";
import { GPDate } from "./GPDate";

describe("Formats", () => {
  it("should correctly return the proper formats", () => {
    const date = new Date("05/15/1996");
    const g = new GPDate(date);

    const f = formatGPDateToString;

    expect(f(g, "YYMMDD")).toEqual("960515");
    expect(f(g, "MMDDYY")).toEqual("051596");
    expect(f(g, "MM/DD/YY")).toEqual("05/15/96");
    expect(f(g, "MM-DD-YY")).toEqual("05-15-96");
    expect(f(g, "MM/DD/YYYY")).toEqual("05/15/1996");
    expect(f(g, "MM-DD-YYYY")).toEqual("05-15-1996");
    expect(f(g, "MM/YY")).toEqual("05/96");
    expect(f(g, "MM-YY")).toEqual("05-96");
    expect(f(g, "MM/YYYY")).toEqual("05/1996");
    expect(f(g, "MM-YYYY")).toEqual("05-1996");
    expect(f(g, "YYYY/MM/DD")).toEqual("1996/05/15");
    expect(f(g, "YYYY-MM-DD")).toEqual("1996-05-15");
  });
});
