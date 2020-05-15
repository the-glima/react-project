import {currencyUtil} from './currency-util'

describe('Util: Currency', () => {
  it('should return the roman numeral given a number', () => {
    expect(currencyUtil(1328694340)).toEqual('€ 13.286.943,40')
    expect(currencyUtil(2670)).toEqual('€ 26,70')
    expect(currencyUtil(10, 'R$')).toEqual('R$ 10,00')
    expect(currencyUtil(770, '$')).toEqual('$ 7,70')
    expect(currencyUtil('4444' as any, '$')).toEqual('4444')
  })

  it(`it should return the original param if you don't pass a number or a string number`, () => {
    expect(currencyUtil('foo' as any)).toEqual('foo')
    expect(currencyUtil(null as any)).toEqual(null)
    expect(currencyUtil(undefined as any)).toEqual(undefined)
    expect(currencyUtil([] as any)).toEqual([])
    expect(currencyUtil({} as any)).toEqual({})
  })
})
