import { FormState } from "react-hook-form";
import { $loaderStore } from "@store/loader";

export const useIsDisabledHook = <
  T extends Record<string, any> = Record<string, any>,
>(
  formState: FormState<T>,
): boolean => {
  const isValid: boolean = formState.isValid;
  const isDirty: boolean = formState.isDirty;
  return $loaderStore.loader || !isDirty || !isValid;
};
