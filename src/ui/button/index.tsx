import React, { ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";
import classNames from "classnames";

type Themes = "Main";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  theme?: Themes;
}

export const Button: React.FC<Props> = ({
  text,
  theme = "Main",
  className,
  ...props
}): JSX.Element => {
  console.log("className :>> ", className);
  const blockClassName = classNames(
    styles.block,
    styles[`block${theme}`],
    className,
  );
  return (
    <div className={blockClassName}>
      {text}
      <button className={styles.button} {...props}></button>
    </div>
  );
};
