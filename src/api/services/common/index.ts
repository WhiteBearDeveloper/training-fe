import { apiController } from "@api/controller";
import { ApiServiceType } from "@api/types";
import { $loaderStore } from "@store/loader";
import { AxiosResponse } from "axios";

export const commonApiService = async <T = any, P = any>(
  props: ApiServiceType<P>,
): Promise<AxiosResponse<T, any>> => {
  $loaderStore.addNewQuery(props.url);
  return await apiController<T, P>({
    ...props,
  })
    .then()
    .catch()
    .finally(() => {
      $loaderStore.removeQuery(props.url);
    });
};
