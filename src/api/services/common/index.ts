import { apiController } from "@api/controller";
import { ApiServiceType } from "@api/types";
import { $loaderStore } from "@store/loader";
import { $specialScreensStore } from "@store/special-screens";
import { $SERVER_ERRORS } from "@utils/constants/errors";
import { AxiosError, AxiosResponse } from "axios";

export const commonApiService = async <T = any, P = any>(
  props: ApiServiceType<P>,
): Promise<AxiosResponse<T, any>> => {
  $loaderStore.addNewQuery(props.url);
  return await apiController<T, P>({
    ...props,
  })
    .then((data) => {
      $specialScreensStore.reset();
      return data;
    })
    .catch((error: AxiosError) => {
      if (error.code && error.code in $SERVER_ERRORS) {
        $specialScreensStore.showSpecialScreen(
          error.code as unknown as $SERVER_ERRORS,
        );
      } else {
        $specialScreensStore.reset();
      }
      throw new Error(error.message);
    })
    .finally(() => {
      $loaderStore.removeQuery(props.url);
    });
};
