import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StoreProvider } from 'easy-peasy'
import store from './redux/store'
import theme from './uikit/common/theme'
import RouterWeb from './router.web'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <RouterWeb />
      </StoreProvider>
    </ThemeProvider>
  )
}
