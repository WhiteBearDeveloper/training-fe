import { addTrainingCourseService } from "@api/services/training-courses";
import React from "react";
import blockStyles from "@styles/modules/abstracts/block.module.scss";
import titleStyles from "@styles/modules/abstracts/title.module.scss";
import formStyles from "@styles/modules/abstracts/form.module.scss";
import { Button, FormWrapper, InputText } from "@ui";
import topLineStyles from "@styles/modules/abstracts/top-line.module.scss";
import { useGoBackHook } from "@utils/hooks/navigate.hook";
import * as yup from "yup";
import { schema } from "./schema";
import { FieldErrors } from "react-hook-form";
import { TrainingCourseProps } from "@whitebeardeveloper/training-logic/logic/types/training-course.types";
import { useForm } from "@api/hooks/form.hook";

export const TrainingCourseAddScreen = (): JSX.Element => {
  type FormData = yup.InferType<typeof schema>;

  const onSuccessHandler = (data: FormData): void => {
    addTrainingCourseService({
      payload: {
        name: data.name,
      },
    })
      .then((data) => console.log())
      .catch((error) => console.error(error));
  };

  const onFailHandler = (errors: FieldErrors): void => {
    console.error("errors :>> ", errors);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TrainingCourseProps>({
    schema,
  });

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
        <h1 className={titleStyles.lg}>Создать тренировочный курс</h1>
        <FormWrapper onSubmit={handleSubmit(onSuccessHandler, onFailHandler)}>
          <div className={formStyles.row}>
            <InputText
              type="text"
              placeholder="Введите название курса"
              name="name"
              register={register}
              error={errors.name}
            />
          </div>
          <div className={formStyles.row}>
            <Button type="submit" text="Сохранить" />
          </div>
        </FormWrapper>
      </div>
    </>
  );
};
