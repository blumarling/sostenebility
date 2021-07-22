import classNames from 'classnames'
import React from 'react'
import styled, { css } from "styled-components"

const Button = ({href, link, label, className = '', leftIcon, rightIcon, labelColor,
  naked, uppercase, nopad, leftAlign = false, onClick}) => {

  if(!!href || !!link){
    return (
      <ButtonContainer
        href={href || link}
        className={`${className} ${naked ? '' : 'bg-white'}`}
      >
        <span className={`w-full  flex flex-row items-center ${leftAlign ? 'justify-start' : 'justify-center'}`}>
        {leftIcon && <img src={leftIcon} className="mr-4" alt="left icon"/>}
          <span className={classNames('font-title', {
            [labelColor]: labelColor,
            uppercase
          })}>
            {label}
          </span>
          {rightIcon && <img src={rightIcon} className="ml-4" alt="right icon"/>}
        </span>
      </ButtonContainer>
    )
  }
  return (
    <ButtonContainerDIV
      className={`${className} ${naked ? '' : 'bg-white'} cursor-pointer`}
      onClick={onClick}
    >
      <div className={`w-full flex flex-row items-center ${leftAlign ? 'justify-start' : 'justify-center'}`}>
        {leftIcon && <img src={leftIcon} className="mr-4" alt="left icon"/>}
        <div className={classNames('font-title', {
          [labelColor]: labelColor,
          uppercase
        })}>
          {label}
        </div>
        {rightIcon && <img src={rightIcon} className="ml-4" alt="right icon"/>}
      </div>
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
