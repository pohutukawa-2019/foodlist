import React from 'react'

const details = {
  name: 'Turkey',
  category: 'meat',
  carbon_output: 403,
  water_usage: 52
}

export default function FoodDetails (props) {
  const foodDetails = props.foodDetails || details

  const classes = 'food-details '

  return (
    <div className={classes}>
      <h2>Details</h2>
      <p data-test="name">{foodDetails.name}</p>
      <p data-test="category">{foodDetails.category}</p>
      <p data-test="carbon">{foodDetails.carbon_output}</p>
      <p data-test="water">{foodDetails.water_usage}</p>
    </div>
  )
}
