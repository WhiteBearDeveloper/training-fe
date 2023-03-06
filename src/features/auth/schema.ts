import * as yup from "yup";
import YupPassword from "yup-password";
import { $FORM_PHRASES } from "@utils/constants/phrases";
import { AuthProps } from "@whitebeardeveloper/training-logic/logic/types/auth.types";
import { AuthTypes } from "@api/services/auth/types";

YupPassword(yup);

const registerPassword = yup
  .string()
  .min(
    12,
    `${$FORM_PHRASES.password.min_characters_pre} 12 ${$FORM_PHRASES.password.min_characters_post}`,
  )
  .minLowercase(
    4,
    `${$FORM_PHRASES.password.should_include_min} 4 ${$FORM_PHRASES.password.lowercase}`,
  )
  .minUppercase(
    2,
    `${$FORM_PHRASES.password.should_include_min} 2 ${$FORM_PHRASES.password.uppercase}`,
  )
  .minNumbers(
    2,
    `${$FORM_PHRASES.password.should_include_min} 2 ${$FORM_PHRASES.password.digits}`,
  )
  .minSymbols(
    2,
    `${$FORM_PHRASES.password.should_include_min} 2 ${$FORM_PHRASES.password.symbols}`,
  )
  .required($FORM_PHRASES.common.required);

const loginPassword = yup.string().required($FORM_PHRASES.common.required);

export const getSchema = (type: AuthTypes): yup.ObjectSchema<AuthProps> =>
  yup.object().shape({
    email: yup
      .string()
      .email($FORM_PHRASES.email.format)
      .required($FORM_PHRASES.common.required),
    password: type === "registration" ? registerPassword : loginPassword,
  });
