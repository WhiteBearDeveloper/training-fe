import React from "react";
import { TrainingCourseModel } from "@whitebeardeveloper/training-logic/src/training-course/types";
import classNames from "classnames";
import styles from "./list.module.scss";
import { NavLink } from "react-router-dom";

interface Props {
  data: TrainingCourseModel[];
}

const Component = ({ data }: Props): JSX.Element => {
  return (
    <>
      {data.length && (
        <div className={classNames(styles.list)}>
          {data?.map((item) => {
            return (
              <NavLink
                to={`training-course/${item.id}`}
                className={classNames(styles.block)}
                key={`training-list-${item.id}`}
                state={{ ...item }}
              >
                <div className={styles.item}>{item.name}</div>
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
};

export const TrainingCoursesList = React.memo(Component);
