import React from "react";
import { TrainingCourseModel } from "@whitebeardeveloper/training-logic/logic/types/training-course.types";
import classNames from "classnames";
import styles from "./list.module.scss";
import { NavLink } from "react-router-dom";
import { capitalizeFirstLetter } from "@whitebeardeveloper/training-logic/logic/helpers/strings.helper";

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
                to={`training-courses/${item.id}`}
                className={classNames(styles.block)}
                key={`training-list-${item.id}`}
                state={{ ...item }}
              >
                <div className={styles.item}>
                  {capitalizeFirstLetter(item.name)}
                </div>
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
};

export const TrainingCoursesList = React.memo(Component);
