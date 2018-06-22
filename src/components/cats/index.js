import React from 'react'

export default props => (
  <div>
    <h1>{props.currentCat.name}</h1>

    <img src={props.currentCat.img} width="50%" height="50%" />

    <p>{props.currentCat.description}</p>

    <img src={[adoptedCats]} />

    <button onClick={() => props.onCat()}>Random Cat</button>

    <button onClick={() => props.onCatAdopt()}>Adopt</button>

  </div>
)

