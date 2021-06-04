import classNames from 'classnames'
import React from 'react'
import { useDispatch } from 'react-redux'
import styled, { css } from "styled-components"
import useCommonAnimations from '../../hooks/useCommonAnimations'
import useModal from '../../hooks/useModal'
import { toggleHomeModal } from '../../redux/common/actions'
import H1 from '../typography/H1'
import Button from './Button'
import { motion } from "framer-motion"

const Hero = ({ title = '', image = '', image_mobile = '', titleColor = '',
full = '', leftBottomTitle  = '', buttonLabel, buttonLink,}) => {

  const { scrollDown } = useCommonAnimations()
  const dispatch = useDispatch()  
  const { openModal } = useModal()

  return (
    <HeroContainer
      full={full}
      isImageThere={!!image}
      className="flex w-full max-h-screen items-center justify-center text-center bg-primary-900"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}

        className={classNames(
          `max-w-screen-lg w-full h-full z-10 flex px-8 flex-col`,
          {
            'items-start justify-end text-left pb-16': leftBottomTitle,
            'items-center justify-center text-center': !leftBottomTitle,
          }
        )}
      >
        <H1 color={titleColor}>
          <span dangerouslySetInnerHTML={{__html: title}}/>
        </H1>
        {buttonLabel && buttonLink && <Button
          className="mt-10"
          label={buttonLabel}
          onClick={() => {
            openModal({type: 'home'})
            dispatch(toggleHomeModal())
          }}
          labelColor="text-primary-900"
          uppercase
        />}
      </motion.div>
      {!!image && <img
        className="h-full w-full object-cover hidden md:block absolute hero-pic"
        src={image} alt=""
      />}
      {!!image_mobile && <img
        className="h-full w-full object-cover absolute hero-pic md:hidden"
        src={image_mobile || 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'} alt=""
      />}
      {!!full && <img
        className="arrow-down"
        src={'./img/arrow-down.svg'} alt=""
        onClick={scrollDown}
      />}
    </HeroContainer>
  )

}

const HeroContainer = styled.div`
  overflow: hidden;
  position:relative;
  height: 250px;

  @media (min-width: 990px) {
    height: 500px;
    ${props => !props.isImageThere && css`
      height: 250px;
    `}
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
