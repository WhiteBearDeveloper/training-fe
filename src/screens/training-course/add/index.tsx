import React from "react";
import blockStyles from "@styles/modules/abstracts/block.module.scss";
import { Button, TopLineElements, TopLineElementsInterface } from "@ui";
import { useGoBackHook } from "@utils/hooks/navigate.hook";
import { EditTrainingCourse } from "@features/training-course/forms/edit";

export const TrainingCourseAddScreen = (): JSX.Element => {
  const goBackHandler = useGoBackHook();

  const topLineButtons: TopLineElementsInterface = {
    rightSide: [
      <Button text="Назад" onClick={goBackHandler} key="training-course-add" />,
    ],
  };

  return (
    <>
      <TopLineElements {...topLineButtons} />
      <div className={blockStyles.block}>
        <EditTrainingCourse />
      </div>
    </>
  );
};
