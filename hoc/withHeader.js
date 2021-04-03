import React, { lazy, useCallback, useEffect, useState } from 'react'
import useModal from '../hooks/useModal'
import HomeModal from '../components/base/HomeModal'
import Head from 'next/head'
import Navbar from '../components/base/Navbar'
import Footer from '../components/base/Footer'
import { toggleHomeModal } from '../redux/common/actions'
import { useDispatch, useSelector } from 'react-redux'
import { selectHomeModalSeen } from '../redux/common/selectors'

const withHeader = Page => {
  return ({ footerData, seo, headerList, ...props }) => {

    const { openModal, closeModal, isHomeModalOpen } = useModal()
    
    const dispatch = useDispatch()  
    const activeModalsSeen = useSelector(selectHomeModalSeen)  

    useEffect(() => {
      if(activeModalsSeen) return
      openModal({type: 'home'})
      dispatch(toggleHomeModal())
    }, [])

    return (
      <div>
        <Head>
          <title>Sostenibility || {seo?.title || 'Home'}</title>
        </Head>
        <Navbar
          boxed
          logourl="./img/logo.svg"
          menuList={headerList}
        />
          <Page {...props} />
          { isHomeModalOpen && <HomeModal onClose={() => closeModal({type: 'home'})} /> }
        <Footer
          boxed
          logourl="./img/logo-white.svg"
          menuList={footerData}
          copyright={`2021 © Copyright - Diventarenergia | P.IVA 04907900262`}
        />
      </div>
    )
  }
}

export default withHeader