import React, { lazy, useCallback, useEffect, useState } from 'react'

import Head from 'next/head'
import Navbar from '../components/base/Navbar'
import Footer from '../components/base/Footer'
import useModal from '../hooks/useModal'
import SimpleModal from '../components/base/SimpleModal'
import Banner from '../components/base/Banner'
import GridBoxTeam from '../components/base/GridBoxTeam'
import useDynamicCompo from '../hooks/useDynamicCompo'
import TitleLogo from '../components/base/TitleLogo'



const Azienda = ({ components, footerData, seo, headerList }) => {
  
  const { openModal, closeModal,
    activeModals, isAlertModalOpened } = useModal()

  const { views } = useDynamicCompo({components})
 
  return (
    <div>
      <Head>
        <title>Sostenibility || {seo?.title}</title>
      </Head>
      <Navbar
        boxed
        logourl="./img/logo.svg"
        menuList={headerList}
      />
      { views }

      <GridBoxTeam
        boxed
      />
      <Footer
        boxed
        logourl="./img/logo-white.svg"
        menuList={footerData}
        copyright={`2021 © Copyright - Diventarenergia | P.IVA 04907900262`}
      />
      {isAlertModalOpened && <SimpleModal />}
    </div>
  )
}

export async function getStaticProps(context) {

  const page01 = require('../static_data/azienda').default
  const footerData = require('../static_data/footer').default
  const headerList = require('../static_data/header').default

  return {
    props: {
      ...page01,
      footerData,
      headerList
    }
  }
}

export default Azienda