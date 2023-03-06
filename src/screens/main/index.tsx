import React, { useEffect } from "react";
import { TrainingCoursesList } from "@features/training-course";
import styles from "./main.module.scss";
import blockStyles from "@styles/modules/abstracts/block.module.scss";
import titleStyles from "@styles/modules/abstracts/title.module.scss";
import { observer } from "mobx-react-lite";
import { $trainingCourseStore } from "@features/training-course/training-course.store";
import classNames from "classnames";
import topLineStyles from "@styles/modules/abstracts/top-line.module.scss";
import { Button } from "@ui";
import { NavLink } from "react-router-dom";
import { $profileStore } from "@store/profile";

const Component = observer((): JSX.Element | null => {
  const { trainingCourse, myTrainingCourse, update } = $trainingCourseStore;

  const { profile } = $profileStore;

  useEffect(() => {
    !trainingCourse && update();
  }, [trainingCourse]);

  const blockClass = classNames(blockStyles.block, styles.block);

  return trainingCourse?.length ? (
    <>
      {profile && (
        <div className={topLineStyles.line}>
          <div className={topLineStyles.buttons}>
            <NavLink to="/training-courses/add">
              <Button text="Создать курс" className={topLineStyles.button} />
            </NavLink>
          </div>
        </div>
      )}

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
  ) : trainingCourse?.length === 0 ? (
    <section className={blockStyles.block}>
      На данный момент нет активных тренировочных курсов
    </section>
  ) : null;
});

export const MainScreen = React.memo(Component);
