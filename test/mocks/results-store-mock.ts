export const resultsStoreTiersMock = [
  {
    winners: 1,
    specialPrize: 0,
    prize: 1328694340
  },
  {
    winners: 4,
    specialPrize: 0,
    prize: 47210980
  },
  {
    winners: 8,
    specialPrize: 0,
    prize: 8331350
  },
  {
    winners: 46,
    specialPrize: 0,
    prize: 482970
  },
  {
    winners: 841,
    specialPrize: 0,
    prize: 23770
  },
  {
    winners: 1444,
    specialPrize: 0,
    prize: 10760
  },
  {
    winners: 1777,
    specialPrize: 0,
    prize: 7500
  },
  {
    winners: 25727,
    specialPrize: 0,
    prize: 2670
  },
  {
    winners: 37974,
    specialPrize: 0,
    prize: 1750
  },
  {
    winners: 62773,
    specialPrize: 0,
    prize: 1520
  },
  {
    winners: 135108,
    specialPrize: 0,
    prize: 1280
  },
  {
    winners: 546864,
    specialPrize: 0,
    prize: 770
  }
]

export const resultsStoreDateMock = {
  day: 8,
  month: 5,
  year: 2020,
  hour: 21,
  minute: 0
}

export const resultsStoreWinningNumbersMock = {
  numbers: [9, 11, 15, 36, 43],
  euroNumbers: [8, 9]
}

export const resultsStoreMock = {
  results: {
    data: {
      currency: 'EUR',
      last: {
        id: 425,
        date: resultsStoreDateMock,
        drawingDate: '08.05.2020, 21:00',
        winningNumbers: resultsStoreWinningNumbersMock,
        tiers: resultsStoreTiersMock
      },
      next: {
        id: 426,
        date: resultsStoreDateMock,
        drawingDate: '15.05.2020, 21:00'
      }
    },
    isLoading: false,
    hasError: false
  }
} 
