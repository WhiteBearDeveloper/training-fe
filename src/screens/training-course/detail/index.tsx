import { TrainingCourseModel } from "@whitebeardeveloper/training-logic/src/training-course/types";
import React from "react";
import { useLocation } from "react-router-dom";
import blockStyles from "@styles/modules/abstracts/block.module.scss";
import titleStyles from "@styles/modules/abstracts/title.module.scss";

export const TrainingCourseDetailScreen = (): JSX.Element => {
  const state: TrainingCourseModel | null = useLocation().state;
  return (
    <div className={blockStyles.block}>
      <h1 className={titleStyles.lg}>{state?.name}</h1>
    </div>
  );
};
