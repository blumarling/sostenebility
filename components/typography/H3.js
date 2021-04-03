import React from "react"
import styled from "styled-components"

const H3 = ({children, color, className}) => {
  return (
    <H3Container className={`${color} ${className}`}>
      {children}
    </H3Container>
  )
}

const H3Container = styled.h3.attrs({
  className: 'font-title text-2xl leading-snug md:text-3xl md:leading-snug'
})`
  z-index:2;
  white-space: break-spaces;
`

export default H3
