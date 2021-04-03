import classNames from 'classnames'
import React from 'react'
import styled, { css } from "styled-components"
import H4 from '../typography/H4'
import Paragraph from '../typography/Paragraph'

const SingleTeamCard = ({titleColor, paragraphColor}) => {

  return (
    <div className="flex flex-col md:flex-row justify-center items-start md:w-1/2 mb-10">
      <div className="md:w-1/3 w-full h-48 relative rounded-lg overflow-hidden mb-4">
        <img className="h-full w-full object-cover absolute hero-pic"
          src={'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'} alt="" />
      </div>
      <div className="flex flex-col flex-1 md:ml-6">
        <H4 color={titleColor || ''}>
          Nome Cognome
        </H4>
        <Paragraph color={paragraphColor || ''}>
          Integer sit amet quam molestie, pharetra nisl sit amet, maximus ante. Cras nisi sem, venenatis bibendum tempus vitae, consequat vel.
        </Paragraph>
      </div>
    </div>
  )
}

export default SingleTeamCard
