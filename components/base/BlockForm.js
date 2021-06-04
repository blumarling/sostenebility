import axios from 'axios'
import classNames from 'classnames'
import React, {useState} from 'react'
import styled, { css } from "styled-components"
import useAxios from '../../hooks/useAxios'
import H2 from '../typography/H2'
import Paragraph from '../typography/Paragraph'

const BlockForm = ({title, titleColor, paragraph, paragraphColor,
  boxed, paddingTop, paddingBottom}) => {


  const blockClasses = classNames(
    'flex w-full flex-col md:flex-row items-start justify-center py-12',
    {
      'max-w-screen-lg': !!boxed,
      'pt-0': paddingTop === "0",
      'pb-0': paddingBottom === "0"
    }
  )
  const innerBlockClassesLeft = classNames(
    'md:w-1/3 lg:w-1/2 lg:pr-8 xl:pr-8 md:pr-4 px-8 md:py-16 lg:py-16 xl:py-20 p-8 pt-2',
    {
      'pt-6 xl:pt-6 md:pt-6 sm:pt-6': paddingTop === "0",
      'pb-6 xl:pb-6 md:pb-6 sm:pb-6': paddingBottom === "0"
    }
  )
  const innerBlockClassesRight = classNames(
    'md:flex-1 lg:pl-8 xl:pl-8 md:pl-4 px-8 md:py-16 lg:py-16 xl:py-20 p-8 pt-2 flex flex-row flex-wrap',
    {
      'pt-6 xl:pt-6 md:pt-6 sm:pt-6': paddingTop === "0",
      'pb-2 xl:pb-6 md:pb-6 sm:pb-6': paddingBottom === "0"
    }
  )

  const { postData } = useAxios(`https://api.sostenibility.it/wp-json/contact-form-7/v1/contact-forms/202/feedback`)
  const [formObj, setFormObj] = useState({})
  const sendForm = async () => {
    try {
      const x = new FormData()
      x.append("t-name", formObj['t-name'])
      x.append("t-surname", formObj['t-surname'])
      x.append("t-email", formObj['t-email'])
      x.append("t-phone", formObj['t-phone'])
      x.append("t-message", formObj['t-message'])
      const query = await postData({ params: x })
      alert('messaggio inviato con successo')
      window.location.href = '/'
    } catch(e) {

    }

  }

  const isButtonAvailable = formObj['t-name'] &&  formObj['t-surname'] && formObj['t-email'] && formObj['t-message'] && formObj['t-email'].indexOf('@') > -1 && formObj['t-email'].indexOf('.') > -1

  return (
    <BlockFormContainer>
      <div className={blockClasses}>
        <div className={innerBlockClassesLeft}>
          <H2
            color={titleColor}
            className="leading-tight md:leading-tight mb-5"
          >
            {title}
          </H2>
          <Paragraph
            color={paragraphColor || ''}
          >
            <span dangerouslySetInnerHTML={{__html:paragraph}} /> 
          </Paragraph>
        </div>
        <div className={innerBlockClassesRight}>
          
          <input
            type="text"
            className="w-full border border-coolGray-400 rounded-md mb-5"
            placeholder="nome"
            onChange={(e) => setFormObj((prev) => ({...prev, 't-name': e.target.value}))}

          />
          <input
            type="text"
            className="nooutline w-full border border-coolGray-400 rounded-md mb-5"
            onChange={(e) => setFormObj((prev) => ({...prev, 't-surname': e.target.value}))}
            placeholder="cognome"
          />
          <input
            type="email"
            className="focus:outline-none w-full border border-coolGray-400 rounded-md mb-5"
            onChange={(e) => setFormObj((prev) => ({...prev, 't-email': e.target.value}))}
            placeholder="email"
          />
          <input
            type="text"
            className="w-full border border-coolGray-400 rounded-md mb-5"
            onChange={(e) => setFormObj((prev) => ({...prev, 't-phone': e.target.value}))}
            placeholder="telefono"
          />
          <textarea
            className="w-full border border-coolGray-400 rounded-md h-36"
            placeholder="messaggio"
            onChange={(e) => setFormObj((prev) => ({...prev, 't-message': e.target.value}))}
            style={{ resize: 'none' }}
          />

          <div
            className={`border bg-primary-900 text-white hover:bg-primary-600 rounded-md py-2 px-4 mt-5 cursor-pointer ${isButtonAvailable ? '' : 'opacity-50'}`}
            onClick={isButtonAvailable ? sendForm : () => {}}
          >
            INVIA
          </div>

        </div>
      </div>
    </BlockFormContainer>
  )

}

const BlockFormContainer = styled.div.attrs({
  className:' w-full flex items-center justify-center md:mt-0 bg-white'
})`
  input, textarea {
    border: 1px solid #99a3a9!important;
    &:focus {
      outline-width: 0!important;
      outline: 0!important;
      border: 0;
    }
    &:active {
      outline-width: 0!important;
      border: 0;
      outline: 0!important;
    }
  }
`

export default BlockForm
