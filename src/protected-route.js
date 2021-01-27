import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Utils from './helpers/utils'

/**
 *
 * @param {String, <any>} props.component
 */
export default function ProtectedRoute({ path, exact, component }) {
  const isLoggedIn = Utils.isLoggedIn

  if (isLoggedIn)
    return (
      <Route path={`${path}`} exact={exact} component={component} />
    )
  return <Redirect to={{ pathname: '/login' }} />
}
