import React from 'react'
import styled, {css} from "styled-components"

const Avatar = ({active}) => {

    return (
        <AvatarContainer
            style={{backgroundImage: `url('/img/avatar.jpg')`}}
            active={active}
        >
        </AvatarContainer>
    )

}

const AvatarContainer = styled.div.attrs({
    className: ''
})`
    border-radius: 75px;
    width: 55px;
    height: 55px;
    overflow: hidden;
    background-size: cover;
    transition: 150ms ease-in-out;

    ${props => props.active && css`
        width: 85px;
        height: 85px;
        transition: 300ms ease-in-out;
    `}
`

export default Avatar