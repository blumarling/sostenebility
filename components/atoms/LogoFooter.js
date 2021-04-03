import React from 'react'
import styled, {css} from "styled-components"

const LogoFooter = ({src}) => {

  return (
    <LogoFooterContainer href="#">
      <img className="md:h-10 h-10 w-auto"
        src={src || 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'}
      />
    </LogoFooterContainer>
  )

}

const LogoFooterContainer = styled.a.attrs({
  className: 'flex items-center'
})`

`

export default LogoFooter
