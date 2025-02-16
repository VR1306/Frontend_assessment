import React, { useContext, useEffect } from 'react'
import styles from './styles.module.scss'
import defaultLogo from '../../../assets/icons/logo.svg';
import hoverLogo from '../../../assets/icons/logo-hover.svg';
import CommonButton from '../button'
import { CONSTANTS } from '../../../constants/constants'
import AssessmentContext from '../../../context'
import burger from '../../../assets/icons/hamburger.svg';
import burgerWhite from '../../../assets/icons/hamburger-white.svg';
import Sidebar from '../sidebar';

const Header = () => {
  const {trial_label}=CONSTANTS;
  const {
    headerIcon,
    setHeaderIcon,
    isScrolled,
    setIsScrolled,
    isResponsive,
    setIsResponsive,
    defaultResponsiveWidth,
    hamburgerMenu,
    setHamburgerMenu,
    isSidebar,
    setIsSidebar,
    scrollThreshold,
  } = useContext(AssessmentContext);

//Setting the Header Icon to default on the first render  
useEffect(
  function defaultIconRender(){
  setHeaderIcon(defaultLogo)
  setHamburgerMenu(burgerWhite)
},[]);

//Adding the scroll event listener to the window
useEffect(() => {
  // const handleScroll = () => {
  //     if (window.scrollY > window.innerHeight * 0.1) { // Adjust scroll distance as needed
  //         setIsScrolled(true);
  //         setHeaderIcon(hoverLogo); // Change logo on scroll
  //         setHamburgerMenu(burger) //Change the hamburger menu on scroll
  //     } 
  //     else {
  //         setIsScrolled(false);
  //         setHeaderIcon(defaultLogo); // Revert logo when scrolling back up
  //         setHamburgerMenu(burgerWhite) //Change the hamburger menu on scroll
  //     }
  // };
  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
        setHeaderIcon(hoverLogo); // Change logo on scroll
        setHamburgerMenu(burger); // Change hamburger menu on scroll
    } else {
        setIsScrolled(false);
        setHeaderIcon(defaultLogo); // Revert logo when scrolling back up
        setHamburgerMenu(burgerWhite); // Change hamburger menu on scroll
    }
};

  //Adding the scroll event listener to the window
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // Handle Responsive Design
  useEffect(() => {
    const checkResponsive = () => {
      setIsResponsive(window.innerWidth >= defaultResponsiveWidth); // Adjust breakpoint as needed
    };

    checkResponsive(); // Run on mount
    // Add event listener for window resize
    window.addEventListener("resize", checkResponsive);
    
    return () => window.removeEventListener("resize", checkResponsive);
  }, []);

  //Opening the Sidebar
  const openSideBar = () => {
    setIsSidebar(true);

  } 
  //Closing the Sidebar
  const handleClose = () => {
    setIsSidebar(false);
  } 

  //Rendering the Hover Icon
  const renderHoverIcon = () => {
    if(window.scrollY > scrollThreshold){
      setHeaderIcon(defaultLogo);
      setHamburgerMenu(burgerWhite);
    }else{
      setHeaderIcon(hoverLogo);
      setHamburgerMenu(burger);
    }

  };

  //Rendering the default Icon
  const renderDefaultIcon = () => {
    if(window.scrollY > scrollThreshold){
      setHeaderIcon(hoverLogo);
      setHamburgerMenu(burger);
    }else{
      setHeaderIcon(defaultLogo);
      setHamburgerMenu(burgerWhite);
    }
  };
  return (
   <React.Fragment> 
    <div 
    className={`${styles.header_container} ${isScrolled && styles.scrolled_container}`}
    onMouseEnter={!isScrolled?renderHoverIcon:null}
    onMouseLeave={!isScrolled?renderDefaultIcon:null}
    >
        <section className={styles.logo_container}>
            <img alt='logo' className={styles.logo} loading='lazy' src={headerIcon}/>
        </section>
        {!isResponsive?
        <div className={styles.header_button_container} onClick={openSideBar}>
        <img alt='menu' className={styles.burger_logo} loading='lazy' src={hamburgerMenu}/> 
        </div>  : 
         <CommonButton 
         name={trial_label} 
         button_styles={styles.header_button}
         button_container_class={styles.header_button_container}
        />}
    </div>
    <Sidebar show={isSidebar} handleClose={handleClose}/>

    </React.Fragment>
  )
}

export default Header