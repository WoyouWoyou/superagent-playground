import test from 'node:test'
import assert from 'node:assert/strict'
import { subtotal, total } from '../src/cart.js'

const smallLines = [
  { unitPrice: 0.03, quantity: 1 },
  { unitPrice: 0.03, quantity: 1 },
  { unitPrice: 0.03, quantity: 1 },
]

test('subtotal sums every line exactly', () => {
  assert.equal(subtotal(smallLines), 0.09)
})

test('a percentage discount applies once to the basket total', () => {
  // 0.09 less 10% is 0.081, which rounds to 0.08.
  assert.equal(total(smallLines, 10), 0.08)
})

test('no discount leaves the subtotal unchanged', () => {
  assert.equal(total([{ unitPrice: 1.5, quantity: 2 }]), 3)
})
