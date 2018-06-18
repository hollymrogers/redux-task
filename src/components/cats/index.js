import React from 'react'
import Cat from './cat'

export default props => (
  <div>
    <Cat onRandomCat={props.onRandomCat} currentCat={props.currentCat} />
  </div>
)
