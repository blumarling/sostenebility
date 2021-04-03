import useDynamicCompo from '../hooks/useDynamicCompo'
import withHeader from '../hoc/withHeader'

const Home = ({ components }) => {
  
  const { views } = useDynamicCompo({components})

  return (
    <div>
      { views }      
    </div>
  )
}

export async function getStaticProps(context) {

  const page01 = require('../static_data/homepage').default
  const footerData = require('../static_data/footer').default
  const headerList = require('../static_data/header').default

  return {
    props: {
      ...page01,
      footerData,
      headerList
    }
  }
}

export default withHeader(Home)