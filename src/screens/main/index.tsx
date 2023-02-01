import React, { useEffect } from "react";
import { TrainingCoursesList } from "@features/training-course";
import styles from "./main.module.scss";
import blockStyles from "@styles/modules/abstracts/block.module.scss";
import titleStyles from "@styles/modules/abstracts/title.module.scss";
import { observer } from "mobx-react-lite";
import { $trainingCourseStore } from "@features/training-course/training-course.store";
import classNames from "classnames";

const Component = observer((): JSX.Element | null => {
  const { trainingCourse, myTrainingCourse, update, isNotStarted } =
    $trainingCourseStore;
  useEffect(() => {
    !trainingCourse && update();
  }, [trainingCourse]);

  const blockClass = classNames(blockStyles.block, styles.block);

  return trainingCourse?.length ? (
    <>
      <section className={blockClass}>
        <h1 className={titleStyles.lg}>Тренировочные курсы</h1>
        <TrainingCoursesList data={trainingCourse} />
      </section>
      {myTrainingCourse?.length && (
        <section className={blockClass}>
          <h1 className={titleStyles.lg}>Мои тренировочные курсы</h1>
          <TrainingCoursesList data={myTrainingCourse} />
        </section>
      )}
    </>
  ) : !isNotStarted ? (
    <section className={blockStyles.block}>
      На данный момент нет активных тренировочных курсов
    </section>
  ) : null;
});

export const MainScreen = React.memo(Component);
