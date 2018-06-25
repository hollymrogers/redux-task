import React from 'react'

export default props => (
  <div>
    <h1>{props.currentCat.name}</h1>

    <img src={props.currentCat.img} width="50%" height="50%" />

    <p>{props.currentCat.description}</p>

    <img src={[props.adoptedCats]} src2={[props.adoptedCats]} src3={[props.adoptedCats]} src4={[props.adoptedCats]} />

    <button onClick={() => props.onCat()}>Random Cat</button>

    <button onClick={() => props.onAdoptedCats()}>Adopt</button>

  </div>
)
