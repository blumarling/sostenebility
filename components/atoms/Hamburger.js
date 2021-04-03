import React from 'react'
import styled from "styled-components"

const Hamburger = ({src}) => {

  return (
    <HamburgerContainer href="#">
      <img className="h-full w-full"
        src={src || './img/hamburger-icon.svg'}
      />
    </HamburgerContainer>
  )

}

const HamburgerContainer = styled.a.attrs({
  className: 'flex md:hidden items-center h-14 w-14 py-3'
})`

`

export default Hamburger
