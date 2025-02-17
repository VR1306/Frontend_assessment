import React, { useContext, useMemo, useState, useEffect } from 'react';
import styles from './styles.module.scss';
import AssessmentContext from '../../../context';
import AddOne from '../../../assets/images/addition1.jpeg';
import AddTwo from '../../../assets/images/addition2.jpeg';
import AddThree from '../../../assets/images/addition3.jpeg';
import AddFour from '../../../assets/images/addition4.jpeg';
import AddFive from '../../../assets/images/addition5.jpeg';
import { CONSTANTS } from '../../../constants/constants';
import arrow from '../../../assets/icons/arrow-red.svg';

const SecondaryAccordion = () => {
  const { currentAdditionalId, setCurrentAdditionalId, additionalData, setAdditionalData } = useContext(AssessmentContext);
  const { sign_up_url, try_for_free } = CONSTANTS;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderImage = useMemo(() => {
    switch (currentAdditionalId) {
      case 1: return AddOne;
      case 2: return AddTwo;
      case 3: return AddThree;
      case 4: return AddFour;
      case 5: return AddFive;
      default: return null;
    }
  }, [currentAdditionalId]);

  const handleAccordion = (index) => {
    setAdditionalData((prevData) =>
      prevData.map((item, i) => ({
        ...item,
        isOpen: i === index ? true : false, // Toggle current, close others
      }))
    );
    setCurrentAdditionalId(additionalData[index].id);
  };

  const routeToSignUp = () => {
    window.open(sign_up_url, '_blank');
  };

  return (
    <div className={styles.container}>
      {!isMobile && renderImage && (
        <img
          alt={additionalData[currentAdditionalId - 1]?.title}
          src={renderImage}
          className={styles.image}
        />
      )}
      <div className={styles.content_container}>
        {additionalData?.map((item, index) => (
          <div
            key={index}
            className={`${styles.overall_container} ${item.isOpen ? styles.open : ''}`}
            onClick={() => handleAccordion(index)}
          >
            {item.isOpen && isMobile && renderImage && (
              <div className={styles.image_container}>
                <img
                  alt={item.title}
                  src={renderImage}
                  className={styles.mobile_image}
                />
              </div>
            )}
            <label className={styles.title}>{item.title}</label>

            <div className={`${styles.description_wrapper} ${item.isOpen ? styles.show : ''}`}>
              <p className={styles.description}>
                {item.description}
                <div className={styles.free_label} onClick={routeToSignUp}>
                  {try_for_free}
                  <img alt='arrow' loading='lazy' src={arrow} />
                </div>
              </p>
            </div>

            {index !== additionalData?.length - 1 && <div className={styles.border_bottom} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondaryAccordion;
