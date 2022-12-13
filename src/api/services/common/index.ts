import { apiController } from "@api/controller";
import { ApiServiceType } from "@api/types";

export const commonApiService = async <T = any, P = any>(
  props: ApiServiceType<P>
) => {
  return await apiController<T, P>({
    ...props,
  })
    .then()
    .catch()
    .finally();
};
