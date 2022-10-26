import * as React from 'react'
import NextScript from 'next/script'
import Meta from '../components/meta'
import ColorSwitcher from '../components/color-switcher'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'
import { Analytics } from '@vercel/analytics/react';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Analytics />
      <ColorSwitcher />
      <Component {...pageProps} />
      <NextScript defer data-domain="lioncityhacks.com" src="https://plausible.io/js/plausible.js"></NextScript>
    </ThemeProvider>
  )
}

export default App
