import React from 'react'
import styled, {css} from "styled-components"
import classNames from 'classnames'

const Button = ({onClick = () => {}, isLink, label, small, large,
  medium, primary}) => {

  const htmlClasses = classNames(
    `main-button default rounded-md flex items-center justify-center
  border border-transparent text-base font-medium rounded-md`,
    {
      'py-2 text-lg px-5': small,
      'py-4 text-lg px-10': medium,
      'primary' : primary
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
    background-color: #f1f1f1;
    color: #444;
    font-size: 16px;
    &:hover {
      background-color: #cccccc;
    }
  }
  &.primary {
    background-color: red;
    color: #fff;
    font-size: 16px;
  }
`
const ButtonContainerLink = styled.a`

`

export default Button
