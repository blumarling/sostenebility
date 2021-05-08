import React from "react"
import styled from "styled-components"

const H4 = ({children, color, className}) => {
  return (
    <H4Container className={`${color} ${className}`}>
      {children}
    </H4Container>
  )
}

const H4Container = styled.h4.attrs({
  className: 'font-title text-xl leading-snug md:text-xl md:leading-snug'
})`
  z-index:2;
  white-space: break-spaces;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export default H4
