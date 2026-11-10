import { inCents, roundToCents, sumCents } from './money.js'

/** The price of one line, rounded to cents. */
export function lineTotal(line) {
  return roundToCents(line.unitPrice * line.quantity)
}

/** The sum of every line, in cents, so intermediate results never lose precision. */
export function subtotal(lines) {
  return sumCents(lines.map(line => ({ cents: inCents(line.unitPrice * line.quantity) }))) / 100
}

/** A percentage discount, applied to an amount already rounded to cents. */
export function applyPercentageDiscount(amount, percent) {
  return roundToCents(amount * (1 - percent / 100))
}

/** The final total: the basket, less a percentage discount. */
export function total(lines, percent = 0) {
  return applyPercentageDiscount(subtotal(lines), percent)
}
