import React, { lazy, useCallback, useEffect, useState } from 'react'
import useModal from '../hooks/useModal'
import HomeModal from '../components/base/HomeModal'
import Head from 'next/head'
import Navbar from '../components/base/Navbar'
import Footer from '../components/base/Footer'
import { toggleHomeModal } from '../redux/common/actions'
import { useDispatch, useSelector } from 'react-redux'
import { selectHomeModalSeen } from '../redux/common/selectors'

const withHeaderRefetch = (Page, refreshData) => {
  return ({ footerData, seo, headerList, components, slug, lang, ...props }) => {

    const { openModal, closeModal, isHomeModalOpen } = useModal()
    const [footerDataInner, setFooterDataInner] = useState(footerData)
    const [headerListInner, setHeaderListInner] = useState(headerList)
    const [componentsInner, setComponentsInner] = useState(components)
    const [seoInner, setSeoInner] = useState(seo)
    const [isLoading, setIsLoading] = useState(true)

    const dispatch = useDispatch()  
    const activeModalsSeen = useSelector(selectHomeModalSeen)  

    useEffect(() => {
      setFooterDataInner(footerData)
      setHeaderListInner(headerList)
      setComponentsInner(components)
      rehydratateAllData()
    }, [footerData, headerList, components])

    const rehydratateAllData = async () => {
      setIsLoading(true)
      const {
        page,
        headerList,
        footerData
      } = await refreshData({slug, lang})
      setFooterDataInner(footerData)
      setHeaderListInner(headerList)
      setComponentsInner(page.components)
      setSeoInner(page.seo)
      setIsLoading(false)
    }

    useEffect(() => {
      if(activeModalsSeen) return
      openModal({type: 'home'})
      dispatch(toggleHomeModal())
    }, [])

    return (
      <div>
        <Head>
          <title>Sostenibility || {seoInner?.title || 'Home'}</title>
          <link href={seoInner.canonical} rel="canonical" />
          {seoInner?.description && <meta name="description" content={seoInner.description} />}
          {
            seoInner.og_title
              ? <meta name="og:title" property="og:title" content={seoInner.og_title}/>
              : <meta name="og:title" property="og:title" content={seoInner.title}/>
          }
          {
            seoInner?.og_image && <meta name="og:image" property="og:image" content={seoInner.og_image} />
          }
          {
            process.env.NEXT_PUBLIC_IS_DEV === 'true'
              ? <meta name="robots" content="noindex, nofollow" />
              : <meta name="robots" content="index, follow" />
          }
        </Head>
        <Navbar
          boxed
          logourl="/img/logo.svg"
          menuList={headerListInner}
        />
          <Page components={componentsInner} {...props} />
          { isHomeModalOpen && <HomeModal onClose={() => closeModal({type: 'home'})} /> }
        <Footer
          boxed
          logourl="/img/logo-sostenibility-bianco.svg"
          menuList={footerDataInner}
          copyright={`2021 © Copyright - Sostenibility | P.IVA 04907900262`}
        />
        {isLoading && <div className="fixed w-full h-full bg-white top-0 left-0 z-20">

        </div>}
      </div>
    )
  }
}

export default withHeaderRefetch