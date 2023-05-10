import React from "react";
import styles from "./svg.module.scss";
import sprite from "./sprite.svg";
import classNames from "classnames";

interface IconProps {
  name: string;
  modClass?: string;
}

export const SvgIcon = ({ name, modClass }: IconProps): JSX.Element => {
  const svgClass = classNames(
    styles.svg,
    name && styles[`svg-${name}`],
    modClass,
  );
  return (
    <span className={svgClass}>
      <svg preserveAspectRatio="none">
        <use xlinkHref={`${sprite}#${name}`} />
      </svg>
    </span>
  );
};
