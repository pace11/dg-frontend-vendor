import { action, thunk } from 'easy-peasy'

const ModalRejectOrder = {
  initialState: {
    show: false,
  },

  fetchAction: action((state, payload) => {
    state.initialState.show = payload
  }),

  setModalRejectOrder: thunk(async (actions, payload) => {
    const { show } = payload
    actions.fetchAction(show)
  }),
}

export default ModalRejectOrder
