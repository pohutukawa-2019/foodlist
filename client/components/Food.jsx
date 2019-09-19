import React from 'react'
import Label from './Label'

export default function Food ({ food }) {
  return (
    <div>
      <li>{food.name}</li>
      <Label food={food}/>
    </div>
  )
}
