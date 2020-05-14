import {ResultsTier, ResultsWinningNumbers} from './ResultsResponseModel'

interface ResultsDOMFields {
  id: number
  drawingDate: string
  winningNumbers?: ResultsWinningNumbers
  tiers?: ResultsTier[]
}

export interface ResultsDOM {
  currency: string
  last: ResultsDOMFields
  next: ResultsDOMFields
}
