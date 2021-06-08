import React, { lazy, useCallback, useEffect, useState } from 'react'
import * as componentsList from '../components/base'

const useDynamicCompo = ({components, componentType}) => {

  return components
    .map( (item, index) => {
        const View = componentsList[`${componentType ? componentType : item['component']}`]
        return <View key={item.id ? item.id : index} {...item} />
      }
    )
}


export default useDynamicCompo