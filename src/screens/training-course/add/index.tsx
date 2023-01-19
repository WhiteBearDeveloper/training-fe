import { addTrainingCourseService } from "@api/services/training-courses";
import React, { useRef, useState } from "react";
import blockStyles from "@styles/modules/abstracts/block.module.scss";

export const TrainingCourseAddScreen = (): JSX.Element => {
  const [name, setName] = useState<string | null>(null);
  const nameRef = useRef(null);
  const onSubmitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const nameCurrent = nameRef.current;
    // @ts-expect-error
    setName(nameCurrent.value);

    name !== null &&
      name !== undefined &&
      addTrainingCourseService({
        payload: {
          name,
        },
      });
  };
  return (
    <div className={blockStyles.block}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="name"
          ref={nameRef}
          placeholder="Введите название тренировочного курса"
        />
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
};
