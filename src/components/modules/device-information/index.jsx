import React from 'react'
import styles from './styles.module.scss'
import { CONSTANTS } from '../../../constants/constants';
import device from '../../../assets/images/device.png'
import CommonButton from '../../common/button/index';
import InputBox from '../../common/input-box';
import { FormProvider, useForm } from 'react-hook-form';
import { emailValidation } from '../../../helpers/validations';
import { yupResolver } from '@hookform/resolvers/yup';
import Gartner from '../../../assets/images/gartner.png';
import IDC from '../../../assets/images/idc.png';
import Forrester from '../../../assets/images/forrester.png';

const DeviceInformation = () => {
  const formMethods = useForm({
    defaultValues: {
      email: null,
    },
    mode: 'all',
    resolver: yupResolver(emailValidation),
  });

  const { handleSubmit } = formMethods;

  const onsubmit = (data) => {
    console.log(data);
  }

  const renderBrandImage = (name) => {
    switch (name) {
      case 'gartner': return <img alt='Gartner' src={Gartner} />;
      case 'idc': return <img alt='IDC' src={IDC} />;
      case 'forrester': return <img alt='Forrester' src={Forrester} />;
      default: return null;
    }
  }

  const renderPage=(url)=>{
    window.open(url,'_blank');

  }

  return (
    <React.Fragment>
      <div className={styles.container}>
        <section className={styles.first_section_container}>
          <p>
            {CONSTANTS.device_information}
          </p>
          <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(onsubmit)} className={styles.input_button_container}>
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
        </section>

        <img alt='Keep Device' src={device} className={styles.device_image} />
      </div>

      <div className={styles.secondary_container}>
        {CONSTANTS.device_static_data?.map((item, index) => (
          <div key={index} className={styles.overall_container} onClick={()=>renderPage(item?.link)}>
            <section className={styles.image_description_container}>
              <div className={styles.logo_container}>{renderBrandImage(item?.name)}</div>
              <p className={styles.description}>{item?.description}</p>
            </section>

            {index !== CONSTANTS.device_static_data.length - 1 && (
              <div className={styles.border_right} />
            )}
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default DeviceInformation