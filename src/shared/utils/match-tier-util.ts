interface MatchTiers {
  tier: number
  info: {
    numbers: string
    euroNumbers: string
  }
}

export const matchTiers: MatchTiers[] = [
  {
    tier: 0,
    info: {
      numbers: `5 Numbers`,
      euroNumbers: `2 Euronumbers`
    }
  },
  {
    tier: 1,
    info: {
      numbers: `5 Numbers`,
      euroNumbers: `1 Euronumbers`
    }
  },
  {
    tier: 2,
    info: {
      numbers: `5 Numbers`,
      euroNumbers: `0 Euronumbers`
    }
  },
  {
    tier: 3,
    info: {
      numbers: `4 Numbers`,
      euroNumbers: `2 Euronumbers`
    }
  },
  {
    tier: 4,
    info: {
      numbers: `4 Numbers`,
      euroNumbers: `1 Euronumbers`
    }
  },
  {
    tier: 5,
    info: {
      numbers: `4 Numbers`,
      euroNumbers: `0 Euronumbers`
    }
  },
  {
    tier: 6,
    info: {
      numbers: `3 Numbers`,
      euroNumbers: `2 Euronumbers`
    }
  },
  {
    tier: 7,
    info: {
      numbers: `2 Numbers`,
      euroNumbers: `2 Euronumbers`
    }
  },
  {
    tier: 8,
    info: {
      numbers: `3 Numbers`,
      euroNumbers: `1 Euronumbers`
    }
  },
  {
    tier: 9,
    info: {
      numbers: `3 Numbers`,
      euroNumbers: `0 Euronumbers`
    }
  },
  {
    tier: 10,
    info: {
      numbers: `1 Numbers`,
      euroNumbers: `2 Euronumbers`
    }
  },
  {
    tier: 11,
    info: {
      numbers: `2 Numbers`,
      euroNumbers: `1 Euronumbers`
    }
  }
]

export const matchTierUtil = (index: number, collection = matchTiers) => {
  if (index > collection.length) return null

  const tier = collection.find((tier: MatchTiers) => tier.tier === index)

  return tier ? tier?.info : null
}
