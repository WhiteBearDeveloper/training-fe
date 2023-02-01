import React from "react";
import { TrainingCourseModel } from "@whitebeardeveloper/training-logic/src/training-course/types";
import classNames from "classnames";
import styles from "./list.module.scss";

interface Props {
  data: TrainingCourseModel[];
}

const Component = ({ data }: Props): JSX.Element => {
  return (
    <>
      {data.length && (
        <div className={classNames(styles.list)}>
          {data?.map((item) => (
            <div
              className={classNames(styles.block)}
              key={`training-list-${item.id}`}
            >
              <div className={styles.item}>{item.name}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export const TrainingCoursesList = React.memo(Component);
