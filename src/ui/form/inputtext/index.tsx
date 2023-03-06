import React, { InputHTMLAttributes } from "react";
import formStyles from "./../form.module.scss";
import classNames from "classnames";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

interface Props<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  methods: UseFormReturn<T>;
  name: Path<T>;
}

export const InputText = <T extends FieldValues>(
  props: Props<T>,
): JSX.Element => {
  const {
    register,
    formState: { errors },
    watch,
  } = props.methods;

  const isNotEmpty = watch([props.name])[0];

  const error = errors[props.name]?.message ?? "";

  const itemClass = classNames(formStyles.item, error && formStyles.error);
  const inputClass = classNames(formStyles.text, props.className);
  const placeholderClass = classNames(
    formStyles.placeholder,
    isNotEmpty && formStyles["placeholder--fixed"],
  );

  return (
    <div className={itemClass}>
      {error && <div className={formStyles["error-text"]}>{String(error)}</div>}
      <div className={placeholderClass}>
        {props.placeholder && `${props.placeholder}`}
      </div>
      <input {...props} {...register(props.name)} className={inputClass} />
    </div>
  );
};
