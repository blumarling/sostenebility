import classNames from 'classnames'
import React from 'react'
import styled, { css } from "styled-components"
import H2 from '../typography/H2'
import Paragraph from '../typography/Paragraph'

const Banner = ({title, titleColor, paragraph, paragraphColor,
  boxed, paddingTop, paddingBottom}) => {

  const blockClasses = classNames(
    'flex w-full flex-col md:flex-row items-center justify-center px-8 p-20 pt-28',
    {
      'max-w-screen-lg': !!boxed
    }
  )

  return (
    <div className="flex-col flex items-center justify-center">
      <div className={blockClasses}>
        <BannerContainer>
          <div className="xl:w-1/4 md:w-1/3 p-4 md:p-8">
            <img src="/img/smart-partner.jpg" />
          </div>
          <div className="flex flex-1 flex-col">
            <H2 color={titleColor} className="mb-4">{title}</H2>
            <Paragraph color={paragraphColor}>{paragraph}</Paragraph>
          </div>
        </BannerContainer>
      </div>
    </div>
  )

}

const BannerContainer = styled.div.attrs({
  className:' w-full flex items-center justify-center p-8 md:p-4 flex-col md:flex-row'
})`
  border: 1px solid #ddd;
  border-radius: 30px;
  box-shadow: 2px 2px 25px 0 rgba(18, 34, 43, 0.1);
  background-color: #fff;
`

export default Banner
