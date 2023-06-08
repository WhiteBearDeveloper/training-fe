import React from "react";
import { getTrainingCoursesEndpoint } from "@api/endpoints/training-course";
import { $trainingCourseStore } from "@features/training-course/training-course.store";
import { FieldErrors } from "react-hook-form";
import {
  TrainingCourseModel,
  TrainingCourseProps,
} from "@whitebeardeveloper/training-logic/logic/types/training-course.types";
import { useForm } from "@api/hooks/form.hook";
import * as yup from "yup";
import { FormWrapper, InputText, Button } from "@ui";
import titleStyles from "@styles/modules/abstracts/title.module.scss";
import formStyles from "@styles/modules/abstracts/form.module.scss";
import {
  addTrainingCourseService,
  updateTrainingCourseService,
} from "@api/services/training-courses";
import { schema } from "./schema";
import { useNavigate } from "react-router-dom";
import { WithId } from "@whitebeardeveloper/training-logic/logic/types/common.types";
import { $loaderStore } from "@store/loader";
import { observer } from "mobx-react-lite";

type FormData = yup.InferType<typeof schema>;
interface Props {
  data?: TrainingCourseModel;
  setTrainingCourse?: (data: TrainingCourseModel) => void;
}

export const EditTrainingCourse = observer(
  ({ data, setTrainingCourse }: Props): JSX.Element => {
    const navigate = useNavigate();

    const onAfterSuccessHandler = ({ id }: WithId): void => {
      $trainingCourseStore.update().catch((errors) => console.error(errors));
    };

    const onSuccessHandler = (formData: FormData): void => {
      if (!data) {
        addTrainingCourseService({
          payload: {
            name: formData.name,
          },
        })
          .then((returnedData) => {
            if (returnedData?.id) {
              navigate(`/${getTrainingCoursesEndpoint()}/${returnedData.id}`);
              onAfterSuccessHandler({ id: returnedData.id });
            }
          })
          .catch((error) => console.error(error));
      } else {
        updateTrainingCourseService({
          id: data.id,
          payload: {
            name: formData.name,
          },
        })
          .then((returnedData) => {
            if (returnedData) {
              if (setTrainingCourse) {
                setTrainingCourse(returnedData);
              }
              onAfterSuccessHandler({ id: returnedData.id });
            }
          })
          .catch((error) => console.error(error));
      }
    };

    const onFailHandler = (errors: FieldErrors): void => {
      console.error("errors :>> ", errors);
    };

    const methods = useForm<TrainingCourseProps>({
      schema,
      defaultValues: {
        name: data?.name ?? "",
      },
    });

    const isDisabled: boolean = $loaderStore.loader;

    return (
      <>
        <h1 className={titleStyles.lg}>{`${
          data ? "Редактировать" : "Создать"
        } тренировочный курс`}</h1>
        <FormWrapper
          onSubmit={methods.handleSubmit(onSuccessHandler, onFailHandler)}
        >
          <div className={formStyles.row}>
            <InputText
              type="text"
              placeholder="Введите название курса"
              name="name"
              methods={methods}
            />
          </div>
          <div className={formStyles.row}>
            <Button type="submit" text="Сохранить" disabled={isDisabled} />
          </div>
        </FormWrapper>
      </>
    );
  },
);
