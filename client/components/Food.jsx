import React from 'react'
import { Link } from 'react-router-dom'
import FoodLabel from './FoodLabel'

export default function Food ({ food }) {
  return (
    <div>
      <Link to={`/details/${food.id}`}><li>{food.name}</li></Link>
      <FoodLabel food={food}/>
    </div>
  )
}
