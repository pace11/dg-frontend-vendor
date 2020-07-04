import { action, thunk } from 'easy-peasy'

const DataTypeShipping = {
  initialState: {
    data: [],
  },

  fetchAction: action((state, payload) => {
    const { value } = payload
    let check = state.initialState.data.includes(value)
    let newArr = state.initialState.data
    if (check) {
      state.initialState.data = newArr.filter((item) => item !== value)
    } else {
      state.initialState.data.push(value)
    }
  }),

  setDataTypeShipping: thunk(async (actions, payload) => {
    actions.fetchAction(payload)
  }),
}

export default DataTypeShipping
