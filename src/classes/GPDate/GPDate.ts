import { isValidYYMMDD } from "../../functions/validate";
import { formatGPDateToString } from "./functions";
import { GPDateStringFormat } from "./types";

type GPDateInput = string | Date;

/**
 * Wrapper class for the standard `Date` object. Provides some additional
 * common functionality.
 *
 * Takes an `iso` date string or `Date` object in the constructor to implement the required date. If no date provided it will default to the current date.
 */
export class GPDate {
  private _iso: string;
  private get _date(): Date {
    return new Date(this._iso);
  }

  constructor(date?: GPDateInput) {
    if (!date) {
      this._iso = new Date().toISOString();
      return;
    }
    if (typeof date === "string") {
      this._iso = date;
      return;
    }
    if (date instanceof Date) {
      this._iso = date.toISOString();
      return;
    }
    this._iso = "";
  }

  /**
   * Validates a standard date object and returns a boolean
   * denoting if the date is a valid date.
   * @param date Standard `Date` object
   * @returns boolean
   */
  public static isValidDate(value: GPDateInput): boolean {
    // If value is of type string, parse a date from it and check if it's a valid date string
    if (typeof value === "string") {
      return !isNaN(Date.parse(value));
    }
    // If value is a Date object, get the value of the date and return if it's a number or not
    else if (value instanceof Date) {
      return !isNaN(value.valueOf());
    }
    return false;
  }

  public static isValidYYMMDD = isValidYYMMDD;

  /**
   * Static method returns a new `GPDate` derived from the `YYMMDD` formatted date string provided.
   *
   * If `dateString` is not in format `YYMMDD` or the end result is not a valid date,
   * then an error will be thrown.
   * @param dateString date string formatted YYMMDD
   * @returns `GPDate`
   */
  public static fromYYMMDD(dateString: string): GPDate {
    if (!isValidYYMMDD(dateString)) {
      throw new Error(`${dateString} is not in format YYMMDD.`);
    }
    const YY = dateString.substring(0, 2);
    const MM = dateString.substring(2, 4);
    const DD = dateString.substring(4, 6);
    const date = new Date(`${MM}/${DD}/${YY}`);
    if (!this.isValidDate(date)) {
      throw new Error(`${date.toISOString()} is not a valid date.`);
    }
    return new GPDate(date);
  }

  /**
   * Returns the iso string from the date
   * @returns string
   */
  public toISOString(): string {
    return this._date.toISOString();
  }

  /**
   * Returns the UTC string from the date
   * @returns string
   */
  public toUTCString(): string {
    return this._date.toUTCString();
  }

  /**
   * Returns a string formatted to the `format` specified
   * @param format `GPDateStringFormat`
   * @returns string
   */
  public toFormat(format: GPDateStringFormat): string {
    return formatGPDateToString(this, format);
  }

  /**
   * Alias for `GPDate.toFormat('YYMMDD')`
   * @returns string
   */
  public toGPDateString(): string {
    return this.toFormat("YYMMDD");
  }

  /**
   * Gets a multitude of date parts in various formats from the current date
   * @returns Object
   */
  public toDateParts() {
    const d = this._date;
    return {
      year: d.getFullYear(),
      YYYY: d.getFullYear().toString(),
      YY: d.getFullYear().toString().slice(-2),
      month: d.getMonth() + 1,
      MM: ("0" + (d.getMonth() + 1)).slice(-2),
      M: (d.getMonth() + 1).toString(),
      date: d.getDate(),
      DD: ("0" + d.getDate()).slice(-2),
      D: d.getDate().toString(),
    };
  }

  /**
   * Get the standard `Date` object
   * @returns `Date`
   */
  public toDate(): Date {
    return this._date;
  }
}
