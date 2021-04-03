import GridBoxBulletPoints from '../components/base/GridBoxBulletPoints'
import useDynamicCompo from '../hooks/useDynamicCompo'
import withHeader from '../hoc/withHeader'


const ResidenzePrivate = ({ components }) => {
  
  const { views } = useDynamicCompo({components})

  return (
    <div>
      { views }
      <GridBoxBulletPoints
        boxed
        title="Perchè scegliere Sostenibility."
        titleColor="text-white"
      />
    </div>
  )
}

export async function getStaticProps(context) {

  const page01 = require('../static_data/residenze-private').default
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

export default withHeader(ResidenzePrivate)