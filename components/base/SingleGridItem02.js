import classNames from 'classnames'
import React from 'react'
import styled, { css } from "styled-components"
import H4 from '../typography/H4'
import Paragraph from '../typography/Paragraph'

const SingleGridItem02 = ({ titleColor, paragraphColor,
  title, paragraph }) => {

  return (
    <div className="flex flex-col justify-start items-start md:w-1/2 text-left md:px-6 h-28 md:h-36">
      <H4
        color={titleColor || ''}
        className="mb-2 w-full"
      >
        {title}
      </H4>
      <Paragraph
        color={paragraphColor || ''}
        className="mb-3 w-full"
      >
       <span dangerouslySetInnerHTML={{__html:paragraph}} /> 
      </Paragraph>
    </div>
  )
}

export default SingleGridItem02
