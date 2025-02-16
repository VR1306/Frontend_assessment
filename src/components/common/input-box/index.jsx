import React from 'react';
import styles from './styles.module.scss';
import { useFormContext } from "react-hook-form";
import FormErrormMessage from '../error-message';
import { accessNestedFields } from '../../../helpers/utils';

const InputBox = ({
  placeholder = "Enter",
  name,
  onKeyDown = () => { },
  type = "text",
  disabled = false,
  customStyle={}
}) => {
  const {custom_container,custom_Input_container,custom_Input}=customStyle
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className={`${styles.common_container} ${custom_container}`}>
      <section className={`${styles.input_container} ${custom_Input_container}`}>
      <input
        placeholder={placeholder}
        className={`${styles.input} ${custom_Input}`}
        onKeyDown={onKeyDown}
        type={type}
        disabled={disabled}
        {...register(name)} // Ensure it's correctly spread
      />
      </section>
      <FormErrormMessage error={accessNestedFields(errors, name)} messages={accessNestedFields(errors, name)?.message}/>
    </div>
  );
};

export default InputBox;
