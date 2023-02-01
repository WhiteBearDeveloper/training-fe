import React from "react";
import gridStyles from "@styles/modules/abstracts/grid.module.scss";
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
        <div className={gridStyles.list}>
          {data?.map((item) => (
            <div
              className={classNames(gridStyles.item, gridStyles["item-3x"])}
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
