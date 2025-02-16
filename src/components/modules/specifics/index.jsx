import React, { useContext, useEffect, useMemo } from 'react'
import styles from './styles.module.scss'
import { CONSTANTS } from '../../../constants/constants'
import Tabs from '../../common/tabs'
import AssessmentContext from '../../../context'
import RenderComponent from './component'
import Single from '../../../assets/images/single.jpeg';
import Multi from '../../../assets/images/multi.png';
import Web from '../../../assets/images/web.png';
import Digital from '../../../assets/images/digital.png';
import ASAM from '../../../assets/images/asam.png';
import Accordion from '../../common/accordion'



const Specifics = () => {
  const { specifics_header, single_app_kisok, multi_app_kisok, web_based_kisok, digital_signages, asam_kisok ,single_app_data,multi_app_data,web_app_data,digital_app_data,ASAM_data,accordion_data} = CONSTANTS
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


  //Datas are rendered based on the current tab selected
  const renderTitle =useMemo(()=>{
    switch(currentSpecificTab){
            case'Single App Kiosk':return single_app_data.title
            case'Multi-App Kiosk':return multi_app_data.title
            case'Web Based Kiosk':return web_app_data.title
            case'Digital Signages':return digital_app_data.title
            case'ASAM Kisok':return ASAM_data.title
            default:return null
          }
  },[currentSpecificTab]);

  const renderDescription =useMemo(()=>{
    switch(currentSpecificTab){
            case'Single App Kiosk':return single_app_data.description
            case'Multi-App Kiosk':return multi_app_data.description
            case'Web Based Kiosk':return web_app_data.description
            case'Digital Signages':return digital_app_data.description
            case'ASAM Kisok':return ASAM_data.description
            default:return null
          }
  },[currentSpecificTab]);

  const renderImage =useMemo(()=>{
    switch(currentSpecificTab){
            case'Single App Kiosk':return Single
            case'Multi-App Kiosk':return Multi
            case'Web Based Kiosk':return Web
            case'Digital Signages':return Digital
            case'ASAM Kisok':return ASAM
            default:return null
          }
  },[currentSpecificTab]);

  useEffect(() => {
    const checkResponsive = () => {
      setIsAccordionNeeded(window.innerWidth <= 640); // Adjust breakpoint as needed
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
        <Accordion data={accordion_data}  title={renderTitle} description={renderDescription} Image={renderImage} currentTab={currentSpecificTab} tabsData={tabsData}/>
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
      <RenderComponent key={currentSpecificTab} title={renderTitle} description={renderDescription} Image={renderImage} currentTab={currentSpecificTab} tabsData={tabsData}/>
      </React.Fragment>}
    </div>
  )
}

export default Specifics