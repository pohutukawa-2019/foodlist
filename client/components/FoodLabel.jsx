import React from 'react'
import { Label, Icon } from 'semantic-ui-react'

import {
  getWaterLevel,
  getCarbonLevel
} from '../utils/getLevel'

const FoodLabel = ({ food: { carbonOutput, waterUsage } }) => {
  const carbonLabel = getCarbonLevel(carbonOutput)
  const waterLabel = getWaterLevel(waterUsage)

  return (
    <>
      <Label data-test='carbonLabel' className={carbonLabel.color}>
        <Icon name='cloud' />{carbonLabel.name}
      </Label>
      <Label data-test='waterLabel' className={waterLabel.color}>
        <Icon name='tint' />{waterLabel.name}
      </Label>
    </>
  )
}

export default FoodLabel
