import React from "react";
import { Notifications } from "@ui";
import "./default-public.scss";
import styles from "./default-public.module.scss";
import grid from "@styles/modules/abstracts/grid.module.scss";
import classNames from "classnames";
import { Profile } from "@templates/default-public/features/";

interface Props {
  children?: React.ReactNode;
}

export const DefaultPublicTemplate: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Notifications />
      <div className={classNames(styles.topline, grid.root)}>
        <div className={classNames(grid.container, styles.toplineInner)}>
          <div className={styles.toplineName}>Workout</div>
          <div className={styles.toplineManagment}>
            <Profile />
          </div>
        </div>
      </div>
      <div className={grid.container}>
        <>{children}</>
      </div>
    </div>
  );
};
