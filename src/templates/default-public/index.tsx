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
      <header className={classNames(styles.header, grid.root)}>
        <div className={classNames(grid.container, styles.headerInner)}>
          <div className={styles.headerName}>Workout</div>
          <div className={styles.headerManagment}>
            <Profile />
          </div>
        </div>
      </header>
      <main className={grid.root}>
        <div className={grid.container}>
          <>{children}</>
        </div>
      </main>
    </div>
  );
};
