import React from "react";
import styles from "./close-icon.module.scss";
import linkStyles from "@styles/modules/abstracts/link.module.scss";
import classNames from "classnames";

interface Props {
  onClick: () => void;
  className?: string;
}

export const CloseIcon = ({ onClick, className }: Props): JSX.Element => {
  const wrapperClass = classNames(
    styles.wrapper,
    linkStyles["link-base"],
    className,
  );
  return <div className={wrapperClass} onClick={onClick} />;
};
