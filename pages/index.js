import React, {useEffect} from 'react'
import { Hero } from 'ragnarok'
import styled from 'styled-components'

const Home = () => {

  return (
    <div><Hero title="cazza"></Hero></div>
  )
}

const CasaContainer = styled.div`
  ${props => props.theme.font.bold};
`

export default Home