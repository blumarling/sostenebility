import React, { useState, useEffect } from 'react'
import useDynamicCompo from '../../hooks/useDynamicCompo'
import classNames from 'classnames'
import dynamic from 'next/dynamic'
import styled, { css } from "styled-components"
import H3 from '../typography/H3'


const GridBox = ({title, titleColor, CompoListType, backgroundColor,
  boxed, paddingTop, paddingBottom, list = [], ...props }) => {

  const views = useDynamicCompo({ components: list, componentType : CompoListType })

  const blockClasses = classNames(
    'flex w-full flex-col md:flex-row items-center justify-center px-8 py-12 ',
    {
      'max-w-screen-xl': !!boxed
    }
  )
  
  return (
    <div
      className={`flex-col flex items-center justify-center md:py-10 md:pb-20 ${backgroundColor}`}
    >
      { !!title && (
        <div className="py-10 pt-20 md:py-6 px-10">
          <H3 color={titleColor} className="text-center">
            {title}
          </H3>
        </div>
      )}
      <div className={blockClasses}>
        <GridBoxContainer>
          {views}
        </GridBoxContainer>
      </div>
    </div>
  )

}

const GridBoxContainer = styled.div.attrs({
  className:' w-full flex items-start justify-start flex-col md:flex-row flex-wrap'
})`

`

export default GridBox
