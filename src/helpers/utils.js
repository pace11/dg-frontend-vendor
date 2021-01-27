import { useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'

/**
 *
 * @param {Number} params
 * @param {String} prefix
 * function to change format value price
 */
const currency = (params, prefix) => {
  let string = params.toString(),
    rest = string.length % 3,
    value = string.substr(0, rest),
    thousands = string.substr(rest).match(/\d{3}/g),
    separator = ''

  if (thousands) {
    separator = rest ? '.' : ''
    value += separator + thousands.join('.')
  }
  return `${prefix} ${value}`
}

/**
 *
 * function to get value in query param
 */
const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

/**
 * @param {Array} arr
 * @param {String, Number} val
 * function to get remove array by value
 */
const removeArray = (arr, val) => {
  let newArr = arr.filter((item) => item !== val)
  return newArr
}

/**
 * function to check user after login
 */
const isLoggedIn = Cookies.get('dlg_vendor_token') ? true : false

export default {
  currency: currency,
  useQuery: useQuery,
  removeArray: removeArray,
  isLoggedIn: isLoggedIn,
}
