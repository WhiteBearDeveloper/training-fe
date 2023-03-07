import React from "react";
import styles from "./loader.module.scss";
import overlayStyles from "@styles/modules/abstracts/overlay.module.scss";

export const Loader = (): JSX.Element => {
  return (
    <div className={overlayStyles.overlay}>
      <div className={styles.icon}>Загрузка</div>
    </div>
  );
};
