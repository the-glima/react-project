const literalDateUtil = (date: string, literal = true) => {
  if (typeof date !== 'string') return date

  const convertedDate = new Date(date)
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}

  return new Intl.DateTimeFormat('en-GB', literal ? options : {}).format(convertedDate)
}

export {literalDateUtil}
