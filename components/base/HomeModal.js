import { useState, useEffect, useRef } from "react"
import ReactDOM from 'react-dom'
import styled, { css } from "styled-components"
import gsap from "gsap"
import CloseIcon from "../svg/CloseIcon"
import H2 from "../typography/H2"
import Paragraph from "../typography/Paragraph"
import Button from "../base/Button"
import { useRouter } from 'next/router'

const HomeModal = ({onClose}) => {
  const modalEl = useRef(null)
  const backgroundEl = useRef(null)
  const router = useRouter()

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
        <Body className="flex flex-col md:flex-row">
          <div className="flex flex-col flex-1 md:p-12 p-6 justify-center">
            <H2 color={`text-primary-900 mb-5`}>Superbonus 110</H2>
            <div className="mb-5">
              <Paragraph color="text-primary-900">
                La ri­qual­i­fi­cazione en­er­get­ica è di­venuta una ne­ces­sità per la mag­gior parte degli im­mo­bili in Italia, in quanto hanno data di costruzione an­tecedente agli anni 2000. I costi per il riscal­da­mento degli ed­i­fici più ob­so­leti rag­giun­gono i lim­iti della in­sosteni­bil­ità se non si af­fronta la ri­qual­i­fi­cazione en­er­get­ica così come in­di­cata dal­l’op­por­tu­nità dei bonus. Sosteni­bil­ity si pone al vostro fi­anco dalla con­sulenza alla re­al­iz­zazione del prog­etto, svol­gendo la buro­crazia nec­es­saria al­l’ot­ten­i­mento della ces­sione del cred­ito d’im­posta e pros­eguendo con la cantieris­tica fino alla con­segna chi­avi in mano.
              </Paragraph>
            </div>
            <div>
            <Button
              naked
              rightIcon="/img/icon-arrow-dx.svg"
              label={'Scopri di più'}
              labelColor={'text-primary-900'}
              onClick={() => {
                document.querySelector('html').style.overflowY = 'auto'
                onClose()
                router.push('/nanotecnologia')
              }}
              uppercase={false}
              leftAlign
              className="pl-0"
            />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="w-full md:h-full object-cover"
              src={'http://api.sostenibility.it/wp-content/uploads/2021/05/sostenibility-riqualificazione-energetica-superbonus-mobile-min.jpg'} alt=""
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
  @media (max-width: 767px) {
    width: 95%;
    height: 85%;
  }
`
const CloseButton = styled.div`
  cursor: pointer;
  z-index: 99;
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
