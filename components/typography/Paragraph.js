import React from "react"
import styled from "styled-components"

const Paragraph = ({children, color}) => {
  return (
    <ParagraphContainer className={`${color}`}>
      {children}
    </ParagraphContainer>
  )
}

const ParagraphContainer = styled.p.attrs({
  className: 'font-display text-sm leading-snug md:text-sm md:leading-relaxed'
})`
  z-index:2;
  white-space: break-spaces;
  padding: 0px;
  margin: 0px;
`

export default Paragraph
