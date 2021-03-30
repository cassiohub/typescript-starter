import add from './index'

describe('index', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 2)).toBe(3)
    })
    it('should use the default value to add two numbers', () => {
      expect(add(1)).toBe(12)
    })
  })
})
