import { TrainingCourseModel } from "@whitebeardeveloper/training-logic/src/training-course/types";
import React from "react";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import blockStyles from "@styles/modules/abstracts/block.module.scss";
import titleStyles from "@styles/modules/abstracts/title.module.scss";
import topLineStyles from "@styles/modules/abstracts/top-line.module.scss";
import { Button } from "@ui";

export const TrainingCourseDetailScreen = (): JSX.Element => {
  const state: TrainingCourseModel = useLocation().state;
  const navigate: NavigateFunction = useNavigate();
  const goBackHandler: () => void = (): void => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };
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
        <h1 className={titleStyles.lg}>{state?.name}</h1>
      </div>
    </>
  );
};
