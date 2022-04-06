import { GPDate } from "./GPDate";
import { GPDateStringFormat } from "./types";

/**
 * Formats a date into a string with the desired format
 */
export function formatGPDateToString(
  date: GPDate,
  format: GPDateStringFormat
): string {
  const { YYYY, YY, MM, M, DD, D } = date.toDateParts();
  switch (format) {
    case "YYMMDD":
      return `${YY}${MM}${DD}`;
    case "MMDDYY":
      return `${MM}${DD}${YY}`;
    case "MM/DD/YY":
      return `${MM}/${DD}/${YY}`;
    case "MM-DD-YY":
      return `${MM}-${DD}-${YY}`;
    case "MM/DD/YYYY":
      return `${MM}/${DD}/${YYYY}`;
    case "MM-DD-YYYY":
      return `${MM}-${DD}-${YYYY}`;
    case "MM/YY":
      return `${MM}/${YY}`;
    case "MM-YY":
      return `${MM}-${YY}`;
    case "MM/YYYY":
      return `${MM}/${YYYY}`;
    case "MM-YYYY":
      return `${MM}-${YYYY}`;
    case "YYYY/MM/DD":
      return `${YYYY}/${MM}/${DD}`;
    case "YYYY-MM-DD":
      return `${YYYY}-${MM}-${DD}`;
  }
}
