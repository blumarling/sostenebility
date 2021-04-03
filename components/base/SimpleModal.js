import { useState, useEffect, useRef } from "react"
import ReactDOM from 'react-dom'
import styled, { css } from "styled-components"
import gsap from "gsap"
import CloseIcon from "../svg/CloseIcon"
import H2 from "../typography/H2"

const SimpleModal = ({onClose}) => {
  const modalEl = useRef(null)
  const backgroundEl = useRef(null)

  useEffect(() => {
    gsap.to(modalEl.current, {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: "power3.inOut",
    })
    gsap.to(backgroundEl.current, {
      opacity: 1,
      duration: 0.5,
    })
  }, [])

  const closingModal = () => {
    gsap.to(backgroundEl.current, {
      opacity: 0,
      duration: 0.6,
    })
    gsap.to(modalEl.current, {
      scale: 0.85,
      opacity: 0,
      duration: 0.3,
      ease: "power3.inOut",
      onComplete: () => onClose()
    })
  }


  return ReactDOM.createPortal(
    
    <BackgroundModal ref={backgroundEl}>
      <SimpleModalContainer ref={modalEl} >
        <Header className="flex flex-row justify-between">
          <H2 color={'#797781'}></H2>
          <CloseButton onClick={closingModal}>
            <CloseIcon color={'#797781'} size={15} />
          </CloseButton>
        </Header>
        <Body className="flex flex-row">    
        </Body>
      </SimpleModalContainer>
    </BackgroundModal>,
    document.querySelector('body') )

}

const SimpleModalContainer = styled.div`
  height: 320px;
  width: 460px;
  background-color: #fff;
  border-radius: 12px;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.85);
`
const CloseButton = styled.div`
  cursor: pointer;
`
const Header = styled.div`
  width: 100%;
  padding: 30px;
`
const Body = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
  /* overflow-y: scroll; */
  > div {
    /* transform:scale(0.7); */
    margin-bottom: 10px;
  }
`
const Footer = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 30px 20px;
  box-shadow: inset 0px 5px 15px #0000003b;
`
const LeftButton = styled.div`
  cursor: pointer;
  padding: 10px 30px;
  &.active {
    border-left: 4px solid #7a78ff;
  }
`
const BackgroundModal = styled.div`
 background-color: rgba(255,255,255,0.8);
 user-select: none;
 display: flex;
 position: fixed;
 top: 0px;
 left: 0px;
 width: 100%;
 height: 100%;
 z-index: 9;
 justify-content: center;
 align-items: center;
`

export default SimpleModal
