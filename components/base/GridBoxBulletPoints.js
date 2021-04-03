import classNames from 'classnames'
import React from 'react'
import styled, { css } from "styled-components"
import H2 from '../typography/H2'
import H3 from '../typography/H3'
import H4 from '../typography/H4'
import Paragraph from '../typography/Paragraph'
import SingleBulletPoint from './SingleBulletPoint'

const GridBoxBulletPoints = ({title, titleColor,
  boxed, paddingTop, paddingBottom}) => {

  const blockClasses = classNames(
    'flex w-full flex-col md:flex-row items-center justify-center px-8 py-12',
    {
      'max-w-screen-lg': !!boxed
    }
  )

  return (
    <div className="flex-col flex items-center justify-center bg-primary-900">
      { !!title && (
        <div className="pt-24 pb-6">
          <H4 color={titleColor}>
            {title}
          </H4>
        </div>
      )}
      <div className={blockClasses}>
        <GridBoxBulletPointsContainer>
          <SingleBulletPoint
            titleColor={'text-white'}
            paragraphColor={'text-primary-400'}
          />
          <SingleBulletPoint
            titleColor={'text-white'}
            paragraphColor={'text-primary-400'}
          />
          <SingleBulletPoint
            titleColor={'text-white'}
            paragraphColor={'text-primary-400'}
          />
          <SingleBulletPoint
            titleColor={'text-white'}
            paragraphColor={'text-primary-400'}
          />
          <SingleBulletPoint
            titleColor={'text-white'}
            paragraphColor={'text-primary-400'}
          />
          <SingleBulletPoint
            titleColor={'text-white'}
            paragraphColor={'text-primary-400'}
          />
          <SingleBulletPoint
            titleColor={'text-white'}
            paragraphColor={'text-primary-400'}
          />
          <SingleBulletPoint
            titleColor={'text-white'}
            paragraphColor={'text-primary-400'}
          />
          <SingleBulletPoint
            titleColor={'text-white'}
            paragraphColor={'text-primary-400'}
          />         
        </GridBoxBulletPointsContainer>
      </div>
    </div>
  )

}

const GridBoxBulletPointsContainer = styled.div.attrs({
  className:' w-full flex items-center justify-center flex-col md:flex-row flex-wrap'
})`

`

export default GridBoxBulletPoints
