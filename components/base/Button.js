import classNames from 'classnames'
import React from 'react'
import styled, { css } from "styled-components"

const Button = ({href, label, className = '', leftIcon, rightIcon, labelColor,
  naked, uppercase, nopad, leftAlign, onClick}) => {

  if(!!href){
    return (
      <ButtonContainer
        href={href}
        className={`${className} ${naked ? '' : 'bg-white'}`}
      >
        <span className={`w-full flex flex-row items-center ${leftAlign ? 'justify-start' : 'justify-center'}`}>
          {leftIcon && <img src={leftIcon} className="mr-4" alt="left icon" />}
          <a href="#" className={classNames('font-title', {
            [labelColor]: labelColor,
            uppercase
          })}>
            {label}
          </a>
          {rightIcon && <img src={rightIcon} className="ml-4" alt="right icon"/>}
        </span>
      </ButtonContainer>
    )
  }
  return (
    <ButtonContainerDIV
      className={`${className} ${naked ? '' : 'bg-white'}`}
      onClick={onClick}
    >
      <span className={`w-full flex flex-row items-center ${leftAlign ? 'justify-start' : 'justify-center'}`}>
        {leftIcon && <img src={leftIcon} className="mr-4" alt="left icon"/>}
        <a href="#" className={classNames('font-title', {
          [labelColor]: labelColor,
          uppercase
        })}>
          {label}
        </a>
        {rightIcon && <img src={rightIcon} className="ml-4" alt="right icon"/>}
      </span>
    </ButtonContainerDIV>
  )
}

const ButtonContainer = styled.a.attrs({
  className: 'px-10 py-4'
})`
  border-radius: 12px;
`

const ButtonContainerDIV = styled.div.attrs({
  className: 'px-10 py-4'
})`
  border-radius: 12px;
`

export default Button
