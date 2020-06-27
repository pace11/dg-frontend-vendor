import { action, thunk } from 'easy-peasy'

const ModalAcceptOrder = {
  initialState: {
    show: false,
  },

  fetchAction: action((state, payload) => {
    state.initialState.show = payload
  }),

  setModalAcceptOrder: thunk(async (actions, payload) => {
    const { show } = payload
    actions.fetchAction(show)
  }),
}

export default ModalAcceptOrder
