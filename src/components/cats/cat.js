import React from 'react'

export default props => (
  <div>
    <h1>{props.currentCat.name}</h1>

    <img src={props.currentCat.img} width="60%" height="60%" />

    <p>{props.currentCat.description}</p>

    <button onClick={() => props.onRandomCat()}>Random Cat</button>
  </div>
)
