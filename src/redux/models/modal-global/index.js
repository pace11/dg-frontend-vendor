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
  },
  fetchAction: action((state, payload) => {
    const { name, show } = payload
    if (name === 'status_order')
      state.initialState.status_order = show
    else if (name === 'accept_order')
      state.initialState.accept_order = show
    else if (name === 'empty_stock')
      state.initialState.empty_stock = show
    else if (name === 'close_store')
      state.initialState.close_store = show
    else if (name === 'shipping_problem')
      state.initialState.shipping_problem = show
    else if (name === 'buyer_request')
      state.initialState.buyer_request = show
    else if (name === 'other') state.initialState.other = show
    else if (name === 'change_shipping')
      state.initialState.change_shipping = show
    else if (name === 'canceled_order')
      state.initialState.canceled_order = show
    else state.initialState.reject_order = show
  }),

  setModalGlobal: thunk(async (actions, payload) => {
    actions.fetchAction(payload)
  }),
}

export default ModalGlobal
