import { getTrainingCoursesEndpoint } from "@api/endpoints/training-course";
import { useApiController } from "@api/hooks/controller.hook";
import { TrainingCourseModel } from "@whitebeardeveloper/training-logic/src/training-course/types";

export const useGetTrainingCoursesListHook = ():
  | TrainingCourseModel[]
  | null => {
  const { data } = useApiController<TrainingCourseModel[]>(
    getTrainingCoursesEndpoint(),
  );
  return data;
};
