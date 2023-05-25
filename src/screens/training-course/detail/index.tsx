import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import blockStyles from "@styles/modules/abstracts/block.module.scss";
import titleStyles from "@styles/modules/abstracts/title.module.scss";
import { Button, TopLineElements } from "@ui";
import { getTrainingCourseByIdService } from "@api/services/training-courses";
import { useGoBackHook } from "@utils/hooks/navigate.hook";
import { capitalizeFirstLetter } from "@whitebeardeveloper/training-logic/logic/helpers/strings.helper";
import { TrainingCourseModel } from "@whitebeardeveloper/training-logic/logic/types/training-course.types";
import { EditTrainingCourse } from "@features/training-course/forms/edit";
import type { TopLineElementsInterface } from "@ui";

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

  const topLineButtons: TopLineElementsInterface = {
    leftSide: [
      ...(training?.control?.isEditable
        ? [
            <Button
              text="Удалить"
              theme="indianred"
              key="training-course-detail-delete"
            />,
          ]
        : []),
    ],
    rightSide: [
      ...(training?.control?.isEditable
        ? [
            <Button
              text={
                isShowEditForm ? "Завершить редактирование" : "Редактировать"
              }
              onClick={() => setShowEditFormStatus((prev) => !prev)}
              buttonStyle="outline"
              key="training-course-detail-edit"
            />,
          ]
        : []),
      <Button
        text="Назад"
        onClick={goBackHandler}
        key="training-course-detail-back"
      />,
    ],
  };

  const trainingName: string = training?.name ?? state?.name ?? "";
  return training ?? state ? (
    <>
      <TopLineElements {...topLineButtons} />
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
