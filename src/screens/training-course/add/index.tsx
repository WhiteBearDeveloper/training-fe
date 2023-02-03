import { addTrainingCourseService } from "@api/services/training-courses";
import React, { useRef, useState } from "react";
import blockStyles from "@styles/modules/abstracts/block.module.scss";
import titleStyles from "@styles/modules/abstracts/title.module.scss";
import formStyles from "@styles/modules/abstracts/form.module.scss";
import { Button, FormWrapper, InputText } from "@ui";
import topLineStyles from "@styles/modules/abstracts/top-line.module.scss";
import { useGoBackHook } from "@utils/hooks/navigate.hook";

export const TrainingCourseAddScreen = (): JSX.Element => {
  const [name, setName] = useState<string | null>(null);
  const nameRef = useRef(null);
  const onSubmitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const nameCurrent = nameRef.current;
    // @ts-expect-error
    setName(nameCurrent.value);

    name &&
      addTrainingCourseService({
        payload: {
          name,
        },
      });
  };

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
        <FormWrapper onSubmit={onSubmitHandler}>
          <div className={formStyles.row}>
            <InputText
              type="text"
              placeholder="Введите название курса"
              ref={nameRef}
              name="name"
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
