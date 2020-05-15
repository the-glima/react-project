const currencyUtil = (number: number, symbol = '€') => {
  if (typeof number !== 'number') return number

  const validNumber = typeof number === 'number' ? number.toString() : number

  const decimalNumber =
    validNumber.length > 2
      ? Number(validNumber.slice(0, validNumber.length - 2) + '.' + validNumber.slice(-2))
      : Number(validNumber)

  const formattedNumber = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(decimalNumber)

  let result: any = formattedNumber.split('')
  result.pop()

  return `${symbol} ${result.join('').trim()}`
}

export {currencyUtil}
