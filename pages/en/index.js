import useDynamicCompo from '../../hooks/useDynamicCompo'
import withHeader from '../../hoc/withHeader'
import refreshData from '../../utils/refreshData'
import withHeaderRefetch from '../../hoc/withHeaderRefetch'

const DynamicPage = ({ components }) => {
  
  const { views } = useDynamicCompo({components})

  return (
    <div>
      { views }      
    </div>
  )
}


export async function getStaticProps({ res, params }) {
  if(typeof window !== 'undefined' && process.env.NEXT_PUBLIC_IS_DEV === 'false') return

  const lang = 'it'

  try {

    const {
      page,
      headerList,
      footerData
    } = await refreshData({slug: 'home', lang})
  
    return {
      props: {
        ...page,
        footerData,
        headerList
      },
    }

  } catch(e) {
    console.log({e})
  }
}

export default process.env.NEXT_PUBLIC_IS_DEV === 'true'
  ? withHeaderRefetch(DynamicPage, refreshData)
  : withHeader(DynamicPage)