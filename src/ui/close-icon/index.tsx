import React from "react";
import styles from "./close-icon.module.scss";
import classNames from "classnames";

interface Props {
  onClick: () => void;
  className?: string;
}

export const CloseIcon = ({ onClick, className }: Props): JSX.Element => {
  const wrapperClass = classNames(styles.wrapper, className);
  return <div className={wrapperClass} onClick={onClick} />;
};
