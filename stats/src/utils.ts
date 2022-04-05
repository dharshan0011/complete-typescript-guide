export const dateStringToDate = (dateString: string): Date => {
  // 28/05/2000
  const dateParts = dateString.split('/').map((value: string): number => {
    return parseInt(value)
  })
  const [day, month, year] = dateParts
  return new Date(year, month - 1, day)
}
