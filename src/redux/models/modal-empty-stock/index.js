import { action, thunk } from 'easy-peasy'

const ModalEmptyStock = {
  initialState: {
    show: false,
  },

  fetchAction: action((state, payload) => {
    state.initialState.show = payload
  }),

  setModalEmptyStock: thunk(async (actions, payload) => {
    const { show } = payload
    actions.fetchAction(show)
  }),
}

export default ModalEmptyStock
