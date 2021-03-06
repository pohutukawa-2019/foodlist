import React from 'react'
import { connect } from 'react-redux'

import { getFoods } from '../actions/foods'
import { getCategories } from '../actions/categories'
import Food from './Food'
import SortListDropdown from './SortListDropdown'
import CategoriesListDropdown from './CategoriesListDropdown'

class FoodList extends React.Component {
  componentDidMount () {
    this.props.getCategories()
    const { category } = this.props.match.params
    if (category) {
      this.props.getCategory(category)
    } else {
      this.props.getFoods()
    }
  }

  render () {
    const { foods, pending, error } = this.props

    if (pending) {
      return <div>LOADING...</div>
    }

    return (
      <>
        {error && <div>{error}</div>}
        <CategoriesListDropdown />
        <br />
        <SortListDropdown />
        <ul>
          {foods.map(food =>
            <Food key={`${food.id}`} id={food.id} food={food} />)}
        </ul>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    foods: state.foods,
    pending: state.pending,
    error: state.error,
    categories: state.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFoods: () => dispatch(getFoods()),
    getCategory: () => {}, // TODO: dispatch(getCategory()) once action creator exists
    getCategories: () => dispatch(getCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList)
