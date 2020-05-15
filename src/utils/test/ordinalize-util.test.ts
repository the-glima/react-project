import {ordinalizeUtil} from '../ordinalize-util'

describe('Util: Ordinalize', () => {
  it('should return the string number with ordinal suffix', () => {
    expect(ordinalizeUtil(1)).toEqual('1st')
    expect(ordinalizeUtil(2)).toEqual('2nd')
    expect(ordinalizeUtil(3)).toEqual('3rd')
    expect(ordinalizeUtil(4)).toEqual('4th')
    expect(ordinalizeUtil(55)).toEqual('55th')
    expect(ordinalizeUtil(100)).toEqual('100th')
  })

  it(`it should return the original param if you don't pass a number`, () => {
    expect(ordinalizeUtil('foo' as any)).toEqual('foo')
    expect(ordinalizeUtil(null as any)).toEqual(null)
    expect(ordinalizeUtil(undefined as any)).toEqual(undefined)
    expect(ordinalizeUtil([] as any)).toEqual([])
    expect(ordinalizeUtil({} as any)).toEqual({})
  })
})
