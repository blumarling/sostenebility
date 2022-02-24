import useDynamicCompo from '../../hooks/useDynamicCompo'
import withHeader from '../../hoc/withHeader'
import axios from 'axios'
import refreshData from '../../utils/refreshData'
import withHeaderRefetch from '../../hoc/withHeaderRefetch'

const DynamicPage = ({ components }) => {
  
  const views = useDynamicCompo({components})

  return (
    <div>
      { views }      
    </div>
  )
}

export async function getStaticPaths() {
  if(typeof window !== 'undefined' && process.env.NEXT_PUBLIC_IS_DEV === 'false') return
  
  // const lang = process.env.DEFAULT_LANG
  const locales = ['it']
  const lang = 'it'
  
  try {
    
    const allPagesInAllLanguages = await Promise.all([
      ...locales.map(lang => axios.get(`${process.env.NEXT_PUBLIC_API_URL}/wp/v2/pages?_fields[]=id&_fields[]=slug&per_page=50&lang=${lang}`) )
    ])

    const paths = locales.reduce((prev, curr, index) => {
      return [
        ...prev,
        ...allPagesInAllLanguages[index].data
          .map(({slug}) => ({ params: { slug, lang: curr} }))
      ]
    }, [])

    return {
      paths,
      fallback: false
    };
  } catch(e) {
    console.log({e})
  }

}

export async function getStaticProps({ res, params }) {
  if(typeof window !== 'undefined' && process.env.NEXT_PUBLIC_IS_DEV === 'false') return
  
  const { slug } = params
  const lang = 'it'
  
  try {

    const {
      page,
      headerList,
      footerData
    } = await refreshData({slug, lang})
  
    return {
      props: {
        ...page,
        footerData,
        headerList
      },
    }

  } catch(e) {
    console.log({e})
    return res.statusCode = 404;
  }
}

export default process.env.NEXT_PUBLIC_IS_DEV === 'true'
  ? withHeaderRefetch(DynamicPage, refreshData)
  : withHeader(DynamicPage)