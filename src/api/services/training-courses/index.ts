import { commonApiService } from "../common";
import { getTrainingCoursesEndpoint } from "@api/endpoints/training-course";
import { $notificationsStore } from "@store/notifications";
import { WithId } from "@whitebeardeveloper/training-logic/logic/common/types";
import {
  TrainingCourseModel,
  TrainingCourseProps,
} from "@whitebeardeveloper/training-logic/logic/training-course/types";

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

export const getTrainingCourseService = async (): Promise<
  TrainingCourseModel[] | undefined
> => {
  try {
    const response = await commonApiService<TrainingCourseModel[]>({
      url: getTrainingCoursesEndpoint(),
      method: "GET",
    });
    return response.data;
  } catch (e) {
    console.error("Ошибка получения списка тренировок");
  }
};

export const getTrainingCourseByIdService = async (
  id: number,
): Promise<TrainingCourseModel | undefined> => {
  try {
    const url = `${getTrainingCoursesEndpoint()}/${id}`;
    const response = await commonApiService<TrainingCourseModel, WithId>({
      url,
      method: "GET",
    });
    return response.data;
  } catch (e) {
    console.error("Ошибка получения тренировочного курса");
  }
};
