import ResultsService from './ResultsService'
import {ResultsMock} from '../../../test/mocks/ResultsMock'
import fetchMock from 'jest-fetch-mock'
import {enableFetchMocks} from 'jest-fetch-mock'

describe('Service: Results', () => {
  const url = 'https://example.com'

  beforeEach(() => {
    enableFetchMocks()

    fetchMock.resetMocks()
  })

  it('fetchData: should fetch and return json data', async (done) => {
    fetchMock.mockResponseOnce(JSON.stringify(ResultsMock))

    const result = await ResultsService.fetchData(url)

    expect(result).toMatchSnapshot()
    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(fetchMock).toHaveBeenCalledWith(url)
    done()
  })

  it('fetchData: should thrown an error', async (done) => {
    const error = new Error('Something went wrong')
    fetchMock.mockRejectOnce(error)

    const result = await ResultsService.fetchData(url)

    expect(result).toBeInstanceOf(Error)
    expect(result.toString()).toEqual('Error: Something went wrong')
    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(fetchMock).toHaveBeenCalledWith(url)
    done()
  })

  it('sortTiers: should sort tiers in ascending order', () => {
    const tiers = ResultsMock.last.odds
    const result = ResultsService.sortTiers(tiers)

    expect(result).toHaveLength(Object.entries(tiers).length)
    expect(result).toMatchSnapshot()
  })

  it('mapTiers: should map tiers', () => {
    const tiers = ResultsMock.last.odds
    const result = ResultsService.mapTiers(tiers as any)

    expect(result).toHaveLength(Object.entries(tiers).length)
    expect(result).toMatchSnapshot()
  })

  it('getResults: should transform and return results', async (done) => {
    fetchMock.mockResponseOnce(JSON.stringify(ResultsMock))

    const result = await ResultsService.getResults()

    expect(result).toMatchSnapshot()
    done()
  })

  it('filterWinners: should filters winners removing 0 value item', () => {
    const tiers = [
      {
        winners: 0,
        specialPrize: 0,
        prize: 0
      },
      {
        winners: 1,
        specialPrize: 1,
        prize: 1
      },
      {
        winners: 2,
        specialPrize: 2,
        prize: 2
      }
    ]

    const resultNull = ResultsService.filterWinners(undefined)
    expect(resultNull).toBeNull()

    const result = ResultsService.filterWinners(tiers)
    expect(result).toHaveLength(2)
    expect(result[0].winners).toBe(1)
    expect(result[1].winners).toBe(2)
    expect(result).toMatchSnapshot()
  })

  it('getWinningNumbers: should return numbers or null', () => {
    const numbers = {
      numbers: [1, 2, 3, 4],
      euroNumbers: [5, 6, 7]
    }
    const resultNull = ResultsService.getWinningNumbers(undefined)
    expect(resultNull).toBeNull()

    const result = ResultsService.getWinningNumbers(numbers)
    expect(result).toMatchSnapshot()
  })
})
