import React from 'react'
import { Link } from 'react-router-dom'
import FoodLabel from './FoodLabel'

export default function Food ({ food }) {
  const { id, name } = food
  return (
    <li>
      <Link to={`/details/${id}`}>{name}</Link>
      <FoodLabel food={food}/>
    </li>
  )
}
