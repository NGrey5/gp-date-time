import {
  formatDateToString,
  newDateFromGPDateString,
  testValidGPDateString,
} from "./functions";
import { GPDateStringFormat, GPDateStringOptions } from "./types";

export class GPDate {
  private date: Date = new Date();

  constructor(date?: Date) {
    if (date) this.date = date;
  }

  public setDateFromGPDateString(dateString: string): void {
    const isValid = testValidGPDateString(dateString);
    if (!isValid) {
      throw new Error("Not valid GP Date string");
    }
    this.date = newDateFromGPDateString(dateString);
  }

  public toString(options?: GPDateStringOptions) {
    const optionsFormat = options?.format;
    const format: GPDateStringFormat = optionsFormat
      ? optionsFormat
      : "MM/DD/YY";
    return formatDateToString(this.date, format);
  }

  public toGPDateString(): string {
    return this.toString({ format: "YYMMDD" });
  }

  public toDate(): Date {
    return this.date;
  }
}
