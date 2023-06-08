import React, { ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";
import classNames from "classnames";

type Themes = "main" | "indianred";
type Styles = "fill" | "outline";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  theme?: Themes;
  buttonStyle?: Styles;
}

export const Button: React.FC<Props> = ({
  text,
  theme = "main",
  buttonStyle = "fill",
  className,
  ...props
}): JSX.Element => {
  const blockClassName = classNames(
    styles.block,
    props.disabled ? styles["block-disabled"] : styles[`block-${theme}`],
    buttonStyle === "fill" ? styles.fill : styles.outline,
    className,
  );
  return (
    <div className={blockClassName}>
      {text}
      <button className={styles.button} {...props}></button>
    </div>
  );
};
