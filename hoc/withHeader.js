import React, { lazy, useCallback, useEffect, useState } from 'react'
import useModal from '../hooks/useModal'
import HomeModal from '../components/base/HomeModal'
import Head from 'next/head'
import Navbar from '../components/base/Navbar'
import Footer from '../components/base/Footer'
import { toggleHomeModal } from '../redux/common/actions'
import { useDispatch, useSelector } from 'react-redux'
import { selectHomeModalSeen } from '../redux/common/selectors'

const withHeader =  Page => {
  return ({ footerData, seo, headerList, ...props }) => {

    const { openModal, closeModal, isHomeModalOpen } = useModal()
    
    useEffect(() => {
      const activeModalsSeen = localStorage.getItem('m_seen') 
      window.onbeforeunload = () => localStorage.removeItem('m_seen');
      if(activeModalsSeen) return
      openModal({type: 'home'})
      localStorage.setItem('m_seen', true)
    }, [])

    return (
      <div>
        <Head>
          <title>Sostenibility - {seo?.title}</title>
          <link href={seo.canonical} rel="canonical" />
          {seo?.description && <meta name="description" content={seo.description} />}
          {
            seo.og_title
              ? <meta name="og:title" property="og:title" content={seo.og_title}/>
              : <meta name="og:title" property="og:title" content={seo.title}/>
          }
          {
            seo?.og_image && <meta name="og:image" property="og:image" content={seo.og_image} />
          }
          {
            process.env.NEXT_PUBLIC_IS_DEV === 'true'
              ? <meta name="robots" content="noindex, nofollow" />
              : <meta name="robots" content="index, follow" />
          }
        </Head>
        <Navbar
          boxed
          logourl="/img/logo-sostenibility-color.svg"
          menuList={headerList}
        />
          <Page {...props} />
          { isHomeModalOpen && <HomeModal onClose={() => closeModal({type: 'home'})} /> }
        <Footer
          boxed
          logourl="/img/logo-sostenibility-white.svg"
          menuList={footerData}
          copyright={`2021 © Copyright - Sostenibility | P.IVA 04907900262`}
        />
      </div>
    )
  }
}

export default withHeader