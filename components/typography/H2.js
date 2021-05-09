import React from "react"
import styled from "styled-components"

const H2 = ({children, color, className}) => {
  return (
    <H2Container className={`${color} ${className}`}>
      {children}
    </H2Container>
  )
}

const H2Container = styled.h2.attrs({
  className: 'font-title text-3xl leading-snug md:text-4xl md:leading-12 lg:leading-tight'
})`
  z-index:2;
  white-space: break-spaces;
`

export default H2
