import { action, thunk } from 'easy-peasy'

const LocationFreeShipping = {
  initialState: {
    data: [],
  },

  fetchAction: action((state, payload) => {
    const { value } = payload
    let check = state.initialState.data.includes(value)
    let newArr = state.initialState.data
    if (check) {
      state.initialState.data = newArr.filter(
        (item) => item !== value,
      )
    } else {
      value === 'T'
        ? (state.initialState.data = [])
        : state.initialState.data.push(value)
    }
  }),

  setLocationFreeShipping: thunk(async (actions, payload) => {
    actions.fetchAction(payload)
  }),
}

export default LocationFreeShipping
