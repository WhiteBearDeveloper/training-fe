import React from "react";
import styles from "./top-line-elements.module.scss";

export interface TopLineElementsInterface {
  leftSide?: React.ReactElement[];
  rightSide?: React.ReactElement[];
}

type Sides = "left" | "right";

export const TopLineElements = ({
  leftSide,
  rightSide,
}: TopLineElementsInterface): React.ReactElement | null => {
  return leftSide ?? rightSide ? (
    <div className={styles.line}>
      <Element list={leftSide} side="left" />
      <Element list={rightSide} side="right" />
    </div>
  ) : null;
};

interface ElementInterface {
  list?: React.ReactElement[];
  side: Sides;
}

const Element = ({
  list,
  side,
}: ElementInterface): React.ReactElement | null => {
  return list?.length ? (
    <div className={styles[`${side}-side`]}>
      {list.map((component, index) => (
        <div className={styles.element} key={`top-line-element-${index}`}>
          {component}
        </div>
      ))}
    </div>
  ) : null;
};
