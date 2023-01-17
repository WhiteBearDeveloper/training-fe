import { commonApiService } from "../common";
import { getTrainingCoursesEndpoint } from "@api/endpoints/training-course";
import { CommonWithProfileId } from "@whitebeardeveloper/training-logic/src/common/types";

interface AuthAnswer extends CommonWithProfileId {}

interface AddTrainingCourse {
  name: string;
}
interface Props {
  payload: AddTrainingCourse;
}

export const addTrainingCourseService = async ({
  payload,
}: Props): Promise<AuthAnswer | undefined> => {
  try {
    const response = await commonApiService<AuthAnswer, AddTrainingCourse>({
      url: getTrainingCoursesEndpoint(),
      method: "POST",
      payload,
    });
    return response.data;
  } catch (e) {
    console.error("Ошибка создания тренировочного курса");
  }
};
