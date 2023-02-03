import { TrainingCourseModel } from "@whitebeardeveloper/training-logic/dist/training-course/types";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import blockStyles from "@styles/modules/abstracts/block.module.scss";
import titleStyles from "@styles/modules/abstracts/title.module.scss";
import topLineStyles from "@styles/modules/abstracts/top-line.module.scss";
import { Button } from "@ui";
import { getTrainingCourseByIdService } from "@api/services/training-courses";
import { useGoBackHook } from "@utils/hooks/navigate.hook";
import { capitalizeFirstLetter } from "@whitebeardeveloper/training-logic/dist/common/helpers/string.helper";

export const TrainingCourseDetailScreen = (): JSX.Element | null => {
  const [training, setTraining] = useState<TrainingCourseModel>();
  const { id } = useParams<{ id?: string }>();
  const state: TrainingCourseModel = useLocation().state;

  const goBackHandler = useGoBackHook();

  useEffect(() => {
    getTrainingCourseByIdService(Number(id))
      .then((data) => data && setTraining(data))
      .catch((error) => console.log("error :>> ", error));
  }, []);

  const trainingName: string = state?.name ?? training?.name ?? "";

  return training ?? state ? (
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
      {!!trainingName && (
        <div className={blockStyles.block}>
          <h1 className={titleStyles.lg}>
            {capitalizeFirstLetter(trainingName)}
          </h1>
        </div>
      )}
    </>
  ) : null;
};
