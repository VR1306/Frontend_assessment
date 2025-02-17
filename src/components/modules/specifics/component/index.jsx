import React, { useEffect, useMemo, useRef } from 'react';
import styles from './styles.module.scss';
import Green_tick from '../../../../assets/icons/green_tick.svg';
import Single from '../../../../assets/images/single.jpeg';
import Multi from '../../../../assets/images/multi.png';
import Web from '../../../../assets/images/web.png';
import Digital from '../../../../assets/images/digital.png';
import ASAM from '../../../../assets/images/asam.png';
import { CONSTANTS } from '../../../../constants/constants';
const RenderComponent = ({key,  currentTab, tabsData }) => {
  const currentTabIndex = tabsData.indexOf(key);
  const prevTabIndexRef = useRef(currentTabIndex);
  const {single_app_data,multi_app_data,web_app_data,digital_app_data,ASAM_data} = CONSTANTS;
  
  // Determine animation direction
  const animationDirection = prevTabIndexRef.current < currentTabIndex ? 'slide-left' : 'slide-right';

  useEffect(() => {
    prevTabIndexRef.current = currentTabIndex;
  }, [currentTabIndex]);

    //Datas are rendered based on the current tab selected
    const renderTitle =useMemo(()=>{
      switch(currentTab){
              case'Single App Kiosk':return single_app_data.title
              case'Multi-App Kiosk':return multi_app_data.title
              case'Web Based Kiosk':return web_app_data.title
              case'Digital Signages':return digital_app_data.title
              case'ASAM Kisok':return ASAM_data.title
              default:return null
            }
    },[currentTab]);
  
    const renderDescription =useMemo(()=>{
      switch(currentTab){
              case'Single App Kiosk':return single_app_data.description
              case'Multi-App Kiosk':return multi_app_data.description
              case'Web Based Kiosk':return web_app_data.description
              case'Digital Signages':return digital_app_data.description
              case'ASAM Kisok':return ASAM_data.description
              default:return null
            }
    },[currentTab]);
  
    const renderImage =useMemo(()=>{
      switch(currentTab){
              case'Single App Kiosk':return Single
              case'Multi-App Kiosk':return Multi
              case'Web Based Kiosk':return Web
              case'Digital Signages':return Digital
              case'ASAM Kisok':return ASAM
              default:return null
            }
    },[currentTab]);

  return (
    <div className={`${styles.container} ${styles[animationDirection]}`}>
      <section className={styles.first_container}>
        <label className={styles.title_container}>{renderTitle}</label>

        <div className={styles.description_container}>
          <ul>
            {renderDescription.map((item, index) => (
              <li key={index}>
                <section className={styles.green_tick_container}>
                  <img src={Green_tick} alt="Green tick" className={styles.green_tick} />
                 <span> <p>{item}</p></span>
                </section>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={styles.second_container}>
        <img alt={currentTab} src={renderImage} loading="lazy" className={styles.image_styles} />
      </section>
    </div>
  );
};

export default RenderComponent;
