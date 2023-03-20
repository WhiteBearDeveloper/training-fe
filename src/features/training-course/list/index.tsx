import React from "react";
import classNames from "classnames";
import styles from "./list.module.scss";
import { NavLink } from "react-router-dom";
import { capitalizeFirstLetter } from "@whitebeardeveloper/training-logic/logic/helpers/strings.helper";
import { TrainingCourseModel } from "@appTypes/training-course";

interface Props {
  data: TrainingCourseModel[];
}

const Component = ({ data }: Props): JSX.Element => {
  return (
    <>
      {data.length && (
        <div className={classNames(styles.list)}>
          {data?.map((item: TrainingCourseModel) => {
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
