import React from 'react'
import styles from './styles.module.scss'
import { CONSTANTS } from '../../../constants/constants'
import SecondaryAccordion from '../../common/secondary-accordion'
const Additional = () => {
  return (
    <div className={styles.container}>
        <label className={styles.header_title}>
          {CONSTANTS.additional_title}
        </label>

        <SecondaryAccordion/>
    </div>
  )
}

export default Additional