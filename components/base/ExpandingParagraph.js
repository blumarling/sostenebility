import classNames from 'classnames'
import React, { useState } from 'react'
import styled, { css } from "styled-components"
import Button from '../atoms/Button'
import H2 from '../typography/H2'

const ExpandingParagraph = ({ paragraph, paragraphColor, boxed, title}) => {

  const [isCompressed, setIsCompressed] = useState(true)
  const compressedText = (text) => {
    return `${text.substr(0, 2060)} [...]`
  }


  return (
    <ExpandingBlockContainer className={classNames(
      'flex w-full flex-col md:flex-col items-center',
    )}>
      
      <div
        className={classNames('md:w-full lg:p-24 xl:px-36 md:p-16 p-8 py-0 flex flex-col items-start justify-center',
        {
          'max-w-screen-lg': !!boxed
        })}
      >
        <H2 color={paragraphColor} className="leading-tight mb-10">{title}</H2>
        <CompressedDiv
          className={paragraphColor}
          isCompressed={isCompressed}
          dangerouslySetInnerHTML={{ __html: isCompressed ? compressedText(paragraph) : paragraph }}
        />
        <div className="mt-10 w-full flex justify-center">
        <Button
          label={isCompressed ? 'Mostra di più' : 'Mostra meno'}
          onClick={() => setIsCompressed(!isCompressed)}
          small primary
        />
        </div>
      </div>

    </ExpandingBlockContainer>
  )

}

const ExpandingBlockContainer = styled.div`

`
const CompressedDiv = styled.div`
  p {
    margin-bottom: 25px;
  }
`

export default ExpandingParagraph
