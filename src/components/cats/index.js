import React from 'react'

export default props => (
  <div>
    <h1>{props.currentCat.name}</h1>

    <img src={props.currentCat.img} width="50%" height="50%" />

    <p>{props.currentCat.description}</p>

    <button onClick={() => props.onCat()}>Random Cat</button>
  </div>
)
