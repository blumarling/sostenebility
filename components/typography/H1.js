import React from "react"
import styled from "styled-components"

const H1 = ({children, color}) => {
  return (
    <H1Container className={`${color}`}>
      {children}
    </H1Container>
  )
}

const H1Container = styled.h1.attrs({
  className: 'font-title text-4xl leading-snug md:text-7xl md:leading-snug p-0 m-0'
})`
  z-index:2;
  white-space: break-spaces;
`

export default H1
