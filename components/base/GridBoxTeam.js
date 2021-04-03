import classNames from 'classnames'
import React from 'react'
import styled, { css } from "styled-components"
import H2 from '../typography/H2'
import H3 from '../typography/H3'
import Paragraph from '../typography/Paragraph'
import SingleTeamCard from './SingleTeamCard'

const GridBoxTeam = ({title, titleColor, paragraph, paragraphColor,
  boxed, paddingTop, paddingBottom}) => {

  const blockClasses = classNames(
    'flex w-full flex-col md:flex-row items-center justify-center px-8 py-12',
    {
      'max-w-screen-lg': !!boxed
    }
  )

  return (
    <div className="flex-col flex items-center justify-center">
      <div className={blockClasses}>
        <GridBoxTeamContainer>
          <SingleTeamCard
            titleColor={'text-primary-900'}
            paragraphColor={'text-primary-900'}
          />
          <SingleTeamCard
            titleColor={'text-primary-900'}
            paragraphColor={'text-primary-900'}
          />
          <SingleTeamCard
            titleColor={'text-primary-900'}
            paragraphColor={'text-primary-900'}
          />
          <SingleTeamCard
            titleColor={'text-primary-900'}
            paragraphColor={'text-primary-900'}
          />
        </GridBoxTeamContainer>
      </div>
    </div>
  )

}

const GridBoxTeamContainer = styled.div.attrs({
  className:' w-full flex items-center justify-center flex-col md:flex-row flex-wrap'
})`

`

export default GridBoxTeam
