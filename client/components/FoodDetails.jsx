import React from 'react'
import { getFoodDetails } from '../actions'
import { connect } from 'http2'

class FoodDetails extends React.Component {
  state = {
    name: '',
    category: '',
    carbon_output: '',
    water_usage: ''
  }

  componentDidMount () {
    const id = this.props.post.id || this.props.match.params.id
    this.props.dispatch(getFoodDetails(id))
  }

  render () {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    category: state.category,
    carbon_output: state.carbon_output,
    water_usage: state.water_usage
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
