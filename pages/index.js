import useDynamicCompo from '../hooks/useDynamicCompo'
import withHeader from '../hoc/withHeader'
import withHeaderRefetch from '../hoc/withHeaderRefetch'
import axios from 'axios'
import refreshData from '../utils/refreshData'

const DynamicPage = ({ components }) => {
  
  return (
    <div className=' h-screen text-center flex justify-center items-center bg-primary-900 text-white text-base'>
      
      <div>
        <img src='https://sostenibility.it/img/logo-sostenibility-white.svg' className='w-56 h-auto' />
        <div>work in progress</div></div> 
    </div>
  )
}

export default DynamicPage