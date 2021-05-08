import classNames from 'classnames'
import React from 'react'
import styled, {css} from "styled-components"
import Button from "../atoms/Button"
import Hamburger from '../atoms/Hamburger'
import LogoFooter from "../atoms/LogoFooter"

const Footer = ({menuList = [], logourl, boxed, copyright}) => {

  const boxClasses = classNames(
    `flex items-end justify-between w-full md:flex-row flex-col`,
    {
      'max-w-screen-lg': !!boxed
    }
  )

  return (
    <FooterContainer ariaLabel="Global">
      <div className={boxClasses}>
        <div className="flex w-full md:w-1/3 flex-col">
          <LogoFooter src={logourl} />
          <p className="text-white mt-5 text-sm leading-6">
            +39 0438 73485<br/>
            info@diventarenergia.it<br/>
            Via Eugenio Montale 21,<br/>
            Ponte della Priula (TV)
          </p>
        </div>
        <div className="flex w-full md:w-auto md:flex-1 justify-between md:space-x-5 md:flex-row flex-col">
          {
            menuList?.map(({title, children, id}) => (
              <div className="flex flex-1 md:px-4 flex-col mt-5 md:mt-0" key={id}>
                <MenuLabel>{title}</MenuLabel>
                {children?.map(({title, url, id}) => <MenuListEl key={id} href={url}>{title}</MenuListEl>)}
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex justify-center pt-20">
        <span className="text-white text-sm">{copyright}</span>
      </div>
    </FooterContainer>
  )

}

const FooterContainer = styled.nav.attrs({
  className: 'flex justify-center items-center md:py-20 md:pb-8 py-5 px-6 bg-primary-900 flex-col mt-56'
})`
`
const MenuListEl = styled.a.attrs({
  className: 'text-white font-display no-underline text-sm mb-2'
})`

`
const MenuLabel = styled.span.attrs({
  className: 'text-white font-title text-md mb-5'
})`

`

export default Footer
