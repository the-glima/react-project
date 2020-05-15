import {ResultsResponse, ResultsTier, ResultsWinningNumbers} from '../models/ResultsResponseModel'
import {ResultsDOM} from '../models/ResultsDOMModel'
import {settings} from '../../settings'

const ResultsService = {
  fetchData: async function (url = settings.api.url): Promise<ResultsResponse> {
    try {
      const response = await fetch(url)
      return await response.json()
    } catch (error) {
      return error
    }
  },

  sortTiers: function (tiers: any): any[] {
    return Object.entries(tiers).sort((a, b) => a[0].localeCompare(b[0], 'en', {numeric: true}))
  },

  mapTiers: function (tiers: ResultsTier): ResultsTier[] {
    const sortedTiers: ResultsTier[] = this.sortTiers(tiers)

    return Object.values(sortedTiers).map((tier: any) => ({
      winners: tier[1].winners,
      specialPrize: tier[1].specialPrize,
      prize: tier[1].prize
    }))
  },

  getResults: async function (): Promise<ResultsDOM> {
    const {last, next} = await this.fetchData()
    const tiers = this.mapTiers(last.odds as any)

    return {
      currency: last.currency,
      last: {
        id: last.nr,
        date: {
          day: last.date.day,
          month: last.date.month,
          year: last.date.year,
          hour: last.date.hour,
          minute: last.date.minute
        },
        drawingDate: last.drawingDate,
        winningNumbers: {
          numbers: last.numbers,
          euroNumbers: last.euroNumbers
        },
        tiers: {...tiers}
      },
      next: {
        id: next.nr,
        date: {
          day: last.date.day,
          month: last.date.month,
          year: last.date.year,
          hour: last.date.hour,
          minute: last.date.minute
        },
        drawingDate: next.drawingDate
      }
    }
  },

  filterWinners: function (winners: any): any {
    const data = winners ? Object.values(winners) : null

    return data && data.length ? data.filter((item: any) => item.winners > 0) : data
  },

  getWinningNumbers: function (numbers: any): ResultsWinningNumbers | null {
    return numbers ? numbers : null
  },

  getResultDate: function (date: any, separator = '.'): any {
    const addZero = (number: number) => (number && number < 10 ? `0${number}` : number)

    return date ? `${addZero(date.day)}${separator}${addZero(date.month)}${separator}${date.year}` : null
  }
}

export default ResultsService
