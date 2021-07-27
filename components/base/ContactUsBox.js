import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import styled, {css} from "styled-components"
import Button from './Button'

const ContactUsBox = ({title, link}) => {
  console.log({title, link})
  const boxClasses = classNames(
    `flex items-center justify-center w-full md:flex-col flex-col`,
    {
      'max-w-screen-lg': true
    }
  )

  return (
    <ContactUsBoxContainer ariaLabel="Global">
      <div className={boxClasses}>
        <div className="text-white text-4xl font-title">{title}</div>
        <Link
          href={link}
        >
          <Button
            className="mt-10"
            label={'OK'}
            link={false}
            labelColor="text-primary-900"
            uppercase
          />
        </Link>
      </div>
    </ContactUsBoxContainer>
  )

}

const ContactUsBoxContainer = styled.div.attrs({
  className: 'flex justify-center items-center py-24 px-6 bg-primary-900 flex-col -mb-56'
})`
`

export default ContactUsBox
