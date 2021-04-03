import classNames from 'classnames'
import React from 'react'
import styled, { css } from "styled-components"
import H2 from '../typography/H2'
import Paragraph from '../typography/Paragraph'
import SingleGridItem02 from './SingleGridItem02'

const BlockTitleGrid = ({title, titleColor, paragraph, paragraphColor,
  boxed, paddingTop, paddingBottom}) => {

  const blockClasses = classNames(
    'flex w-full flex-col md:flex-row items-start justify-center py-12',
    {
      'max-w-screen-lg': !!boxed,
      'pt-0': paddingTop === 0,
      'pb-0': paddingBottom === 0
    }
  )

  const innerBlockClassesLeft = classNames(
    'md:w-1/3 lg:w-1/2 lg:pr-8 xl:pr-8 md:pr-4 px-6 md:py-16 lg:py-16 xl:py-20 p-8 pt-2',
    {
      'pt-6 xl:pt-6 md:pt-6 sm:pt-6': paddingTop === 0,
      'pb-6 xl:pb-6 md:pb-6 sm:pb-6': paddingBottom === 0
    }
  )
  const innerBlockClassesRight = classNames(
    'md:flex-1 lg:pl-8 xl:pl-8 md:pl-4 px-8 md:py-16 lg:py-16 xl:py-20 p-8 pt-2 flex flex-row flex-wrap',
    {
      'pt-6 xl:pt-6 md:pt-6 sm:pt-6': paddingTop === 0,
      'pb-2 xl:pb-6 md:pb-6 sm:pb-6': paddingBottom === 0
    }
  )
  return (
    <BlockTitleGridContainer>
      <div className={blockClasses}>
        <div className={innerBlockClassesLeft}>
          <H2 color={titleColor}>
            {title}
          </H2>
        </div>
        <div className={innerBlockClassesRight}>
          <SingleGridItem02
            title="Amministrazione"
            titleColor="text-primary-900"
            paragraph={'esempio@sostenibility.com<br/>+39 01 234 56 78'}
            paragraphColor="text-primary-900"
          />
          <SingleGridItem02
            title="Amministrazione"
            titleColor="text-primary-900"
            paragraph={'esempio@sostenibility.com<br/>+39 01 234 56 78'}
            paragraphColor="text-primary-900"
          />
          <SingleGridItem02
            title="Amministrazione"
            titleColor="text-primary-900"
            paragraph={'esempio@sostenibility.com<br/>+39 01 234 56 78'}
            paragraphColor="text-primary-900"
          />
          <SingleGridItem02
            title="Amministrazione"
            titleColor="text-primary-900"
            paragraph={'esempio@sostenibility.com<br/>+39 01 234 56 78'}
            paragraphColor="text-primary-900"
          />
        </div>
      </div>
    </BlockTitleGridContainer>
  )

}

const BlockTitleGridContainer = styled.div.attrs({
  className:' w-full flex items-center justify-center md:mt-0 bg-white'
})`
  
`

export default BlockTitleGrid
