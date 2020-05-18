import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './uikit/common/theme'
import RouterWeb from './router.web'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterWeb />
    </ThemeProvider>
  )
}
