import {romanizeUtil} from './romanize-util'

describe('Util: Romanize', () => {
  it('should return the roman numeral given a number', () => {
    expect(romanizeUtil(0)).toEqual('I')
    expect(romanizeUtil(1)).toEqual('I')
    expect(romanizeUtil(2)).toEqual('II')
    expect(romanizeUtil(4)).toEqual('IV')
    expect(romanizeUtil(5)).toEqual('V')
    expect(romanizeUtil(9)).toEqual('IX')
    expect(romanizeUtil(10)).toEqual('X')
    expect(romanizeUtil(16)).toEqual('XVI')
    expect(romanizeUtil(40)).toEqual('XL')
    expect(romanizeUtil(50)).toEqual('L')
    expect(romanizeUtil(400)).toEqual('CD')
    expect(romanizeUtil(1000)).toEqual('M')
  })

  it(`it should return the original param if you don't pass a number`, () => {
    expect(romanizeUtil('1' as any)).toEqual('1')
    expect(typeof romanizeUtil('1' as any)).toBe('string')

    expect(romanizeUtil([] as any)).toEqual([])
    expect(Array.isArray(romanizeUtil([] as any))).toBeTruthy()

    expect(romanizeUtil(null as any)).toEqual(null)
    expect(typeof romanizeUtil(null as any)).toBe('object')

    expect(romanizeUtil(undefined as any)).toEqual(undefined)
    expect(typeof romanizeUtil(undefined as any)).toBe('undefined')
  })
})
