import { getTrainingCoursesEndpoint } from "@api/endpoints/training-course";
import { useApiController } from "@api/hooks/controller.hook";

export const useGetTrainingCoursesListHook = <CommonWithProfileId,>():
  | CommonWithProfileId[]
  | null => {
  const { data } = useApiController<CommonWithProfileId[]>(
    getTrainingCoursesEndpoint(),
  );
  return data;
};
