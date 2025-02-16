import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup);

export const emailValidation =yup.object().shape({ email:yup.string().email('Invalid email')});