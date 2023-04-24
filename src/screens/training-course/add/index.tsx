import React from "react";
import blockStyles from "@styles/modules/abstracts/block.module.scss";
import { Button } from "@ui";
import topLineStyles from "@styles/modules/abstracts/top-line.module.scss";
import { useGoBackHook } from "@utils/hooks/navigate.hook";
import { EditTrainingCourse } from "@features/training-course/forms/edit";

export const TrainingCourseAddScreen = (): JSX.Element => {
  const goBackHandler = useGoBackHook();

  return (
    <>
      <div className={topLineStyles.line}>
        <div className={topLineStyles.buttons}>
          <Button
            text="Назад"
            className={topLineStyles.button}
            onClick={goBackHandler}
          />
        </div>
      </div>
      <div className={blockStyles.block}>
        <EditTrainingCourse />
      </div>
    </>
  );
};
