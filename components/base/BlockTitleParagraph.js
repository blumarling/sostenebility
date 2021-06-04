import classNames from 'classnames'
import React, { useEffect } from 'react'
import styled, { css } from "styled-components"
import H2 from '../typography/H2'
import Paragraph from '../typography/Paragraph'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

const BlockTitleParagraph = ({title, titleColor, paragraph, paragraphColor, boxed, paddingTop, paddingBottom}) => {
  
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.4 });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const blockClasses = classNames(
    'flex w-full flex-col md:flex-row py-12 md:py-12 items-start justify-start',
    {
      'max-w-screen-lg': !!boxed,
      'pt-0': paddingTop === "0",
      'pb-0': paddingBottom === "0"
    }
  )

  const innerBlockClassesLeft = classNames(
    'md:flex-1 lg:pr-8 xl:pr-8 md:pr-4 px-8 md:py-16 lg:py-16 xl:py-20 p-8 pt-2',
    {
      'pt-6 xl:pt-6 md:pt-6 sm:pt-6': paddingTop === "0",
      'pb-6 xl:pb-6 md:pb-6 sm:pb-6': paddingBottom === "0"
    }
  )
  const innerBlockClassesRight = classNames(
    'md:flex-1 lg:pl-8 xl:pl-8 md:pl-4 px-8 md:py-16 lg:py-16 xl:py-20 p-8 pt-2',
    {
      'pt-6 xl:pt-6 md:pt-6 sm:pt-6': paddingTop === "0",
      'pb-2 xl:pb-6 md:pb-6 sm:pb-6': paddingBottom === "0"
    }
  )

  return (
    <BlockTitleParagraphContainer>
      <motion.div
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={{
          hidden: { y: 35, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.7,
              delay: 0.6
            }
          }
        }}        
        className={blockClasses}
      >
        <div className={innerBlockClassesLeft}>
          <H2 color={titleColor}>
            <span dangerouslySetInnerHTML={{__html: title}}/>
          </H2>
        </div>
        <div className={innerBlockClassesRight}>
          <Paragraph color={paragraphColor}>
            <span dangerouslySetInnerHTML={{__html: paragraph}}/>
          </Paragraph>
        </div>
      </motion.div>
    </BlockTitleParagraphContainer>
  )

}

const BlockTitleParagraphContainer = styled.div.attrs({
  className:' w-full flex items-center justify-center md:mt-0 bg-white'
})`
  
`

export default BlockTitleParagraph
