import classNames from 'classnames'
import React from 'react'
import styled, { css } from "styled-components"
import H2 from '../typography/H2'
import Paragraph from '../typography/Paragraph'

const BlockParagraphParagraph = ({title, titleColor, paragraph_01, paragraph_02, paragraphColor,
  boxed, paddingTop, paddingBottom}) => {

  const blockClasses = classNames(
    'flex w-full flex-col md:flex-row items-center justify-center py-24',
    {
      'max-w-screen-lg': !!boxed,
      'pt-0': paddingTop === "0",
      'pb-0': paddingBottom === "0"
    }
  )
  const innerBlockClassesLeft = classNames(
    'md:flex-1 lg:pr-8 xl:pr-8 md:pr-4 px-8 md:py-16 lg:py-16 xl:py-20 p-8 pt-2',
    {
      'pt-2 xl:pt-6 md:pt-6 sm:pt-6': paddingTop === "0",
      'pb-2 xl:pb-6 md:pb-6 sm:pb-6': paddingBottom === "0"
    }
  )
  const innerBlockClassesRight = classNames(
    'md:flex-1 lg:pl-8 xl:pl-8 md:pl-4 px-8 md:py-16 lg:py-16 xl:py-20 p-8',
    {
      'pt-2 xl:pt-6 md:pt-6 sm:pt-6': paddingTop === "0",
      'pb-2 xl:pb-6 md:pb-6 sm:pb-6': paddingBottom === "0"
    }
  )
  return (
    <BlockParagraphParagraphContainer>
      <div className={blockClasses}>
        <div className={innerBlockClassesLeft}>
          <Paragraph color={paragraphColor}>
            {paragraph_01}
          </Paragraph>
        </div>
        <div className={innerBlockClassesRight}>
          <Paragraph color={paragraphColor}>
            {paragraph_02}
          </Paragraph>
        </div>
      </div>
    </BlockParagraphParagraphContainer>
  )

}

const BlockParagraphParagraphContainer = styled.div.attrs({
  className:' w-full flex items-center justify-center'
})`
  
`

export default BlockParagraphParagraph
