import React from "react";
import { Notifications } from "@ui";
import "./default-public.scss";
import styles from "./default-public.module.scss";
import grid from "@styles/modules/abstracts/grid.module.scss";
import link from "@styles/modules/abstracts/link.module.scss";
import classNames from "classnames";
import { Profile } from "@templates/default-public/features/";
import { NavLink, useLocation } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
}

export const DefaultPublicTemplate: React.FC<Props> = ({ children }) => {
  const location = useLocation();

  const getLogoComponent = (children: React.ReactNode): React.ReactNode => {
    const className = styles["header-name"];
    switch (location.pathname) {
      case "/":
        return <div className={className}>{children}</div>;
      default:
        return (
          <NavLink to="/" className={classNames(className, link["link-base"])}>
            {children}
          </NavLink>
        );
    }
  };

  return (
    <div className={styles.wrapper}>
      <Notifications />
      <header className={classNames(styles.header, grid.root)}>
        <div className={classNames(grid.container, styles["header-inner"])}>
          {getLogoComponent(<>Workout</>)}
          <Profile />
        </div>
      </header>
      <main className={classNames(styles.main, grid.root)}>
        <div className={grid.container}>
          <>{children}</>
        </div>
      </main>
    </div>
  );
};
