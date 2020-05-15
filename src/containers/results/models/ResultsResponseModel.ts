export interface ResultsResponse {
  last: {
    nr: number
    currency: string
    date: ResultsDate
    closingDate: string
    lateClosingDate: string
    drawingDate: string
    numbers: number[]
    euroNumbers: number[]
    jackpot: string
    marketingJackpot: string
    specialMarketingJackpot: string
    climbedSince: number
    Winners: number
    odds: {
      [key: string]: ResultsTier
    }
  }
  next: {
    nr: number
    currency: string
    date: ResultsDate
    closingDate: string
    lateClosingDate: string
    drawingDate: string
    jackpot: string
    marketingJackpot: string
    specialMarketingJackpot: string
    climbedSince: number
  }
}

export interface ResultsTier {
  winners: number
  specialPrize: number
  prize: number
}

export interface ResultsWinningNumbers {
  numbers: number[]
  euroNumbers: number[]
}

export interface ResultsDate {
  day: number
  month: number
  year: number
  hour: number
  minute: number
  dayOfWeek: string
  full: string
}
