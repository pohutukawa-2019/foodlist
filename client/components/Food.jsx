import React from 'react'
import { Link } from 'react-router-dom'
import FoodLabel from './FoodLabel'

export default function Food ({ food }) {
  const { id, name } = food
  return (
    <div>
      <li><Link to={`/details/${id}`}>{name}</Link></li>
      <FoodLabel food={food}/>
    </div>
  )
}
