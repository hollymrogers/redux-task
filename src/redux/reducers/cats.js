import _ from 'lodash'

const initialState = {
  cats: [
    { name: 'Marley', description: 'Ocicat', img: 'https://www.pets4homes.co.uk/images/breeds/116/large/91e94b7e726f19ff3973de575ec1520c.jpg' },
    { name: 'Link', description: 'Persian', img: 'https://www.pets4homes.co.uk/images/breeds/21/large/afdfbc9836d8ee81f3a929e7eb9c6e28.jpg' },
    { name: 'Honey', description: 'British Shorthair', img: 'https://www.pets4homes.co.uk/images/breeds/33/large/0f910a324140829ed23a1e5feed16200.jpg' },
    { name: 'Graham', description: 'Ragdoll', img: 'https://www.pets4homes.co.uk/images/breeds/28/large/28b9defa5a9609f4d99b38e1c67424f3.jpg' },
  ],
  cat: { name: 'Marley', description: 'Ocicat', img: 'https://www.pets4homes.co.uk/images/breeds/116/large/91e94b7e726f19ff3973de575ec1520c.jpg' },
}

export default function todos(state = initialState, action) {
  const randomCat = () => {
    return state.cats[_.random(0, state.cats.length - 1)]
  }

  switch (action.type) {
    case 'todos/RANDOM_CAT':
      return { ...state, cat: randomCat() }
    default:
      return state
  }
}
