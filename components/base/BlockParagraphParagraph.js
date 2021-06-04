import classNames from 'classnames'
import React, { useEffect } from 'react'
import styled, { css } from "styled-components"
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

const BlockParagraphParagraph = ({title, titleColor, paragraph_01, paragraph_02, paragraphColor,
  boxed, paddingTop, paddingBottom}) => {

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const blockClasses = classNames(
    'flex w-full flex-col md:flex-row items-center justify-center py-24',
    {
      'max-w-screen-lg': !!boxed,
      'pt-0': paddingTop === "0",
      'pb-0': paddingBottom === "0"
    }
  )
  const innerBlockClassesLeft = classNames(
    'md:flex-1 lg:pr-8 xl:pr-8 md:pr-4 px-8 md:py-16 lg:py-16 xl:py-20 p-8 pt-2 flex',
    {
      'pt-2 xl:pt-6 md:pt-6 sm:pt-6': paddingTop === "0",
      'pb-2 xl:pb-6 md:pb-6 sm:pb-6': paddingBottom === "0"
    }
  )
  const innerBlockClassesRight = classNames(
    'md:flex-1 lg:pl-8 xl:pl-8 md:pl-4 px-8 md:py-16 lg:py-16 xl:py-20 p-8',
    {
      'pt-2 xl:pt-6 md:pt-6 sm:pt-6': paddingTop === "0",
      'pb-2 xl:pb-6 md:pb-6 sm:pb-6': paddingBottom === "0"
    }
  )
  return (
    <BlockParagraphParagraphContainer>
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
              delay: 0.5
            }
          }
        }}
        className={blockClasses}
      >
        <div className={innerBlockClassesLeft}>
          <ParagraphContainer
            className={paragraphColor}
            dangerouslySetInnerHTML={{__html: paragraph_01}}
          />
        </div>
        <div className={innerBlockClassesRight}>
          <ParagraphContainer
            className={paragraphColor}
            dangerouslySetInnerHTML={{__html: paragraph_02}}
          />
        </div>
      </motion.div>
    </BlockParagraphParagraphContainer>
  )

}

const BlockParagraphParagraphContainer = styled.div.attrs({
  className:' w-full flex items-center justify-center'
})`
  
`

const ParagraphContainer = styled.div.attrs({
  className: 'font-display text-sm leading-snug md:text-sm md:leading-relaxed'
})`
  z-index:2;
  white-space: break-spaces;
  padding: 0px;
  margin: 0px;
`

export default BlockParagraphParagraph
