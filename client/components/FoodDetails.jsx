import React from 'react'
import { getFoodDetails } from '../actions'
import { connect } from 'http2'
import { link } from 'fs'
import { Link } from 'react-router-dom'
class FoodDetails extends React.Component {
  componentDidMount () {
    const id = this.props.food.id || this.props.match.params.id
    this.props.dispatch(getFoodDetails(id))
  }

  render () {
    return (
      <div>
        <h2>Food Details</h2>
        <p>{this.props.foodDetails.name}</p>
        <p>{this.props.foodDetails.category}</p>
        <p>{this.props.foodDetails.carbon_output}</p>
        <p>{this.props.foodDetails.water_usage}</p>
        <Link to={`/edit/${this.props.foodDetails.id}`}><li>{name}</li></Link>
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
    getFoodDetails: () => dispatch()
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(FoodDetails)
