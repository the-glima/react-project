import {thousandSeparatorUtil} from '../thousand-separator-util'

describe('Util: Thousand Separator', () => {
  it('should return the string number with thousand comma separator', () => {
    expect(thousandSeparatorUtil(8)).toEqual('8')
    expect(thousandSeparatorUtil(841)).toEqual('841')
    expect(thousandSeparatorUtil(1444)).toEqual('1,444')
    expect(thousandSeparatorUtil(257278)).toEqual('257,278')
    expect(thousandSeparatorUtil(1000000)).toEqual('1,000,000')
  })

  it(`it should return the original param if you don't pass a number`, () => {
    expect(thousandSeparatorUtil('foo' as any)).toEqual('foo')
    expect(thousandSeparatorUtil(null as any)).toEqual(null)
    expect(thousandSeparatorUtil(undefined as any)).toEqual(undefined)
    expect(thousandSeparatorUtil([] as any)).toEqual([])
    expect(thousandSeparatorUtil({} as any)).toEqual({})
  })
})
