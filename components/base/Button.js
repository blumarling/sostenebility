import classNames from 'classnames'
import React from 'react'
import styled, { css } from "styled-components"

const Button = ({href, label, className = '', leftIcon, rightIcon, labelColor,
  naked, uppercase, nopad, leftAlign}) => {

  return (
    <ButtonContainer href={href} className={`${className} ${naked ? '' : 'bg-white'}`}>
      <span className={`w-full flex flex-row items-center ${leftAlign ? 'justify-start' : 'justify-center'}`}>
        {leftIcon && <img src={leftIcon} className="mr-4"/>}
        <a href="#" className={classNames('font-title', {
          [labelColor]: labelColor,
          uppercase
        })}>
          {label}
        </a>
        {rightIcon && <img src={rightIcon} className="ml-4"/>}
      </span>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.a.attrs({
  className: 'px-10 py-4'
})`
  border-radius: 12px;
`

export default Button
