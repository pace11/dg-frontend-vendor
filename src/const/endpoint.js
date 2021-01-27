import Api from './api'

const APP_MODE = 'staging', // staging, production
  API_ENV = 'mock', // mock, staging, production
  API_HOMEPAGE =
    APP_MODE === 'staging' && API_ENV === 'mock'
      ? Api.API_URL_MOCK_HOMEPAGE
      : process.env.REACT_APP_API_URL_HOMEPAGE

export default {
  API_HOMEPAGE,
}
