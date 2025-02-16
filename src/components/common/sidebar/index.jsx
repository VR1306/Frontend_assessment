import React from 'react'
import styles from './styles.module.scss';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CommonButton from '../button';
import { CONSTANTS } from '../../../constants/constants';
import './styles.scss';
const Sidebar = ({ show, handleClose, }) => {
  const { trial_label,login_label } = CONSTANTS;

  return (
    <Offcanvas show={show} onHide={handleClose} placement='end'>
      <Offcanvas.Header closeButton>
      </Offcanvas.Header>
      <hr />
      <Offcanvas.Body>
        <div className={styles.container}>
          <CommonButton
            name={trial_label}
            button_styles={styles.header_button}
            button_container_class={styles.header_button_container}
          />

          <CommonButton
            name={login_label}
            button_styles={styles.login_button}
            button_container_class={styles.header_button_container}
          />
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default Sidebar