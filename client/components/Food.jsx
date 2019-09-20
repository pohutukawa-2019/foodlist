import React from 'react'
import { Link } from 'react-router-dom'
import Label from './Label'

export default function Food ({ food }) {
  return (
    <div>
      <Link to={`/details/${food.id}`}><li>{food.name}</li></Link>
      <Label food={food}/>
    </div>
  )
}
