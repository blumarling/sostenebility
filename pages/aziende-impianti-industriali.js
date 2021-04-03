import GridBoxBulletPoints from '../components/base/GridBoxBulletPoints'
import withHeader from '../hoc/withHeader'
import useDynamicCompo from '../hooks/useDynamicCompo'

const AziendeImpiantiIndustriali = ({ components }) => {

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

  const page01 = require('../static_data/aziende-impianti-industriali').default
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

export default withHeader(AziendeImpiantiIndustriali)