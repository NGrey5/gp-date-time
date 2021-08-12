import { formatDateToString, newDateFromGPDateString } from "./functions";
import { validateGPDateString } from "../../functions/validateGPDateString";
import { GPDateStringFormat, GPDateStringOptions } from "./types";

export class GPDate {
  private date: Date = new Date();

  constructor(date?: Date) {
    if (date) this.date = date;
  }

  public setFromGPDateString(dateString: string): GPDate {
    const isValid = validateGPDateString(dateString);
    if (!isValid) {
      throw new Error("Not valid GP Date string");
    }
    this.date = newDateFromGPDateString(dateString);
    return this;
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
