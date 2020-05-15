import {ResultsTier, ResultsWinningNumbers} from './ResultsResponseModel'

interface ResultsDOMFields {
  id: number
  date: {
    day: number
    month: number
    year: number
    hour: number
    minute: number
  }
  drawingDate: string
  winningNumbers?: ResultsWinningNumbers
  tiers?: ResultsTier[]
}

export interface ResultsDOM {
  currency: string
  last: ResultsDOMFields
  next: ResultsDOMFields
}
