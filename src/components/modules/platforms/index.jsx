import React from 'react'
import styles from './styles.module.scss'
import { CONSTANTS } from '../../../constants/constants';
import android from '../../../assets/icons/android.svg';
import androidtv from '../../../assets/icons/androidtv.svg';
import appletv from '../../../assets/icons/appletv.svg';
import fire from '../../../assets/icons/fire.png';
import ios from '../../../assets/icons/ios.svg';
import windows from '../../../assets/icons/windows.svg';


const Platforms = () => {
  const {platforms_support,platform_icons} = CONSTANTS;

  const renderImage=(image)=>{
    switch (image) {
      case "android": return android;
      case 'androidtv': return androidtv;
      case 'appletv': return appletv;
      case 'fire': return fire;
      case 'ios': return ios;
      case 'windows': return windows;
      default: return null;
    }
  }
  return (
    <div className={styles.container}>
      <label className={styles.platforms_title}>{platforms_support}</label>

      <div className={styles.wrapper}>
          { 
            platform_icons?.map((item,index)=>{
              return <div key={index} className={styles.image_container}>
                 <img alt={item} src={renderImage(item)} loading='lazy' className={styles.image}/>
              </div>
            })
          }
      </div>
    </div>
  )
}

export default Platforms