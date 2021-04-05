import React from 'react'
import H4 from '../typography/H4'
import Paragraph from '../typography/Paragraph'

const SingleTeamCard = ({titleColor, paragraphColor, title, paragraph, image}) => {

  return (
    <div className="flex flex-col md:flex-row justify-center items-start md:w-1/2 mb-10">
      <div className="md:w-1/3 w-full h-48 relative rounded-lg overflow-hidden mb-4">
        <img className="h-full w-full object-cover absolute hero-pic"
          src={image} alt="" />
      </div>
      <div className="flex flex-col flex-1 md:ml-6">
        <H4 color={titleColor || ''}>
          {title}
        </H4>
        <Paragraph color={paragraphColor || ''}>
          <span dangerouslySetInnerHTML={{__html: paragraph}}/>
        </Paragraph>
      </div>
    </div>
  )
}

export default SingleTeamCard
