import React, { Component } from 'react'
import { connect } from 'react-redux'
<<<<<<< HEAD
import RandomCat from 'components/cats/cat'

class RandomCatContainer extends Component {
  render() {
    return <RandomCat onRandomCat={() => this.props.dispatch(onRandomCat())} currentCat={this.props.cats} />
=======
import RandomCat from 'components/cats'

class RandomCatContainer extends Component {
  render() {
    return <RandomCat onRandomCat={() => this.props.dispatch(onRandomCat())} currentCat={this.props.cat} />
>>>>>>> 0aa5dc35c1453463dd4cd27bb5bd50f6e40d3414
  }
}

export default connect(state => state.cats)(RandomCatContainer)
