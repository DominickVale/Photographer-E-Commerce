export const parseDate = (date) => {
  const regEx = /(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)/mg
  date = regEx.exec(date)
  return `${date[3]}/${date[2]}/${date[1]}`
}