import { commonApiService } from "../common";
import { getTrainingCoursesEndpoint } from "@api/endpoints/training-course";
import { CommonWithIntegerAndProfileId } from "@appTypes/common";

interface AuthAnswer extends CommonWithIntegerAndProfileId {}

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
