import { getRegistrationEndpoint } from "@api/endpoints/auth";
import { commonApiService } from "../common";

interface SetAuthService {
  payload: { email: string; password: string };
}

export const setAuthService = async ({ payload }: SetAuthService) => {
  try {
    const response = await commonApiService({
      url: getRegistrationEndpoint(),
      method: "POST",
      payload,
    });
    return response.data;
  } catch (e) {
  } finally {
  }
};
