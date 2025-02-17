import React, { useContext } from 'react'
import styles from './styles.module.scss'
import arrow from '../../../assets/icons/arrow.svg';
import arrow_white from '../../../assets/icons/arrow-white.svg'

import AssessmentContext from '../../../context'
import RenderComponent from '../../modules/specifics/component'
const Accordion = ({ tabsData }) => {
  const {
    setCurrentSpecificTab,
    currentSpecificTab,
    accordion_data,
    setAccordionData,
    currentDataAccordion,
    setCurrentDataAccordion
  } = useContext(AssessmentContext);
  const handleAccordion = (index) => {
    // Determine if the clicked item is already open
    const isCurrentlyOpen = accordion_data[index].isOpen;

    // Create a new state where only the clicked item is toggled
    const updatedData = accordion_data.map((item, i) => ({
      ...item,
      isOpen: i === index ? !isCurrentlyOpen : false, // Close others, toggle current
    }));

    setAccordionData(updatedData);
    setCurrentSpecificTab(isCurrentlyOpen ? currentSpecificTab : updatedData[index].label);
    setCurrentDataAccordion(isCurrentlyOpen ? null : updatedData[index].label)
  };

  return (
    <div className={styles.container}>
      {accordion_data?.map((item, index) => {
        return (
          <>
            <div className={`${styles.label_icon_container} ${item?.label === currentDataAccordion && styles.active_tab}`} onClick={() => handleAccordion(index)} key={index}>
              <label className={styles.title}>{item.label}</label>
              <section className={styles.arrow_container}>
                <img alt='arrow' loading='lazy' className={styles.arrow_image} src={item?.label === currentDataAccordion ? arrow_white : arrow} />
              </section>
            </div>

            <div className={`${styles.drawer} ${item.isOpen ? styles.open : ""}`}>
              <RenderComponent tabsData={tabsData} currentTab={currentSpecificTab} />
            </div>
          </>
        )

      })}


    </div>
  )
}

export default Accordion