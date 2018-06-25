import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onCat, onAdoptedCats } from 'redux/actions/cats'

import Cat from 'components/cats'

class CatContainer extends Component {
  render() {
    return <Cat onCat={() => this.props.dispatch(onCat())} 
    currentCat={this.props.cat} 
    onAdoptedCats={() => this.props.dispatch(onAdoptedCats())} adoptedCats={this.props.adopt} />
  }
}

export default connect(state => state.cats)(CatContainer)
