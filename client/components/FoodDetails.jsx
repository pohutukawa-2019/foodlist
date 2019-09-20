import React from 'react'
import { getFoodDetails } from '../actions'
import { connect } from 'http2'

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

// const details = {
//   name: 'Turkey',
//   category: 'meat',
//   carbon_output: 403,
//   water_usage: 52
// }

// export default function FoodDetails (props) {
//   const foodDetails = props.foodDetails || details

//   const classes = 'food-details '

//   return (
//     <div className={classes}>
//       <h2>Details</h2>
//       <p data-test="name">{foodDetails.name}</p>
//       <p data-test="category">{foodDetails.category}</p>
//       <p data-test="carbon">{foodDetails.carbon_output}</p>
//       <p data-test="water">{foodDetails.water_usage}</p>
//     </div>
//   )
// }

export default connect(
  mapStateToProps, mapDispatchToProps
)(FoodDetails)
