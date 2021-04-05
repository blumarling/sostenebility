import useDynamicCompo from '../../hooks/useDynamicCompo'
import withHeader from '../../hoc/withHeader'
import makePage from '../../utils/makePage'
import makeMenu from '../../utils/makeMenu'
import makeFooter from '../../utils/makeFooter'
import axios from 'axios'

const DynamicPage = ({ components }) => {
  
  const { views } = useDynamicCompo({components})

  return (
    <div>
      { views }      
    </div>
  )
}


export async function getStaticProps({ res, params }) {

  try {
    const pageFromCMS = await axios.get(`${process.env.CMS_URL}/wp/v2/pages/?slug=home&lang=it`)
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
  }
}

export default withHeader(DynamicPage)