import React from 'react'
import H4 from '../typography/H4'
import Paragraph from '../typography/Paragraph'

const SingleBulletPoint = ({titleColor, title, paragraph, paragraphColor, ...props}) => {

  return (
    <div className="flex flex-row justify-center items-start md:w-1/3 mb-10">
      <div className="w-4 h-4 relative rounded-lg overflow-hidden mt-2 flex justify-center">
        <img className="w-full object-cover absolute hero-pic"
          src={'/img/icon-check.svg'} alt="check" />
      </div>
      <div className="flex flex-col flex-1 ml-4 pr-6">
        <H4 color={titleColor || ''} className="mb-2">
          {title}
        </H4>
        <Paragraph color={paragraphColor || ''}>
          <span dangerouslySetInnerHTML={{__html: paragraph}}/>
        </Paragraph>
      </div>
    </div>
  )
}

export default SingleBulletPoint
