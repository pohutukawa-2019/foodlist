export function getWaterLevel (waterUsage) {
  switch (true) {
    case waterUsage > 5000:
      return 'Extreme'
    case waterUsage > 2000:
      return 'High'
    case waterUsage > 500:
      return 'Medium'
    default:
      return 'Low'
  }
}

export function getCarbonLevel (carbonOutput) {
  switch (true) {
    case carbonOutput > 10:
      return 'Extreme'
    case carbonOutput > 5:
      return 'High'
    case carbonOutput > 1:
      return 'Medium'
    default:
      return 'Low'
  }
}
