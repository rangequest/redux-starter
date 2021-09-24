import { isEven } from './math'

describe('isEven', () => {
  it('should return true for even number input', () => {
    const result = isEven(2)
    expect(result).toEqual(true)
  })

  it('should return false for odd number input', () => {
    const result = isEven(1)
    expect(result).toEqual(false)
  })
})
