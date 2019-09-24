import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getFoodDetails } from '../actions/foodDetails'

class FoodDetails extends React.Component {
  componentDidMount () {
    const id = Number(this.props.match.params.id)
    this.props.getFoodDetails(id)
  }

  render () {
    const { name, category, carbonOutput, waterUsage } = this.props.foodDetails
    return (
      <div>
        <h2>Food Details</h2>
        <p data-test='name'>{name}</p>
        <p data-test='category'>{category}</p>
        <p data-test='carbon'>{carbonOutput}</p>
        <p data-test='water'>{waterUsage}</p>
        <Link to={`/edit/${this.props.foodDetails.id}`}><li>{name}</li></Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    foodDetails: state.foodDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFoodDetails: id => dispatch(getFoodDetails(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetails)
