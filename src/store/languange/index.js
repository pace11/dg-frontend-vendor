import { useState } from 'react'

const Languange = () => {
  const [state, setState] = useState('')

  const actions = (action) => {
    const { type, payload } = action
    switch (type) {
      case 'setState':
        return setState(payload)
      default:
        return state
    }
  }
  return { state, actions }
}

export default Languange
