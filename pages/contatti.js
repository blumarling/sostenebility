import BlockForm from '../components/base/BlockForm'
import BlockTitleGrid from '../components/base/BlockTitleGrid'
import withHeader from '../hoc/withHeader'
import useDynamicCompo from '../hooks/useDynamicCompo'

const Contatti = ({ components }) => {  
  const { views } = useDynamicCompo({components})

  return (
    <div>
      { views }
      <BlockTitleGrid
        title="Get in touch"
        titleColor="text-primary-900"
        paddingBottom={0}
        boxed
      />
      <BlockForm
        title="Vivamus commodo accumsan"
        paragraph="Cras auctor, risus eget finibus tempor, leo urna maximus velit, eget dictum dui ex ac justo. In hac habitasse platea dictumst."
        titleColor="text-primary-900"
        paragraphColor="text-primary-900"
        paddingTop={0}
        boxed
      />
    </div>
  )
}

export async function getStaticProps(context) {

  const page01 = require('../static_data/contatti').default
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

export default withHeader(Contatti)