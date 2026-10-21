/**
 * Money and number formatting for the trader's room.
 * All amounts in the app go through these helpers so the
 * locale, currency display and sign rules stay consistent.
 */

const moneyFormatters = new Map<string, Intl.NumberFormat>();

export function formatMoney(
  amount: number,
  currency = "USD",
  options: { signed?: boolean } = {},
): string {
  const key = `${currency}:${options.signed ? "s" : "u"}`;
  let formatter = moneyFormatters.get(key);
  if (!formatter) {
    formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      signDisplay: options.signed ? "exceptZero" : "auto",
    });
    moneyFormatters.set(key, formatter);
  }
  return formatter.format(amount);
}

export function formatPercent(value: number, options: { signed?: boolean } = {}): string {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: options.signed ? "exceptZero" : "auto",
  }).format(value / 100);
}

/** Hides a balance while keeping its length roughly recognizable. */
export function maskAmount(): string {
  return "••••••";
}
