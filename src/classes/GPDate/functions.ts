import { GPDateStringFormat } from "./types";

/**
 * Returns a new Date constructed from the GP date string provided
 */
export function newDateFromGPDateString(dateString: string): Date {
  const { day, month, year } = getDateObjectFromGPDate(dateString);
  return new Date(`${month}/${day}/${year}`);
}

/**
 * Formats a date into a string with the desired format
 */
export function formatDateToString(
  date: Date,
  format: GPDateStringFormat
): string {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  let str = "N/A";
  let parts = [];
  switch (format) {
    case "YYMMDD":
      str =
        formatTwoDigitString(year) +
        formatTwoDigitString(month) +
        formatTwoDigitString(day);
      break;
    case "MMDDYY":
      str =
        formatTwoDigitString(month) +
        formatTwoDigitString(day) +
        formatTwoDigitString(year);
      break;
    case "MM/DD/YY":
      parts = [
        formatTwoDigitString(month),
        formatTwoDigitString(day),
        formatTwoDigitString(year),
      ];
      str = parts.join("/");
      break;
    case "MM-DD-YY":
      parts = [
        formatTwoDigitString(month),
        formatTwoDigitString(day),
        formatTwoDigitString(year),
      ];
      str = parts.join("-");
      break;
    case "MM/DD/YYYY":
      parts = [formatTwoDigitString(month), formatTwoDigitString(day), year];
      str = parts.join("/");
      break;
    case "MM-DD-YYYY":
      parts = [formatTwoDigitString(month), formatTwoDigitString(day), year];
      str = parts.join("-");
      break;
    case "MM/YY":
      parts = [formatTwoDigitString(month), formatTwoDigitString(year)];
      str = parts.join("/");
      break;
    case "MM-YY":
      parts = [formatTwoDigitString(month), formatTwoDigitString(year)];
      str = parts.join("-");
      break;
    case "MM/YYYY":
      parts = [formatTwoDigitString(month), year];
      str = parts.join("/");
      break;
    case "MM-YYYY":
      parts = [formatTwoDigitString(month), year];
      str = parts.join("-");
      break;
  }
  return str;
}

/**
 * Returns an object with day, month, and year as properties
 */
function getDateObjectFromGPDate(gpDate: string): {
  day: string;
  month: string;
  year: string;
} {
  return {
    day: gpDate.substring(4, 6),
    month: gpDate.substring(2, 4),
    year: gpDate.substring(0, 2),
  };
}

/**
 * Formats a number or string into a two digit string. Will have a leading "0" if length is 1
 */
function formatTwoDigitString(str: string | number): string {
  const strF = str.toString();
  return ("0" + strF).slice(-2);
}
