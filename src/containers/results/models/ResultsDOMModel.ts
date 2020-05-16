import {ResultsTier, ResultsWinningNumbers} from './ResultsResponseModel'

export interface ResultsDOMDate {
  day: number
  month: number
  year: number
  hour: number
  minute: number
}

export interface ResultsDOMFields {
  id: number
  date: ResultsDOMDate
  drawingDate: string
  winningNumbers?: ResultsWinningNumbers
  tiers?: ResultsTier[]
}

export interface ResultsDOM {
  currency: string
  last: ResultsDOMFields
  next: ResultsDOMFields
}
