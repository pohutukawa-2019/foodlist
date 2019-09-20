import React from 'react'
import { Link } from 'react-router-dom'

export default function Food ({ food: { name }, id }) {
  return (
    <Link to={`/details/${id}`}><li>{name}</li></Link>
  )
}
