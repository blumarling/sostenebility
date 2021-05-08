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
          className="w-full md:hidden object-cover absolute"
          src={image_mobile || ''} alt=""
        />
      </div>
      <div className="md:w-1/2 lg:p-24 xl:px-16 md:p-16 p-8 py-12 flex justify-center flex-col items-center">
        <div className="xl:max-w-lg max-w-sm">
          <H2 color={titleColor} className="leading-tight mb-2">
            <span dangerouslySetInnerHTML={{__html: title}}/>
          </H2>
          <Paragraph color={paragraphColor}>
            <span dangerouslySetInnerHTML={{__html: paragraph}}/>
          </Paragraph>
          {!!link && <Button
            naked
            rightIcon="/img/icon-arrow-dx.svg"
            label={'Scopri di più'}
            link={link}
            labelColor={paragraphColor}
            uppercase={false}
            leftAlign
          />}
        </div>
      </div>
    </BlockImageParagraphContainer>
  )

}

const BlockImageParagraphContainer = styled.div`
  overflow:hidden;
  /* max-height: 600px; */
  .image-block {
    height: 50vw;
  }
`

export default BlockImageParagraph
