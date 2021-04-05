import classNames from 'classnames'
import React from 'react'
import styled, { css } from "styled-components"
import H2 from '../typography/H2'
import Paragraph from '../typography/Paragraph'

const BlockImageParagraph = ({image, image_mobile, paragraph, paragraphColor,
  titleColor, boxed, title, reverse}) => {

  const blockClasses = classNames(
    'flex w-full flex-col md:flex-row',
    {
      'max-w-screen-lg': !!boxed,
      'md:flex-row-reverse': reverse
    }
  )
  return (
    <BlockImageParagraphContainer className={blockClasses}>
      <div className="md:w-1/2 flex items-center justify-center relative overflow-hidden">
        <img
          className="w-full hidden md:block"
          src={image || ''} alt=""
        />
        <img
          className="w-full md:hidden"
          src={image_mobile || ''} alt=""
        />
      </div>
      <div className="md:w-1/2 lg:p-24 xl:px-36 md:p-16 p-8 py-12 flex items-start justify-center flex-col">
        <H2 color={titleColor} className="leading-tight mb-2">
          <span dangerouslySetInnerHTML={{__html: title}}/>
        </H2>
        <Paragraph color={paragraphColor}>
          <span dangerouslySetInnerHTML={{__html: paragraph}}/>
        </Paragraph>
      </div>
    </BlockImageParagraphContainer>
  )

}

const BlockImageParagraphContainer = styled.div`
  overflow:hidden;
  max-height: 600px;
`

export default BlockImageParagraph
