/**
 * Returns a boolean denoting if the string is in format YYMMDD
 * @param dateString string formatted YYMMDD
 * @returns boolean
 */
export function isValidYYMMDD(dateString: string): boolean {
  const rxPattern = /^(\d{2})(\d{2})(\d{2})$/;
  if (!rxPattern.test(dateString)) return false;
  return true;
}
