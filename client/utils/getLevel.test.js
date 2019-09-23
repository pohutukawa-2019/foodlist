import {
  getWaterLevel,
  getCarbonLevel
} from './getLevel'

describe('Client utilities', () => {
  it('getWaterLevel returns waterLevels', () => {
    const foodDetails = {
      name: 'Turkey',
      category: 'meat',
      carbon_output: 403,
      water_usage: 52
    }
    const level = getWaterLevel(foodDetails.water_usage)
    expect(level.name).toBe('Low')
  })

  it('getCarbonLevel returns carbon output levels', () => {
    const foodDetails = {
      name: 'Turkey',
      category: 'meat',
      carbon_output: 403,
      water_usage: 52
    }
    const level = getCarbonLevel(foodDetails.carbon_output)
    expect(level.name).toBe('Extreme')
  })
})
