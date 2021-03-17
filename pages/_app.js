import React, {useEffect} from 'react'
import Head from 'next/head'
import {ThemeProvider, createGlobalStyle} from 'styled-components'
import { Normalize } from 'styled-normalize'
import { useStore } from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

import {wrapper} from '../redux/configStore'
import theme from '../theme'
import GlobalStyle from '../globalStyle'

import '../tailwind.output.css'


const MyApp = ({ Component, pageProps }) => {
  const store = useStore();

  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Head/>

      <ThemeProvider theme={theme}>
        <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
          <Component {...pageProps} />
        </PersistGate>
      </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(MyApp)
