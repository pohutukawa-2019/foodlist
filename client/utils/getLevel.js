import waterLevels from './waterLevels.json'
import carbonLevels from './carbonLevels.json'

export function getWaterLevel (waterUsage) {
  switch (true) {
    case waterUsage > 5000:
      return waterLevels.Extreme
    case waterUsage > 2000:
      return waterLevels.High
    case waterUsage > 500:
      return waterLevels.Medium
    default:
      return waterLevels.Low
  }
}

export function getCarbonLevel (carbonOutput) {
  switch (true) {
    case carbonOutput > 10:
      return carbonLevels.Extreme
    case carbonOutput > 5:
      return carbonLevels.High
    case carbonOutput > 1:
      return carbonLevels.Medium
    default:
      return carbonLevels.Low
  }
}
