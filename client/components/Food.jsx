import React from 'react'
import { Link } from 'react-router-dom'
import LabelComponent from './LabelComponent'

export default function Food ({ food }) {
  return (
    <div>
      <Link to={`/details/${food.id}`}><li>{food.name}</li></Link>
      <LabelComponent food={food}/>
    </div>
  )
}
