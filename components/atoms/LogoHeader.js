import Link from 'next/link'
import React from 'react'
import styled, {css} from "styled-components"

const LogoHeader = ({src, href}) => {

  return (
    <Link href={href} passHref>
      <LogoHeaderContainer>
        <img className="md:h-16 h-12 w-auto"
          src={src || 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'}
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
