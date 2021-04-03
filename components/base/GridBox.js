import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import dynamic from 'next/dynamic'
import styled, { css } from "styled-components"
import H2 from '../typography/H2'
import H3 from '../typography/H3'
import H4 from '../typography/H4'
import Paragraph from '../typography/Paragraph'
import SingleBulletPoint from './SingleBulletPoint'

const importView = componentName => {
  return dynamic(() =>
    import(`./${componentName}`)
    .catch(() => import(`./NullCompo`))
  )
}

const GridBox = ({title, titleColor, singleItemComponent,
  boxed, paddingTop, paddingBottom, list = [],}) => {

  const [views, setViews] = useState([])

  useEffect(() => {
    async function loadViews () {
      const componentPromises =
        list.map(
            async (item, index) => {
              const View = importView(singleItemComponent)
              return <View key={item.id} {...item} />
            }
          )
      const allViews = await Promise.all(componentPromises)
      setViews(allViews)
    }
    loadViews()
  }, [list])

  const blockClasses = classNames(
    'flex w-full flex-col md:flex-row items-center justify-center px-8 py-12',
    {
      'max-w-screen-lg': !!boxed
    }
  )

  return (
    <div className="flex-col flex items-center justify-center bg-white py-10 pb-20">
      { !!title && (
        <div className="pt-5 pb-6 px-10">
          <H3 color={titleColor}>
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
  className:' w-full flex items-start justify-center flex-col md:flex-row flex-wrap'
})`

`

export default GridBox
