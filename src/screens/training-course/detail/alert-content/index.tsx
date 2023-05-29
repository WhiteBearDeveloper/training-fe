import React from "react";
import styles from "./alert-content.module.scss";
import titleStyles from "@styles/modules/abstracts/title.module.scss";

interface Props {
  name?: string;
}

export const AlertContent = ({ name }: Props): React.ReactElement => {
  return (
    <>
      <h1 className={titleStyles.md}>
        Вы уверены, что хотите удалить тренировочный курс {name}?
      </h1>
      <span className={styles.text}>
        После удаления тренировочного курса будут также удалены прикреплённые
        тренировочные сессии и упражнения
      </span>
    </>
  );
};
