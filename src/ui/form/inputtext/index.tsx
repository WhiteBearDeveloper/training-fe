import React, { InputHTMLAttributes } from "react";
import formStyles from "./../form.module.scss";
import classNames from "classnames";
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface Props<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<T>;
  error?: FieldError;
  name: Path<T>;
}

export const InputText = <T extends FieldValues>(
  props: Props<T>,
): JSX.Element => {
  const itemClass = classNames(
    formStyles.item,
    props.error && formStyles.error,
  );

  const inputClass = classNames(formStyles.text, props.className);
  const placeholderClass = classNames(
    formStyles.placeholder,
    formStyles["placeholder--fixed"],
  );

  return (
    <div className={itemClass}>
      {props.error && (
        <div className={formStyles["error-text"]}>{props.error.message}</div>
      )}
      <div className={placeholderClass}>
        {props.placeholder && `${props.placeholder}`}
      </div>
      <input
        {...props}
        {...(props.register && props.name && { ...props.register(props.name) })}
        className={inputClass}
      />
    </div>
  );
};
