import useDynamicCompo from '../../hooks/useDynamicCompo'
import withHeader from '../../hoc/withHeader'
import makePage from '../../utils/makePage'
import makeMenu from '../../utils/makeMenu'
import makeFooter from '../../utils/makeFooter'
import axios from 'axios'

const Home = ({ components }) => {
  
  const { views } = useDynamicCompo({components})

  return (
    <div>
      { views }      
    </div>
  )
}

export async function getStaticPaths() {
  
  // const lang = process.env.DEFAULT_LANG
  const locales = ['it']
  
  try {
    
    const allPagesInAllLanguages = await Promise.all([
      ...locales.map(lang => axios.get(`${process.env.CMS_URL}/wp/v2/pages?_fields[]=id&_fields[]=slug&lang=${lang}`) )
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
  
  const { slug } = params
  const lang = 'it'
  
  try {
    const pageFromCMS = await axios.get(`${process.env.CMS_URL}/wp/v2/pages/?slug=${slug}&lang=${lang}`)
    const menuFromCMS = await axios.get(`${process.env.CMS_URL}/wp-api-menus/v2/menus/2`)
    const footerMenuFromCMS = await axios.get(`${process.env.CMS_URL}/wp-api-menus/v2/menus/3`)
    
    const page = makePage(pageFromCMS.data[0])
    const headerList = makeMenu(menuFromCMS.data)
    const footerData = makeFooter(footerMenuFromCMS.data)
  
    return {
      props: {
        ...page,
        footerData,
        headerList
      }
    }

  } catch(e) {
    console.log({e})
    return res.statusCode = 404;
  }
}

export default withHeader(Home)