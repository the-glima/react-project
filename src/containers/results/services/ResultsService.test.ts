import ResultsService from './ResultsService'
import fetchMock from 'jest-fetch-mock'
import {enableFetchMocks} from 'jest-fetch-mock'

import {resultsMock} from '../../../../test/mocks/results-mock'
import {resultsStoreTiersMock} from '../../../../test/mocks'

describe('Service: Results', () => {
  const url = 'https://example.com'

  beforeEach(() => {
    enableFetchMocks()

    fetchMock.resetMocks()
  })

  it('fetchData: should fetch and return json data', async (done) => {
    fetchMock.mockResponseOnce(JSON.stringify(resultsMock))

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
    const tiers = resultsMock.last.odds
    const result = ResultsService.sortTiers(tiers)

    expect(result).toHaveLength(Object.entries(tiers).length)
    expect(result).toMatchSnapshot()
  })

  it('mapTiers: should map tiers', () => {
    const tiers = resultsMock.last.odds
    const result = ResultsService.mapTiers(tiers as any)

    expect(result).toHaveLength(Object.entries(tiers).length)
    expect(result).toMatchSnapshot()
  })

  it('getResults: should transform and return results', async (done) => {
    fetchMock.mockResponseOnce(JSON.stringify(resultsMock))

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
      ...resultsStoreTiersMock
    ]

    const resultNull = ResultsService.getResultWinners(undefined)
    expect(resultNull).toBeNull()

    const result = ResultsService.getResultWinners(tiers)
    expect(result).toHaveLength(12)
    expect(result[0].winners).toBe(1)
    expect(result[0].specialPrize).toBe(0)
    expect(result[0].prize).toBe(1328694340)
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

  it('getResultDate: should return a formatted date string or null', () => {
    const date = {
      day: 28,
      month: 2,
      year: 1987,
      hour: 0,
      minute: 59
    }

    const resultNull = ResultsService.getResultDate(undefined)
    expect(resultNull).toBeNull()

    const result = ResultsService.getResultDate(date)
    expect(result).toBe('02/28/1987')

    const resultDot = ResultsService.getResultDate(date, '.')
    expect(resultDot).toBe('02.28.1987')
  })
})
