import React from 'react'

export default function FoodDetails (props) {
  const { isVisible, hideDetails } = props
  const classes = 'food-details ' + (isVisible ? 'visible' : 'hidden')
  const foodDetails = {
    name: 'Turkey',
    category: 'meat',
    carbon_output: 403,
    water_usage: 52
  }

  return (
    <div className={classes}>
      <h2>Details</h2>
      <p>{foodDetails.name}</p>
      <p>{foodDetails.category}</p>
      <p>{foodDetails.carbon_output}</p>
      <p>{foodDetails.water_usage}</p>
      <a href="#" onClick={hideDetails}>Close</a>
    </div>
  )
}
