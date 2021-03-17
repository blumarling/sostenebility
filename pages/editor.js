import { Head } from 'next/document'
import React, {useEffect} from 'react'
import styled from 'styled-components'
import Block01 from '../editor-components/Block01'
import '../styles/globals.css'

const compoList = [{
  compo: () => <div>ma ciao</div>,
  id:1
}]

const Editor = () => {

  return (
    <div className="relative bg-grey overflow-hidden flex flex-row min-h-screen">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex-1">
        <div className="px-4 py-6 sm:px-0">
          {
            compoList.map(item => <Block01 {...item} key={item.id} />)
          }
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  return { props: {} }
}


export default Editor