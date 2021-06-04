import makeFooter from "./makeFooter"
import makeMenu from "./makeMenu"
import makePage from "./makePage"
import axios from 'axios'

const refreshData = async ({slug, lang}) => {
    
    const pageFromCMS = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/wp/v2/pages/?slug=${slug ? slug : 'Home'}&lang=${lang}`)
    const menuFromCMS = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/wp-api-menus/v2/menus/2`)
    const footerMenuFromCMS = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/wp-api-menus/v2/menus/3`)
  
    const page = makePage(pageFromCMS.data[0])
    const headerList = makeMenu(menuFromCMS.data)
    const footerData = makeFooter(footerMenuFromCMS.data)
  
    return {
      page,
      headerList,
      footerData,
    }
  }

export default refreshData