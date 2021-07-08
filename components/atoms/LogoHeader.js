import Link from 'next/link'
import React from 'react'
import styled, {css} from "styled-components"

const LogoHeader = ({src, href}) => {

  return (
    <Link href={href} passHref>
      <LogoHeaderContainer>
        <img className="-ml-3 h-16 md:h-24 w-auto"
          src={src || ''}
          alt="logo header"
        />
      </LogoHeaderContainer>
    </Link>
  )

}

const LogoHeaderContainer = styled.a.attrs({
  className: 'flex items-center justify-between'
})`

`

export default LogoHeader
