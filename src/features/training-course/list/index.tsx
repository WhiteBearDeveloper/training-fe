import React from "react";
import blockStyles from "@styles/modules/abstracts/block.module.scss";
import gridStyles from "@styles/modules/abstracts/grid.module.scss";
import { TrainingCourseModel } from "@whitebeardeveloper/training-logic/src/training-course/types";
import { checkNullish } from "@utils/helpers/checks.helper";
import classNames from "classnames";
import { useGetTrainingCoursesListHook } from "./list.hook";

const Component = (): JSX.Element => {
  const data: TrainingCourseModel[] | null = useGetTrainingCoursesListHook();
  return (
    <div className={blockStyles.block}>
      {checkNullish<TrainingCourseModel[] | null>(data) && (
        <div className={gridStyles.list}>
          {data?.map((item) => (
            <div
              className={classNames(gridStyles.item, gridStyles["item-3x"])}
              key={`training-list-${item.id}`}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const TrainingCoursesList = React.memo(Component);
