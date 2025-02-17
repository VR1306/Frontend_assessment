import React, { useState, useEffect, useContext } from 'react';
import styles from './styles.module.scss';
import AssessmentContext from '../../../context';
import Person1 from '../../../assets/images/image.png';
import Person2 from '../../../assets/images/image_13.png';
import Person3 from '../../../assets/images/image_14.png';
import arrow from '../../../assets/icons/arrow.svg';

const Slider = () => {
  const { chooseData } = useContext(AssessmentContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliderMobile, setisSliderMobile] = useState(window.innerWidth <= 1023);

  const images = [Person1, Person2, Person3];

  // Auto-slide effect (Stops at index 2)
  useEffect(() => {
    if (currentIndex >= 2) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : prevIndex));
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Handle resizing for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setisSliderMobile(window.innerWidth <= 1023);
    };

    // Set correct state on mount
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`${styles.slider_container} ${isSliderMobile ? styles.mobile : ''}`}>
      {!isSliderMobile && (
        <button 
          className={styles.button} 
          onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          disabled={currentIndex === 0}
        >
          <img alt='prev' src={arrow} loading='lazy' className={styles.prev} />
        </button>
      )}

      <div className={styles.data_container} key={currentIndex}>
        <img
          alt={chooseData[currentIndex]?.name}
          className={styles.person}
          src={images[currentIndex]} 
        />
        <div className={styles.content_container}>
          <p>{chooseData[currentIndex]?.title}</p>
          <hr />
          <div className={styles.author_container}>
            <label>{chooseData[currentIndex]?.name}</label>
            {chooseData[currentIndex]?.post && <label>{chooseData[currentIndex].post}</label>}
            {chooseData[currentIndex]?.company && <label>{chooseData[currentIndex].company}</label>}
          </div>
        </div>
      </div>

      {!isSliderMobile && (
        <button 
          className={styles.button} 
          onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, 2))}
          disabled={currentIndex === 2}
        >
          <img alt='next' src={arrow} loading='lazy' className={styles.next} />
        </button>
      )}

      {isSliderMobile && (
        <div className={styles.button_container}>
          <button 
            className={styles.button} 
            onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
            disabled={currentIndex === 0}
          >
            <img alt='prev' src={arrow} loading='lazy' className={styles.prev} />
          </button>

          <button 
            className={styles.button} 
            onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, 2))}
            disabled={currentIndex === 2}
          >
            <img alt='next' src={arrow} loading='lazy' className={styles.next} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;
