import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import blockStyles from "@styles/modules/abstracts/block.module.scss";
import titleStyles from "@styles/modules/abstracts/title.module.scss";
import topLineStyles from "@styles/modules/abstracts/top-line.module.scss";
import { Button } from "@ui";
import { getTrainingCourseByIdService } from "@api/services/training-courses";
import { useGoBackHook } from "@utils/hooks/navigate.hook";
import { capitalizeFirstLetter } from "@whitebeardeveloper/training-logic/logic/helpers/strings.helper";
import { TrainingCourseModel } from "@whitebeardeveloper/training-logic/logic/types/training-course.types";
import { EditTrainingCourse } from "@features/training-course/forms/edit";

export const TrainingCourseDetailScreen = (): JSX.Element | null => {
  const [training, setTraining] = useState<TrainingCourseModel>();
  const [isShowEditForm, setShowEditFormStatus] = useState<boolean>(false);
  const { id } = useParams<{ id?: string }>();
  const state: TrainingCourseModel = useLocation().state;

  const goBackHandler = useGoBackHook();

  useEffect(() => {
    getTrainingCourseByIdService(Number(id))
      .then((data) => data && setTraining(data))
      .catch((error) => console.log("error :>> ", error));
  }, []);

  const trainingName: string = training?.name ?? state?.name ?? "";
  return training ?? state ? (
    <>
      <div className={topLineStyles.line}>
        <div className={topLineStyles.buttons}>
          {training?.control?.isEditable && (
            <Button
              text={
                isShowEditForm ? "Завершить редактирование" : "Редактировать"
              }
              className={topLineStyles.button}
              onClick={() => setShowEditFormStatus((prev) => !prev)}
              buttonStyle="outline"
            />
          )}
          <Button
            text="Назад"
            className={topLineStyles.button}
            onClick={goBackHandler}
          />
        </div>
      </div>
      {!!trainingName && (
        <>
          <div className={blockStyles.block}>
            <h1 className={titleStyles.lg}>
              {capitalizeFirstLetter(trainingName)}
            </h1>
          </div>
          {training?.control?.isEditable && isShowEditForm && (
            <div className={blockStyles.block}>
              <EditTrainingCourse
                data={training}
                setTrainingCourse={setTraining}
              />
            </div>
          )}
        </>
      )}
    </>
  ) : null;
};
