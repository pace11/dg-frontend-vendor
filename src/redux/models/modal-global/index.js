import { action, thunk } from 'easy-peasy'

const ModalGlobal = {
  initialState: {
    accept_order: false,
    reject_order: false,
    status_order: false,
  },
  fetchAction: action((state, payload) => {
    const { name, show } = payload
    if (name === 'status_order')
      state.initialState.status_order = show
    else if (name === 'accept_order')
      state.initialState.accept_order = show
    else state.initialState.reject_order = show
  }),

  setModalGlobal: thunk(async (actions, payload) => {
    actions.fetchAction(payload)
  }),
}

export default ModalGlobal
