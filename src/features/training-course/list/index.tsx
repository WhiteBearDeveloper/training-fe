import React from "react";
import blockStyles from "@styles/modules/abstracts/block.module.scss";
import gridStyles from "@styles/modules/abstracts/grid.module.scss";
import { CommonWithProfileId } from "@whitebeardeveloper/training-logic/src/common/types";
import { checkNullish } from "@utils/helpers/checks.helper";
import classNames from "classnames";
import { useGetTrainingCoursesListHook } from "./list.hook";

const Component = (): JSX.Element => {
  const data: CommonWithProfileId[] | null = useGetTrainingCoursesListHook();
  return (
    <div className={blockStyles.block}>
      {checkNullish<CommonWithProfileId[] | null>(data) && (
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
