import React from 'react'
import styles from './styles.module.scss'
const CommonButton = ({ onClick, name, button_styles, button_container_class,type }) => {
  return (
    <div className={button_container_class} >
      <button
        onClick={onClick}
        type={type}
        className={`${button_styles} ${styles.common_styles}`}>
        {name}
      </button>
    </div>
  )
}

export default CommonButton