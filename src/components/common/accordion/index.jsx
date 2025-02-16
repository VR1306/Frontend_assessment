import React, { useContext, useState } from 'react'
import styles from './styles.module.scss'
import arrow from '../../../assets/icons/arrow.svg';
import arrow_white from '../../../assets/icons/arrow-white.svg'

import AssessmentContext from '../../../context'
import RenderComponent from '../../modules/specifics/component'
const Accordion = ({ data, title, description, Image, tabsData }) => {
  const {
    setCurrentSpecificTab,
    currentSpecificTab, } = useContext(AssessmentContext)
  const [isOpenAccordion, setIsAccordionOpen] = useState(false)
  const handleAccordion = (tab) => {
    setCurrentSpecificTab(null)
    setIsAccordionOpen(!isOpenAccordion);
    setCurrentSpecificTab(tab)
  }

  return (
    <div className={styles.container}>
      {data?.map((item, index) => {
        return (
          <>
            <div className={`${styles.label_icon_container} ${item===currentSpecificTab&&styles.active_tab}`} onClick={() => handleAccordion(item)} key={index}>
              <label className={styles.title}>{item}</label>
              <section className={styles.arrow_container}>
                <img alt='arrow' loading='lazy' className={styles.arrow_image} src={item===currentSpecificTab?arrow_white:arrow} />
              </section>
            </div>
            {isOpenAccordion && item === currentSpecificTab && <RenderComponent
              tabsData={tabsData}
              key={currentSpecificTab} title={title} description={description} Image={Image} currentTab={currentSpecificTab}
            />}
          </>
        )
      })
      }
      {console.log(isOpenAccordion, "isOpenAccordion")}

    </div>
  )
}

export default Accordion