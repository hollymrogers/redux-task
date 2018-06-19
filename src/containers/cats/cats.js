import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onRandomCat } from 'redux/actions/cats'

import RandomCat from 'components/cats/cat'

class RandomCatContainer extends Component {
  render() {
    return <RandomCat onRandomCat={() => this.props.dispatch(onRandomCat())} currentCat={this.props.cat} />
  }
}

export default connect(state => state.cats)(RandomCatContainer)
