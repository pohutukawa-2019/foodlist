import React from 'react'
import Label from './Label'
import { Link } from 'react-router-dom'

export default function Food ({ food }) {
  return (
    <div>
      <Link to={`/details/${food.id}`}><li>{food.name}</li></Link>
      <Label food={food}/>
    </div>
  )
}
