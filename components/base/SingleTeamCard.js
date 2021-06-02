import React from 'react'
import H4 from '../typography/H4'
import Paragraph from '../typography/Paragraph'

const SingleTeamCard = ({titleColor, paragraphColor, title, paragraph, image}) => {

  return (
    <div className="flex flex-col md:flex-row justify-center items-start md:w-1/2 mb-10">
      <div className="md:w-44 lg:w-52 w-full h-80 md:h-64 relative rounded-lg overflow-hidden mb-4">
        <img className="h-full w-full object-cover absolute hero-pic object-center"
          src={image} alt="" />
      </div>
      <div className="flex flex-col flex-1 md:ml-6 pr-4">
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
