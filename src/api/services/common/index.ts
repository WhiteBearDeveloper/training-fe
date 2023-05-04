import { apiController } from "@api/controller";
import { ApiServiceType } from "@api/types";
import { $loaderStore } from "@store/loader";
import { $specialScreensStore } from "@store/special-screens";
import { AxiosError, AxiosResponse } from "axios";

export const commonApiService = async <T = any, P = any>(
  props: ApiServiceType<P>,
): Promise<AxiosResponse<T, any>> => {
  $loaderStore.addNewQuery(props.url);
  return await apiController<T, P>({
    ...props,
  })
    .then()
    .catch((error: AxiosError) => {
      if (error.code === "ERR_NETWORK") {
        $specialScreensStore.showSpecialScreen("ERR_NETWORK");
      }
      throw new Error(error.message);
    })
    .finally(() => {
      $loaderStore.removeQuery(props.url);
    });
};
