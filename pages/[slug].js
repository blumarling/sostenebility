import useDynamicCompo from '../hooks/useDynamicCompo'
import withHeader from '../hoc/withHeader'
import withHeaderRefetch from '../hoc/withHeaderRefetch'
import axios from 'axios'
import refreshData from '../utils/refreshData'

const DynamicPage = ({ components }) => {
  
  return (
    <div className='text-center flex justify-center items-center bg-primary-900 text-white text-base h-screen'>
      <div>work in progress</div> 
    </div>
  )
}

export default DynamicPage