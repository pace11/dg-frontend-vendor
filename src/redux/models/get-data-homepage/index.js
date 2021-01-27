import { action, thunk } from 'easy-peasy'
import Endpoint from '../../../const/endpoint'
import Axios from 'axios'

const HomePage = {
  initialState: {
    loading: true,
    error: false,
    errorMessage: null,
    items: null,
  },

  fetchAction: action((state, payload) => {
    state.initialState.items = payload
    state.initialState.loading = false
  }),

  error: action((state, payload) => {
    state.initialState.loading = true
    state.initialState.error = true
    state.initialState.errorMessage = payload
  }),

  getHomePage: thunk(async (actions, payload) => {
    try {
      const config = {
        method: 'get',
        url: `${Endpoint.API_HOMEPAGE}`,
        headers: {
          accept: 'application/json',
          'X-version': '1',
          'X-device': 'sd',
          Authorization: 'Bearer : asd',
        },
      }
      let response = await Axios(config)
      actions.fetchAction(response.data)
    } catch (error) {
      actions.error(error || error.errorMessage)
    }
  }),
}

export default HomePage
