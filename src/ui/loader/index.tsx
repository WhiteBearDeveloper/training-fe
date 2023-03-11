import React from "react";
import styles from "./loader.module.scss";
import overlayStyles from "@styles/modules/abstracts/overlay.module.scss";
import { observer } from "mobx-react-lite";
import classNames from "classnames";
import { $loaderStore } from "@store/loader";

export const Loader = observer((): JSX.Element => {
  const { loader } = $loaderStore;

  const wrapperClassName = classNames(
    overlayStyles.overlay,
    loader && overlayStyles["overlay-show"],
  );
  return (
    <div className={wrapperClassName}>
      <div className={styles.icon}>Загрузка</div>
    </div>
  );
});
