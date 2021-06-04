import React, { lazy, useCallback, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const useDynamicCompo = ({components, componentType}) => {

  const [views, setViews] = useState([])
  
  useEffect(() => {
    if(!components) return
    async function loadViews () {
      const componentPromises =
        components
          .map( (item, index) => {
              const View = importView(componentType ? componentType : item['component'] )
              return <View key={item.id ? item.id : index} {...item} />
            }
          )
      setViews(componentPromises)
    }
    loadViews()
  }, [components])

  return {
    views
  }
}

const importView = componentName => {
  return dynamic(() =>
    import(`../components/base/${componentName}`)
    .catch(() => import(`../components/base/NullCompo`))
  )
}

export default useDynamicCompo