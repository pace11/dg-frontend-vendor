import { action, thunk } from 'easy-peasy'

const ModalGlobal = {
  initialState: {
    accept_order: false,
    reject_order: false,
    status_order: false,
    empty_stock: false,
    close_store: false,
    shipping_problem: false,
    buyer_request: false,
    other: false,
    change_shipping: false,
    canceled_order: false,
    set_shipping: false,
    location_free_shipping: false,
  },

  fetchAction: action((state, payload) => {
    const { name, show } = payload
    state.initialState[name] = show
  }),

  setModalGlobal: thunk(async (actions, payload) => {
    actions.fetchAction(payload)
  }),
}

export default ModalGlobal
