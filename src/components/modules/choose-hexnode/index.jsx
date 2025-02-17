import React from 'react'
import styles from './styles.module.scss'
import { CONSTANTS } from '../../../constants/constants'
import Slider from '../../common/slider'
const ChooseHexnode = () => {
  const {why_we_should} = CONSTANTS
  return (
    <div className={styles.container}>
      <h1>
        {why_we_should}
      </h1>
        <Slider />
    </div>
  )
}

export default ChooseHexnode