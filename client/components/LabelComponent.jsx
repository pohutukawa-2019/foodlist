import React from 'react'
import { Label } from 'semantic-ui-react'

import {
  getWaterLevel,
  getCarbonLevel
} from '../utils/getlevels'

export default function LabelComponent (props) {
  const getLevels = () => {
    
  }
  return (
    <div>
      {}
      <Label color={color} key={color}>
        {_.capitalize(color)}
      </Label>
    </div>

  )
}
