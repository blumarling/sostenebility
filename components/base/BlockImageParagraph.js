import classNames from 'classnames'
import React from 'react'
import styled, { css } from "styled-components"
import H2 from '../typography/H2'
import Paragraph from '../typography/Paragraph'
import Button from './Button'

const BlockImageParagraph = ({image, image_mobile, paragraph, paragraphColor,
  titleColor, boxed, title, reverse, link, href}) => {

  const blockClasses = classNames(
    'flex w-full flex-col md:flex-row',
    {
      'max-w-screen-lg': !!boxed,
      'md:flex-row-reverse': reverse
    }
  )
  return (
    <BlockImageParagraphContainer className={blockClasses}>
      <div className="md:w-1/2 image-block flex items-center justify-center relative overflow-hidden">
        <img
          className="w-full h-full hidden md:block object-cover absolute"
          src={image || ''} alt=""
        />
        <img
          className="h-full md:hidden object-cover absolute"
          src={image_mobile || ''} alt=""
        />
      </div>
      <div className="md:w-1/2 lg:p-24 lg:py-0 xl:px-16 md:p-16 md:py-0 p-8 py-12 flex justify-center flex-col items-center">
        <div className="xl:max-w-lg max-w-sm">
          <H2 color={titleColor} className="leading-tight mb-3">
            <span dangerouslySetInnerHTML={{__html: title}}/>
          </H2>
          <Paragraph color={paragraphColor}>
            <span dangerouslySetInnerHTML={{__html: paragraph}}/>
          </Paragraph>
          {!!link && <div className="mt-5"><Button
            naked
            rightIcon="/img/icon-arrow-dx.svg"
            label={'Scopri di più'}
            link={link}
            labelColor={paragraphColor}
            uppercase={false}
            leftAlign
            className="pl-0"
          /></div>}
        </div>
      </div>
    </BlockImageParagraphContainer>
  )

}

const BlockImageParagraphContainer = styled.div`
  overflow:hidden;
  /* max-height: 600px; */
  .image-block {
    height: 100vw;
    @media screen and (min-width: 1024px) {
      height: 50vw;
    }
  }
`

export default BlockImageParagraph
