import { commonApiService } from "../common";
import { getTrainingCoursesEndpoint } from "@api/endpoints/training-course";
import { $notificationsStore } from "@store/notifications";
import {
  TrainingCourseModel,
  TrainingCourseProps,
} from "@whitebeardeveloper/training-logic/src/training-course/types";

interface Props {
  payload: TrainingCourseProps;
}

export const addTrainingCourseService = async ({
  payload,
}: Props): Promise<TrainingCourseModel | undefined> => {
  try {
    const response = await commonApiService<
      TrainingCourseModel,
      TrainingCourseProps
    >({
      url: getTrainingCoursesEndpoint(),
      method: "POST",
      payload,
    });
    $notificationsStore.addNotification({
      text: "Тренировочный курс успешно создан!",
      type: "success",
    });
    return response.data;
  } catch (e) {
    console.error("Ошибка создания тренировочного курса");
  }
};

export const getTrainingCourseService = async (
  id?: Props,
): Promise<TrainingCourseModel[] | undefined> => {
  try {
    const response = await commonApiService<TrainingCourseModel[], Props>({
      url: getTrainingCoursesEndpoint(),
      method: "GET",
    });
    return response.data;
  } catch (e) {
    console.error("Ошибка получения списка тренировок");
  }
};
