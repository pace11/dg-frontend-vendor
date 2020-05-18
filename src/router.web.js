import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'

export default function RouterWeb() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
    </BrowserRouter>
  )
}
