import React from 'react'
import styled from "styled-components"

const Hamburger = ({onClick}) => {

  return (
    <HamburgerContainer onClick={onClick}>
      <img className="h-full w-full"
        src={'./img/hamburger-icon.svg'}
      />
    </HamburgerContainer>
  )

}

const HamburgerContainer = styled.div.attrs({
  className: 'flex md:hidden items-center h-14 w-14 py-3'
})`

`

export default Hamburger
