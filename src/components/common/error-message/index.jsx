import styles from "./styles.module.scss";

const FormErrorMessage = ({ error, messages }) => {
  if (!error) return <span className={styles.formError}></span>;
  return (
    <span className={styles.formError}>
      {messages ? messages : "Error in field"}
    </span>
  );
};

export default FormErrorMessage;
