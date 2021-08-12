export type GPDateStringFormat =
  | "YYMMDD"
  | "MMDDYY"
  | "MM/DD/YY"
  | "MM-DD-YY"
  | "MM/DD/YYYY"
  | "MM-DD-YYYY"
  | "MM/YY"
  | "MM-YY"
  | "MM/YYYY"
  | "MM-YYYY";

export type GPDateStringOptions = {
  format?: GPDateStringFormat;
};