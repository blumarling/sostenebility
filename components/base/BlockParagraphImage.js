import classNames from 'classnames'
import React from 'react'
import styled, { css } from "styled-components"
import H2 from '../typography/H2'
import Paragraph from '../typography/Paragraph'

const BlockParagraphImage = ({image, paragraph, paragraphColor, boxed, title}) => {

  const blockClasses = classNames(
    'flex w-full flex-col md:flex-row',
    {
      'max-w-screen-lg': !!boxed
    }
  )
  return (
    <BlockParagraphImageContainer className={blockClasses}>
      
      <div className="md:w-1/2 lg:p-24 xl:px-36 md:p-16 p-8 py-12 flex flex-col items-start justify-center">
        <H2 color={paragraphColor} className="leading-tight mb-2">{title}</H2>
        <Paragraph color={paragraphColor}>
          {paragraph}
        </Paragraph>
      </div>
      <div className="md:w-1/2 flex items-center justify-center relative overflow-hidden">
        <img
          className="w-full"
          src={image || 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=450&w=450&q=80'} alt=""
        />
      </div>

    </BlockParagraphImageContainer>
  )

}

const BlockParagraphImageContainer = styled.div`
  overflow:hidden;
  max-height: 600px;
`

export default BlockParagraphImage
