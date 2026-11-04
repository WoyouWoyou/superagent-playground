/** Money helpers. All amounts are decimal dollars; cents are integers. */

export const roundToCents = value => Math.round(value * 100) / 100

export const inCents = value => Math.round(value * 100)

export const sumCents = items => items.reduce((total, item) => total + item.cents, 0)
