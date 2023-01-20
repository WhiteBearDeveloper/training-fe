import React, { InputHTMLAttributes } from "react";
import formStyles from "./../form.module.scss";
import classNames from "classnames";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Component = (
  props: Props,
  ref: React.MutableRefObject<HTMLInputElement>,
): JSX.Element => {
  const itemClass = classNames(formStyles.item, formStyles.error);
  const inputClass = classNames(formStyles.text, props.className);

  return (
    <div className={itemClass}>
      <div className={formStyles.placeholder}>
        {props.placeholder !== null &&
          props.placeholder !== undefined &&
          `${props.placeholder}`}
      </div>
      <input {...props} className={inputClass} ref={ref} />
    </div>
  );
};
// @ts-expect-error
export const InputText = React.forwardRef<HTMLInputElement, Props>(Component);
