import { apiController } from "@api/controller";
import { ApiServiceType } from "@api/types";
import { AxiosResponse } from "axios";

export const commonApiService = async <T = any, P = any>(
  props: ApiServiceType<P>,
): Promise<AxiosResponse<T, any>> => {
  return await apiController<T, P>({
    ...props,
  })
    .then()
    .catch()
    .finally();
};
