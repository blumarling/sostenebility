import classNames from 'classnames'
import React from 'react'
import styled, { css } from "styled-components"
import H4 from '../typography/H4'
import Paragraph from '../typography/Paragraph'
import Button from './Button'

const SingleGridItem01 = ({ titleColor, paragraphColor,
  title, paragraph, link, image }) => {

  return (
    <div className="flex flex-col justify-between items-center md:w-1/3 mb-20 text-center px-6 h-80 md:mb-0">
      <img src={image} className="w-20 mb-7"/>
      <H4
        color={titleColor || ''}
        className="mb-3 w-full"
      >
        {title}
      </H4>
      <Paragraph
        color={paragraphColor || ''}
        className="mb-3 w-full"
      >
        {paragraph}
      </Paragraph>
      {!!link && <Button
        naked
        rightIcon="/img/icon-arrow-dx.svg"
        label={'Scopri di più'}
        link={link}
        labelColor={paragraphColor}
        uppercase={false}
      />}
    </div>
  )
}

export default SingleGridItem01
