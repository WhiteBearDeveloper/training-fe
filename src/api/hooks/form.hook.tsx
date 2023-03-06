import { yupResolver } from "@hookform/resolvers/yup";
import {
  DeepPartial,
  UseFormReturn,
  useForm as useReactHookForm,
} from "react-hook-form";
import { Schema } from "yup";

interface Props<T> {
  schema: Schema<T>;
  defaultValues?: DeepPartial<T>;
}

export const useForm = <T extends Record<string, any> = Record<string, any>>({
  schema,
  defaultValues,
}: Props<T>): UseFormReturn<T, any> => {
  const methods = useReactHookForm<T>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
    defaultValues,
  });

  return methods;
};
