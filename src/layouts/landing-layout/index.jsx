import React, { useContext } from 'react'
import styles from './styles.module.scss'
import Header from '../../components/common/header'
import AssessmentContext from '../../context';
const LandingLayout = ({children}) => {
  const {isScrolled} = useContext(AssessmentContext);
  return (
    <>
    <div className={styles.layout_container}>
    <section className={styles.fixed_container}>
      <Header/>
     {isScrolled&&<div className={styles.border_bottom}/>}
    </section>
  </div>
  <section className={styles.children_container}>
      {children}
    </section>
  </>
  )
}

export default LandingLayout