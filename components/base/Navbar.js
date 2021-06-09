import classNames from 'classnames'
import React, {useEffect, useState} from 'react'
import styled, {css} from "styled-components"
import Hamburger from '../atoms/Hamburger'
import LogoHeader from "../atoms/LogoHeader"
import CaretDown from '../svg/CaretDown'
import Link from 'next/link'
import CloseIcon from '../svg/CloseIcon'

const Navbar = ({menuList = [], logourl = '', boxed}) => {

  const [closeAllSubMenu, setCloseAllSubMenu] = useState(0)
  const [currentActive, setCurrentActive] = useState(null)
  const [menuMobileOpen, setMenuMobileOpen] = useState(false)

  const boxClasses = classNames(
    `flex items-center justify-between w-full navbaritem`,
    {
      'max-w-screen-lg': !!boxed
    }
  )
  const openMobileMenu = () => {
    document.querySelector('html').style.overflowY = 'hidden'
    setMenuMobileOpen(true)
  }
  const closeMobileMenu = () => {
    document.querySelector('html').style.overflowY = 'auto'
    setMenuMobileOpen(false)
  }

  return (
    <>
      <div className="w-full py-4 px-10 flex justify-center items-center bg-primary-900">
        <img src="./img/phone-call.svg" className="h-4 mr-2" alt="navbar"/>
        <a href="tel:+39043873485" className="text-white underline">
          Hai un'urgenza? Chiama subito
        </a>
      </div>
      <NavbarContainer ariaLabel="Global">
        <div className={boxClasses}>
          <LogoHeader src={logourl} href="/" />
          <div className="hidden md:flex md:ml-10 md:pr-4 md:space-x-8">
            {
              menuList?.map(item => <SingleItem {...item}
                key={item.id}
                setCurrentActive={setCurrentActive}
                currentActive={currentActive}
                closeAllSubMenu={() => {
                  // closeAllSubMenu()
                }}
                closeOthers={() => {
                  // setCloseAllSubMenu(prev => prev + 1)
                }}
              />)
            }
          </div>
          <Hamburger onClick={openMobileMenu} />
        </div>

        {/* menu mobile */}
        <div
          className={classNames(
            `fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col p-12 pt-24 mobile-menu`,
            {
              'show': menuMobileOpen
            }
          )}
        >
          <div className="absolute right-0 top-0 p-10 z-30" onClick={closeMobileMenu}>
            <CloseIcon size="25" color="#37576b"/>
          </div>
            {
              menuList?.map(item => <SingleItem {...item}
                key={item.id}
                setCurrentActive={setCurrentActive}
                currentActive={currentActive}
                closeAllSubMenu={() => {}}
                closeOthers={() => {
                  setCloseAllSubMenu(prev => prev + 1)
                  closeMobileMenu(false)
                }}
              />)
            }
          </div>
      </NavbarContainer>
    </>
  )

}

// Single Item 
const SingleItem = ({title, url = '', id, children, closeOthers, closeAllSubMenu,
  setCurrentActive, currentActive}) => {

  const [subItemOpen, setSubItemOpen] = useState(false)
  const isMobile = !!process.browser && window?.innerWidth < 768
  const isTouchable = !!process.browser && ((('ontouchstart' in window) ||
  (navigator.maxTouchPoints > 0) ||
  (navigator.msMaxTouchPoints > 0)));
  
  console.log({isMobile, isTouchable})

  const onMouseOver = () => {
    if(isMobile) return
    if(currentActive === title && (isTouchable && !isMobile)) {
      setSubItemOpen(false);
      setCurrentActive(null);
      closeOthers();
      return
    }
    setCurrentActive(title);
    // closeOthers();
    setSubItemOpen(true);
  }

  useEffect(() => {
    if(closeAllSubMenu && currentActive !== title) {
      setSubItemOpen(false)
    }
  },[closeAllSubMenu])

  return (
    <div className="relative single-item">
      {
        children?.length === 0 ?
          <Link
          href={url}
          passHref
          onClick={closeOthers}
        >
          <MenuListEl
            onMouseOver={(isTouchable && !isMobile) ? () => {} : onMouseOver}
            onClick={(isTouchable && !isMobile) ? onMouseOver : () => {
              closeOthers();
              setCurrentActive(null)
            }}
          >
            {title}
            {children?.length > 0 && <CaretDown size={10} />}
          </MenuListEl>
        </Link> :
        <MenuListElDiv
          onMouseOver={(isTouchable && !isMobile) ? () => {} : onMouseOver}
          onClick={(isTouchable && !isMobile) ? onMouseOver : isMobile ? () => {} : () => {
            closeOthers();
            setCurrentActive(null)
          }}
        >
          {title}
          {children?.length > 0 && <CaretDown size={10} />}
        </MenuListElDiv>
      }
      {children?.length > 0 && (subItemOpen || isMobile) && (
        <SecondLevelMenu className="navbaritem">
          { children?.map(subitem => (
            <Link href={subitem.url} passHref key={subitem.id}>
              <MenuListEl
                onClick={() => {
                  closeOthers();
                  setCurrentActive(null)
                }}
              >
                {subitem.title}
              </MenuListEl>
            </Link>
          )) }
        </SecondLevelMenu>
      )}
    </div>
  )
}

const SecondLevelMenu = styled.div`
  display: flex;
  flex-flow: column;
  position: absolute;
  top: 80px;
  border: 1px solid;
  transform: translate(0, 0%);
  z-index: 20;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 20px 0 rgba(18, 34, 43, 0.1);
  border: solid 0.5px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  > a {
    margin-bottom: 2px;
    margin-top: 2px;
    white-space:nowrap;
    color: #37576b;
  }

  @media (max-width: 767px) {
    position: relative;
    top: 0px;
    border: 0px solid;
    box-shadow: 0px 0px 0px 0 rgba(18, 34, 43, 0.1);
    padding-top: 20px;

  }

`
const NavbarContainer = styled.nav.attrs({
  className: 'flex items-center justify-center md:py-5 py-5 px-6'
})`
  border-bottom: 1px solid #f1f1f1;
  z-index: 20;
  .mobile-menu {
    z-index: 900;
    transform: translateX(100%);
    transition: 100ms ease-out;
    &.show {
      transition: 150ms ease-in;
      transform: translateX(0);
    }
    .single-item {
      padding-bottom:25px;
    }
  }
`
const MenuListEl = styled.a.attrs({
  className: 'text-primary-900 font-medium hover:text-gray-900 no-underline text-lg flex flex-row items-center'
})``
const MenuListElDiv = styled.div.attrs({
  className: 'text-primary-900 font-medium hover:text-gray-900 no-underline text-lg flex flex-row items-center'
})``

export default Navbar
