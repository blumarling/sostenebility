import classNames from 'classnames'
import React from 'react'
import styled, { css } from "styled-components"
import useCommonAnimations from '../../hooks/useCommonAnimations'
import H1 from '../typography/H1'

const Hero = ({ title = '', image = '', image_mobile = '', titleColor = '',
full = '', leftBottomTitle  = ''}) => {

  const { scrollDown } = useCommonAnimations()
  const boxClasses = classNames(
    `max-w-screen-lg w-full h-full z-10 flex px-8`,
    {
      'justify-start items-end text-left pb-16': leftBottomTitle,
      'items-center justify-center text-center': !leftBottomTitle,
    }
  )

  return (
    <HeroContainer
      full={full}
      className="flex w-full max-h-screen items-center justify-center text-center"
    >
      <div className={boxClasses}>
        <H1 color={titleColor}><span dangerouslySetInnerHTML={{__html: title}}/></H1>
      </div>
      <img
        className="h-full w-full object-cover hidden md:block absolute hero-pic"
        src={image || 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'} alt=""
      />
      <img
        className="h-full w-full object-cover absolute hero-pic md:hidden"
        src={image_mobile || 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'} alt=""
      />
      {!!full && <img
        className="arrow-down"
        src={'./img/arrow-down.svg'} alt=""
        onClick={scrollDown}
      />}
    </HeroContainer>
  )

}

const HeroContainer = styled.div`
  background-color: #000;
  overflow: hidden;
  position:relative;
  height: 250px;
  @media (min-width: 990px) {
    height: 500px;
  }
  ${props => props.full && css`
    height: calc(100vh - 150px);
    @media (min-width: 990px) {
      height: calc(100vh - 150px);
    }
  `}
  .hero-pic {
    z-index:0;
    opacity: 0.7;
  }
  
  @keyframes arrowDownUp {
    0% { transform: translateY(0); }
    50% { transform: translateY(10px); }
    100% { transform: translateY(0px); }
  }

  .arrow-down {
    cursor: pointer;
    display: block;
    position: absolute;
    bottom: 20px;
    left: 50%;
    width: 30px;
    margin-left: -15px;
    animation: arrowDownUp 2s 5s ease-in-out infinite;
  }
`

export default Hero
