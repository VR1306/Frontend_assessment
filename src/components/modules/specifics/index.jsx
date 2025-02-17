import React, { useContext, useEffect, useMemo } from 'react'
import styles from './styles.module.scss'
import { CONSTANTS } from '../../../constants/constants'
import Tabs from '../../common/tabs'
import AssessmentContext from '../../../context'
import RenderComponent from './component'
import Accordion from '../../common/accordion'



const Specifics = () => {
  const { specifics_header, single_app_kisok, multi_app_kisok, web_based_kisok, digital_signages, asam_kisok } = CONSTANTS
  const { currentSpecificTab, setCurrentSpecificTab,isAccordionNeeded,setIsAccordionNeeded } = useContext(AssessmentContext);
  
  //Tabs data
  const tabsData = useMemo(() => [
    {
      label: single_app_kisok,
      handleClick: () => setCurrentSpecificTab(single_app_kisok),
      tab: single_app_kisok,
      show: true,
    },
    {
      label: multi_app_kisok,
      handleClick: () => setCurrentSpecificTab(multi_app_kisok),
      tab: multi_app_kisok,
      show: true,
    },
    {
      label: web_based_kisok,
      handleClick: () => setCurrentSpecificTab(web_based_kisok),
      tab: web_based_kisok,
      show: true,
    },
    {
      label: digital_signages,
      handleClick: () => setCurrentSpecificTab(digital_signages),
      tab: digital_signages,
      show: true,
    },
    {
      label: asam_kisok,
      handleClick: () => setCurrentSpecificTab(asam_kisok),
      tab: asam_kisok,
      show: true,
    },
  ], [setCurrentSpecificTab]);




  useEffect(() => {
    const checkResponsive = () => {
      setIsAccordionNeeded(window.innerWidth < 640); // Adjust breakpoint as needed
    };

    checkResponsive(); // Run on mount
    // Add event listener for window resize
    window.addEventListener("resize", checkResponsive);
    
    return () => window.removeEventListener("resize", checkResponsive);
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.specifics_header}>
        {specifics_header}
      </p>
      
      {isAccordionNeeded?
        <React.Fragment>
        <Accordion tabsData={tabsData}/>
        </React.Fragment>
      :<React.Fragment>
      <Tabs 
      tabs={tabsData} 
      currentTab={currentSpecificTab} 
      customStyle={styles.tab_container}
      customTabWrapper={styles.tab_customTabWrapper}
      tab_button_styles={styles.tab_button_styles}
      tab_button_container={styles.tab_button_container}
      />
      <RenderComponent key={currentSpecificTab} currentTab={currentSpecificTab} tabsData={tabsData}/>
      </React.Fragment>}
    </div>
  )
}

export default Specifics