git addimport React from 'react'
import { connect } from 'react-redux'

import { getFoods } from '../actions/foods'
import Food from './Food'

class FoodList extends React.Component {
  componentDidMount () {
    this.props.getFood()
  }

  render () {
    const { foods, pending, error } = this.props

    if (pending) {
      return <div>LOADING...</div>
    }

    return (
      <>
        {error && <div>{error}</div>}
        <ul>
          {foods.map(food =>
            <Food key={`:)${food.id}`} id={food.id} food={food} />)}
        </ul>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    foods: state.foods,
    pending: state.pending,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFood: () => dispatch(getFoods())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList)
