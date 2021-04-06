import { useState, useEffect, useRef } from "react"
import ReactDOM from 'react-dom'
import styled, { css } from "styled-components"
import gsap from "gsap"
import CloseIcon from "../svg/CloseIcon"
import H2 from "../typography/H2"
import Paragraph from "../typography/Paragraph"

const HomeModal = ({onClose}) => {
  const modalEl = useRef(null)
  const backgroundEl = useRef(null)

  useEffect(() => {
    document.querySelector('html').style.overflowY = 'hidden'
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
      onComplete: () => {
        document.querySelector('html').style.overflowY = 'auto'
        onClose()
      }
    })
  }


  return ReactDOM.createPortal(
    
    <BackgroundModal ref={backgroundEl}>
      <HomeModalContainer ref={modalEl} >
        <Header className="flex flex-row justify-between w-full absolute">
          <H2 color={'#797781'}></H2>
          <CloseButton onClick={closingModal}>
            <CloseIcon color={'#797781'} size={15} />
          </CloseButton>
        </Header>
        <Body className="flex flex-row">
          <div className="flex flex-col flex-1 p-12 justify-center">
            <H2 color={`text-primary-900 mb-5`}>Superbonus 110</H2>
            <div className="mb-5">
              <Paragraph color="text-primary-900">
                La ri­qual­i­fi­cazione en­er­get­ica è di­venuta una ne­ces­sità per la mag­gior parte degli im­mo­bili in Italia, in quanto hanno data di costruzione an­tecedente agli anni 2000. I costi per il riscal­da­mento degli ed­i­fici più ob­so­leti rag­giun­gono i lim­iti della in­sosteni­bil­ità se non si af­fronta la ri­qual­i­fi­cazione en­er­get­ica così come in­di­cata dal­l’op­por­tu­nità dei bonus. Sosteni­bil­ity si pone al vostro fi­anco dalla con­sulenza alla re­al­iz­zazione del prog­etto, svol­gendo la buro­crazia nec­es­saria al­l’ot­ten­i­mento della ces­sione del cred­ito d’im­posta e pros­eguendo con la cantieris­tica fino alla con­segna chi­avi in mano.
              </Paragraph>
            </div>
            <div>
              <a href="#" className={`font-bold text-primary-900`}>Scopri di più</a>
            </div>
          </div>
          <div className="w-1/2">
            <img
              className="h-full object-cover"
              src={'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=450&w=450&q=80'} alt=""
            />
          </div>
        </Body>
      </HomeModalContainer>
    </BackgroundModal>,
    document.querySelector('body') )

}

const HomeModalContainer = styled.div`
  height: 620px;
  width: 1000px;
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
    /* margin-bottom: 10px; */
  }
`
const BackgroundModal = styled.div`
 background-color: rgba(0,0,0,0.5);
 user-select: none;
 display: flex;
 position: fixed;
 top: 0px;
 left: 0px;
 width: 100%;
 height: 100%;
 z-index: 90;
 justify-content: center;
 align-items: center;
`

export default HomeModal