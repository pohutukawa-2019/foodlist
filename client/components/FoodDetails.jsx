import React from 'react'
import { connect } from 'react-redux'

import { getFoodDetails } from '../actions/foodDetails'

class FoodDetails extends React.Component {
  componentDidMount () {
    const id = Number(this.props.match.params.id)
    this.props.getFoodDetails(id)
  }

  render () {
    return (
      <div>
        <h2>Food Details</h2>
        <p>{this.props.foodDetails.name}</p>
        <p>{this.props.foodDetails.category}</p>
        <p>{this.props.foodDetails.carbon_output}</p>
        <p>{this.props.foodDetails.water_usage}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    foodDetails: state.foodDetails.foodDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFoodDetails: (id) => dispatch(getFoodDetails(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetails)
