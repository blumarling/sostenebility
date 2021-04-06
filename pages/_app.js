import React, {useEffect} from 'react'
import Head from 'next/head'
import {ThemeProvider, createGlobalStyle} from 'styled-components'
import { Normalize } from 'styled-normalize'
import { useStore } from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import dynamic from 'next/dynamic'

import {wrapper} from '../redux/configStore'
import theme from '../theme'
import GlobalStyle from '../globalStyle'

import '../tailwind.output.css'

import "nprogress/nprogress.css";

const TopProgressBar = dynamic(
  () => {
    return import("../components/atoms/ProgressBar");
  },
  { ssr: false },
);

const MyApp = ({ Component, pageProps }) => {
  const store = useStore();

  return (
    <>
      <TopProgressBar />
      
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
