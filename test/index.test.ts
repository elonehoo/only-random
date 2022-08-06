import { describe, it } from 'vitest'
import onlyRandom from '../src/index'

describe('should', () => {
  it('exported', () => {
    const random = onlyRandom(1,10)
    let count = 1000
	  let currentValue
	  let previousValue

    while (--count > 0) {
      currentValue = random

      if (
        currentValue === previousValue ||
        currentValue > 10 ||
        currentValue < 1
      ) {
        break
      }

      previousValue = currentValue
    }
  })
})
