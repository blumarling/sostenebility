import React from 'react'
import styled, {css} from "styled-components"

const LogoFooter = ({src}) => {

  return (
    <LogoFooterContainer href="#">
      <img className="md:h-16 h-16 w-auto -ml-3"
        src={src || 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'}
        alt="logo footer"
      />
    </LogoFooterContainer>
  )

}

const LogoFooterContainer = styled.a.attrs({
  className: 'flex items-center'
})`

`

export default LogoFooter
