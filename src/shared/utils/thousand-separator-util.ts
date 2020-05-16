const thousandSeparatorUtil = (number: number) => {
  if (typeof number !== 'number') return number

  return parseInt(number.toString()).toLocaleString()
}

export {thousandSeparatorUtil}
