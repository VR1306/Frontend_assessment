import React from 'react'
import styles from './styles.module.scss'
import { CONSTANTS } from '../../../constants/constants'
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { emailValidation } from '../../../helpers/validations';
import InputBox from '../input-box';
import CommonButton from '../button';
import arrow from '../../../assets/icons/arrow-red.svg';
const Footer = () => {
  const { footer_content, no_credit_card, request_demo,terms_condition,copyrights } = CONSTANTS;
  const formMethods = useForm({
    defaultValues: {
      email: ''
    },
    mode: 'all',
    resolver: yupResolver(emailValidation)
  })
  const { handleSubmit } = formMethods
  const onSubmit = (data) => {
    console.log(data, "data")
  }
  return (
    <React.Fragment>
      <div className={styles.container}>
        <h3>{footer_content}</h3>
        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.input_button_container}>
            <InputBox
              name={'email'}
              placeholder={CONSTANTS.work_email}
              type='text'
              customStyle={{
                custom_container: styles.custom_container,
                custom_Input_container: styles.custom_Input_container,
                custom_Input: styles.custom_Input
              }}
            />
            <CommonButton
              name={CONSTANTS.start_label}
              button_styles={styles.start_button}
              button_container_class={styles.start_button_container}
              type='submit'
            />
          </form>
        </FormProvider>
        <p className={styles.no_credit_card}>
          {no_credit_card}
          <label className={styles.request_demo}>{request_demo}   <img alt='arrow' loading='lazy' src={arrow} className={styles.arrow} /></label>
        </p>

      </div>

      <div className={styles.terms_container}>
          <label>
         { terms_condition}
          </label>
          <label>
          {copyrights}
          </label>
      </div>  
    </React.Fragment>
  )
}

export default Footer