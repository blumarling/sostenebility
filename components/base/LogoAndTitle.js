import classNames from 'classnames'
import React from 'react'
import styled, { css } from "styled-components"
import H2 from '../typography/H2'

const LogoAndTitle = ({ title, titleColor, boxed, image, image_two, image_three, paddingTop, paddingBottom }) => {

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
        <div className="flex flex-col md:flex-row items-center">
        <img src={image} className=" max-h-24 w-auto mt-5" alt="logo and title"/>
        {image_two && <img src={image_two} className=" max-h-24  w-auto mt-5 md:ml-16" alt="logo and title"/>}
        {image_three && <img src={image_three} className=" max-h-24  w-auto mt-5 md:ml-16" alt="logo and title"/>}
        </div>
      </div>
    </div>
  )
}


export default LogoAndTitle
