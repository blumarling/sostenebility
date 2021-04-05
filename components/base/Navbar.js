import classNames from 'classnames'
import React, {useEffect, useState} from 'react'
import styled, {css} from "styled-components"
import Hamburger from '../atoms/Hamburger'
import LogoHeader from "../atoms/LogoHeader"
import CaretDown from '../svg/CaretDown'
import Link from 'next/link'

const Navbar = ({menuList = [], logourl, boxed}) => {

  const [closeAllSubMenu, setCloseAllSubMenu] = useState(0)
  const [currentActive, setCurrentActive] = useState(null)

  const boxClasses = classNames(
    `flex items-center justify-between w-full`,
    {
      'max-w-screen-lg': !!boxed
    }
  )

  return (
    <NavbarContainer ariaLabel="Global">
      <div className={boxClasses}>
        <LogoHeader src={logourl} href="/" />
        <div className="hidden md:flex md:ml-10 md:pr-4 md:space-x-8">
          {
            menuList?.map(item => <SingleItem {...item}
              key={item.id}
              setCurrentActive={setCurrentActive}
              currentActive={currentActive}
              closeAllSubMenu={closeAllSubMenu}
              closeOthers={() => setCloseAllSubMenu(prev => prev + 1)}
            />)
          }
        </div>
        <Hamburger />
      </div>
    </NavbarContainer>
  )

}

// Single Item 
const SingleItem = ({title, url = '', id, children, closeOthers, closeAllSubMenu,
  setCurrentActive, currentActive}) => {

  const [subItemOpen, setSubItemOpen] = useState(false)

  const onMouseOver = () => {
    setCurrentActive(title);
    closeOthers();
    setSubItemOpen(true);
  }

  useEffect(() => {
    if(closeAllSubMenu && currentActive !== title) {
      setSubItemOpen(false)
    }
  },[closeAllSubMenu])

  return (
    <div className="relative">
      <Link
        href={children?.length > 0 ? '#' : url}
        passHref
      >
        <MenuListEl
          onMouseOver={onMouseOver}
          onClick={() => {
            closeOthers();
            setCurrentActive(null)
          }}
        >
          {title}
          {children?.length > 0 && <CaretDown size={10} />}
        </MenuListEl>
      </Link>
      {children?.length > 0 && subItemOpen && (
        <SecondLevelMenu>
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
  bottom: 0px;
  border: 1px solid;
  transform: translate(0, 135%);
  z-index: 20;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 20px 0 rgba(18, 34, 43, 0.1);
  border: solid 0.5px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  > a {
    margin-bottom: 2px;
    margin-top: 2px;
    color: #37576b;
  }
`
const NavbarContainer = styled.nav.attrs({
  className: 'flex items-center justify-center md:py-5 py-5 px-6'
})`
  border-bottom: 1px solid #f1f1f1;
  z-index: 20;
`
const MenuListEl = styled.a.attrs({
  className: 'text-primary-900 font-medium hover:text-gray-900 no-underline text-lg flex flex-row items-center'
})``

export default Navbar
