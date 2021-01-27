import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import UseGlobalState from './store/useGlobalState'
import Context from './store/context'
import './i18next'
import * as serviceWorker from './serviceWorker'

const store = UseGlobalState
ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={store}>
      <Suspense fallback={<div></div>}>
        <App />
      </Suspense>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
