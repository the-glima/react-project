const ordinalizeUtil = (number: number) => {
  if (typeof number !== 'number') return number

  const ordinalRules = new Intl.PluralRules('en', {type: 'ordinal'})

  const suffixes = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    other: 'th'
  }

  const suffix = (suffixes as any)[ordinalRules.select(number)]

  return `${number + suffix}`
}

export {ordinalizeUtil}
