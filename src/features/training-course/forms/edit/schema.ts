import * as yup from "yup";
import { $FORM_PHRASES } from "@utils/constants/phrases";

export const schema = yup.object().shape({
  name: yup.string().required($FORM_PHRASES.common.required),
});
