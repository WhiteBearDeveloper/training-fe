import { commonApiService } from "../common";
import { getTrainingCoursesEndpoint } from "@api/endpoints/training-course";
import { $notificationsStore } from "@store/notifications";
import { WithId } from "@whitebeardeveloper/training-logic/logic/types/common.types";
import {
  TrainingCourseModel,
  TrainingCourseProps,
} from "@whitebeardeveloper/training-logic/logic/types/training-course.types";

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

export const updateTrainingCourseService = async ({
  id,
  payload,
}: Props & WithId): Promise<TrainingCourseModel | undefined> => {
  try {
    const url = `${getTrainingCoursesEndpoint()}/${id}`;
    const finalPayload: TrainingCourseProps & WithId = { ...payload, id };
    const response = await commonApiService<
      TrainingCourseModel,
      TrainingCourseProps
    >({
      url,
      method: "PUT",
      payload: finalPayload,
    });
    $notificationsStore.addNotification({
      text: "Тренировочный курс успешно обновлён!",
      type: "success",
    });
    return response.data;
  } catch (e) {
    console.error("Ошибка обновления тренировочного курса");
  }
};

export const deleteTrainingCourseService = async (
  id: number,
  name: string,
): Promise<number | undefined> => {
  try {
    const url = `${getTrainingCoursesEndpoint()}/${id}`;
    const response = await commonApiService<number, WithId>({
      url,
      method: "DELETE",
    });
    $notificationsStore.addNotification({
      text: `Тренировочный курс ${name} успешно удалён!`,
      type: "success",
    });
    return response.data;
  } catch (e) {
    console.error("Ошибка удаления тренировочного курса");
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
