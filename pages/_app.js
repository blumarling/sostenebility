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
import { AnimateSharedLayout, motion } from "framer-motion"

import "nprogress/nprogress.css";

const TopProgressBar = dynamic(
  () => {
    return import("../components/atoms/ProgressBar");
  },
  { ssr: false },
);

const MyApp = ({ Component, pageProps, router }) => {
  const store = useStore();
  console.log(process.env)
  return (
    <>
      <TopProgressBar />
      
      <Normalize />
      <GlobalStyle />
      <Head/>

      <ThemeProvider theme={theme}>
        <PersistGate
          persistor={store.__persistor}
          loading={<div></div>}
        >
          <AnimateSharedLayout>
            <motion.div
              key={router.asPath}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimateSharedLayout>
        </PersistGate>
      </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(MyApp)
