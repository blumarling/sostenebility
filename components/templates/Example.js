import React from 'react'
import styled, {css} from "styled-components"
import H2 from "../typography/H2"

const Example = ({title}) => {

  return (
    <ExampleContainer>
      <H2>{title}</H2>
    </ExampleContainer>
  )

}

const ExampleContainer = styled.nav.attrs({
  className: 'flex items-center justify-center p-5 w-full min-h-screen'
})`
  border: 1px solid red;
`

export default Example
