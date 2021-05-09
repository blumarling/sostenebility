import React from 'react'
import styled, {css} from "styled-components"
import classNames from 'classnames'

const Button = ({onClick = () => {}, isLink, label, small, large,
  medium, primary}) => {

  const htmlClasses = classNames(
    `main-button default rounded-md flex items-center justify-center
  border border-transparent text-base font-medium rounded-md bg-grey-900 text-white hover:bg-grey-600`,
    {
      'py-2 text-lg px-5': small,
      'py-4 text-lg px-10': medium,
      'bg-primary-900 text-white hover:bg-primary-600' : primary
    }
  )

  if(isLink) {
    return (
      <ButtonContainerLink className={htmlClasses} onClick={onClick}>
        {label}
      </ButtonContainerLink>
    )
  } 
  return (
    <ButtonContainer className={htmlClasses} onClick={onClick}>
      {label}
    </ButtonContainer>
  )

}

const ButtonContainer = styled.div`
  cursor: pointer;
  &.default {
    font-size: 16px;
  }
  &.primary {
    font-size: 16px;
  }
`
const ButtonContainerLink = styled.a`

`

export default Button
