import { GP_DATE_RX_PATTERN } from "../constants";

export function validateGPDateString(gpDateString: string): boolean {
  const rxPattern = GP_DATE_RX_PATTERN; // six numbers 001122
  if (!rxPattern.test(gpDateString)) return false;
  return true;
}
