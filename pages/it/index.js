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
        slug: 'home',
        lang,
        footerData,
        headerList
      },
    }

  } catch(e) {
    console.log({e})
  }
}

export default process.env.NEXT_PUBLIC_IS_DEV
  ? withHeaderRefetch(DynamicPage, refreshData)
  : withHeader(DynamicPage)