import {ResultsResponse, ResultsTier, ResultsWinningNumbers} from '../models/ResultsResponseModel'
import {ResultsDOM, ResultsDOMDate} from '../models/ResultsDOMModel'
import {settings} from '../../../settings'

const ResultsService = {
  fetchData: async function (url = settings.api.url): Promise<ResultsResponse> {
    try {
      const response = await fetch(url)
      return await response.json()
    } catch (error) {
      throw error
    }
  },

  sortTiers: function (tiers: ResultsTier): any[] {
    return Object.entries(tiers).sort((a, b) => a[0].localeCompare(b[0], 'en', {numeric: true}))
  },

  mapTiers: function (tiers: any): ResultsTier[] {
    const sortedTiers: ResultsTier[] = this.sortTiers(tiers)

    return Object.values(sortedTiers).map((tier: any) => ({
      winners: tier[1].winners,
      specialPrize: tier[1].specialPrize,
      prize: tier[1].prize
    }))
  },

  getResults: async function (): Promise<ResultsDOM> {
    const {last, next} = await this.fetchData()
    const tiers = last?.odds ? this.mapTiers(last.odds) : []

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
        tiers: [...tiers]
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

  getResultWinners: function (winners: ResultsTier[] | undefined): any {
    const data = winners ? Object.values(winners) : null

    return data && data.length ? data.filter((item: any) => item.winners > 0) : null
  },

  getWinningNumbers: function (numbers: ResultsWinningNumbers | undefined): any {
    return numbers ? numbers : null
  },

  getResultDate: function (date: ResultsDOMDate | undefined, separator = '/'): any {
    if (!date) return null

    const addZero = (number: number) => (number && number < 10 ? `0${number}` : number)
    const dateFormatted = date && `${addZero(date.month)}${separator}${addZero(date.day)}${separator}${date.year}`

    return dateFormatted
  }
}

export default ResultsService
