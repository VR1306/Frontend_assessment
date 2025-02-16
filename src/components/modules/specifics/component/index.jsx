import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Green_tick from '../../../../assets/icons/green_tick.svg';

const RenderComponent = ({ title, description, Image, currentTab, tabsData }) => {
  const currentTabIndex = tabsData.indexOf(currentTab);
  const prevTabIndexRef = useRef(currentTabIndex);

  // Determine animation direction
  const animationDirection = prevTabIndexRef.current < currentTabIndex ? 'slide-left' : 'slide-right';

  useEffect(() => {
    prevTabIndexRef.current = currentTabIndex;
  }, [currentTabIndex]);

  return (
    <div className={`${styles.container} ${styles[animationDirection]}`}>
      <section className={styles.first_container}>
        <label className={styles.title_container}>{title}</label>

        <div className={styles.description_container}>
          <ul>
            {description.map((item, index) => (
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
        <img alt={currentTab} src={Image} loading="lazy" className={styles.image_styles} />
      </section>
    </div>
  );
};

export default RenderComponent;
