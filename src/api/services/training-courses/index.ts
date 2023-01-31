import { commonApiService } from "../common";
import { getTrainingCoursesEndpoint } from "@api/endpoints/training-course";
import { $notificationsStore } from "@store/notifications";
import { CommonWithProfileId } from "@whitebeardeveloper/training-logic/src/common/types";

interface TrainingCourse extends CommonWithProfileId {}

interface AddTrainingCourse {
  name: string;
}
interface Props {
  payload: AddTrainingCourse;
}

export const addTrainingCourseService = async ({
  payload,
}: Props): Promise<TrainingCourse | undefined> => {
  try {
    const response = await commonApiService<TrainingCourse, AddTrainingCourse>({
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
): Promise<TrainingCourse[] | undefined> => {
  try {
    const response = await commonApiService<TrainingCourse[], Props>({
      url: getTrainingCoursesEndpoint(),
      method: "GET",
    });
    return response.data;
  } catch (e) {
    console.error("Ошибка получения профиля");
  }
};
