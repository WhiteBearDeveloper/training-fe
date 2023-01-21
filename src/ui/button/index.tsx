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
  ...props
}): JSX.Element => {
  const blockClassName = classNames(styles.block, styles[`block${theme}`]);
  return (
    <div className={blockClassName}>
      {text}
      <button className={styles.button}></button>
    </div>
  );
};