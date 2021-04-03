import classNames from 'classnames'
import React from 'react'
import styled, { css } from "styled-components"
import H2 from '../typography/H2'

const TitleLogo = ({ title, titleColor, boxed, paddingTop, paddingBottom }) => {

  const blockClasses = classNames(
    'flex w-full items-center justify-center flex-col px-8 py-6 pb-16 md:pb-28 md:py-16 text-center',
    {
      'max-w-screen-lg': !!boxed
    }
  )

  return (
    <div className="flex-col flex items-center justify-center">
      <div className={blockClasses}>
        <H2 color={titleColor} className="mb-4">{title}</H2>
        <img src="/img/italia-solare.jpg" className="w-52 mt-5"/>
      </div>
    </div>
  )
}


export default TitleLogo
