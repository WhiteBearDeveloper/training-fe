import React from "react";
import { Notifications } from "@ui";
import "./default-public.scss";
import styles from "./default-public.module.scss";

interface Props {
  children?: React.ReactNode;
}

export const DefaultPublicTemplate: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Notifications />
      <>{children}</>
    </div>
  );
};
