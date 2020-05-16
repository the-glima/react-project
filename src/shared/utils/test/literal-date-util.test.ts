import {literalDateUtil} from '../literal-date-util'

describe('Util: Literal Date', () => {
  it('should return the literal version of a string date', () => {
    expect(literalDateUtil('01/01/2000')).toEqual('Saturday, 1 January 2000')
  })

  it('should return non literal version of a string date', () => {
    expect(literalDateUtil('01/01/2000', false)).toEqual('01/01/2000')
  })

  it(`it should return the original param if you don't pass a date string`, () => {
    try {
      literalDateUtil('foo')
    } catch (error) {
      expect(error).toBeInstanceOf(RangeError)
      expect(error.toString()).toEqual('RangeError: Invalid time value')
    }

    try {
      literalDateUtil(undefined as any)
    } catch (error) {
      expect(error).toBeInstanceOf(RangeError)
      expect(error.toString()).toEqual('RangeError: Invalid time value')
    }
  })
})
