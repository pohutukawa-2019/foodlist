import React from 'react'

export default function Food ({ food: { name } }) {
  return (
    <li>{name}</li>
  )
}
