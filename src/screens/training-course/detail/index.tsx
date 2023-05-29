import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import blockStyles from "@styles/modules/abstracts/block.module.scss";
import titleStyles from "@styles/modules/abstracts/title.module.scss";
import { Alert, Button, TopLineElements } from "@ui";
import {
  deleteTrainingCourseService,
  getTrainingCourseByIdService,
} from "@api/services/training-courses";
import { useGoBackHook } from "@utils/hooks/navigate.hook";
import { capitalizeFirstLetter } from "@whitebeardeveloper/training-logic/logic/helpers/strings.helper";
import { TrainingCourseModel } from "@whitebeardeveloper/training-logic/logic/types/training-course.types";
import { EditTrainingCourse } from "@features/training-course/forms/edit";
import type { TopLineElementsInterface } from "@ui";
import { AlertContent } from "./alert-content";
import { $trainingCourseStore } from "@features/training-course/training-course.store";

export const TrainingCourseDetailScreen = (): JSX.Element | null => {
  const [training, setTraining] = useState<TrainingCourseModel>();
  const [isShowEditForm, setShowEditFormStatus] = useState<boolean>(false);
  const [isShowAlert, setShowAlertStatus] = useState<boolean>(false);
  const [state, setState] = useState<TrainingCourseModel | null>(
    useLocation().state,
  );

  const { id } = useParams<{ id?: string }>();
  const goBackHandler = useGoBackHook();
  const navigate = useNavigate();
  const trainingName: string = training?.name ?? state?.name ?? "";
  const trainingNameEdited: string = capitalizeFirstLetter(trainingName);

  useEffect(() => {
    getTrainingCourseByIdService(Number(id))
      .then((data) => data && setTraining(data))
      .catch((error) => console.log("error :>> ", error));
  }, []);

  const onCloseAlert: () => void = () => {
    setShowAlertStatus(false);
  };

  const onSuccessAlert: () => void = () => {
    if (training) {
      deleteTrainingCourseService(training.id, trainingNameEdited)
        .then((id) => {
          if (id) {
            onCloseAlert();
            setState(null);
            $trainingCourseStore
              .update()
              .catch((errors) => console.error(errors));
            navigate("/");
          }
        })
        .catch((error) => console.error(error));
    }
  };

  const onCancelAlert: () => void = () => {
    setShowAlertStatus(false);
  };

  const topLineButtons: TopLineElementsInterface = {
    leftSide: [
      ...(training?.control?.isEditable
        ? [
            <Button
              text="Удалить"
              theme="indianred"
              key="training-course-detail-delete"
              onClick={() => setShowAlertStatus(true)}
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

  return training ?? state ? (
    <>
      <TopLineElements {...topLineButtons} />
      {!!trainingName && (
        <>
          <div className={blockStyles.block}>
            <h1 className={titleStyles.lg}>{trainingNameEdited}</h1>
          </div>
          {training?.control?.isEditable && isShowAlert && (
            <Alert
              isOpen={isShowAlert}
              onClose={onCloseAlert}
              onCancel={onCancelAlert}
              onSubmit={onSuccessAlert}
            >
              <AlertContent name={trainingNameEdited} />
            </Alert>
          )}
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
