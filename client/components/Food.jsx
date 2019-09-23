import React from 'react'
import { Link } from 'react-router-dom'

export default function Food ({ food: { name }, id }) {
  return (
    <li><Link to={`/details/${id}`}>{name}</Link></li>
  )
}
