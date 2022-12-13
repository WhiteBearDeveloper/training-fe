import { getLoginEndpoint, getRegistrationEndpoint } from "@api/endpoints/auth";
import { commonApiService } from "../common";
import { setAuthToken } from "@services/auth";
import { $userStore } from "@store/user";

interface SetAuthServicePayload {
  email: string;
  password: string;
}

interface AuthAnswer {
  id: number;
  token: string;
}
interface SetAuthService {
  payload: SetAuthServicePayload;
  type: AuthTypes;
}

type AuthTypes = "registration" | "login";

const getAuthEndpoint = (type: AuthTypes) => {
  switch (type) {
    case "registration":
      return getRegistrationEndpoint();
    case "login":
      return getLoginEndpoint();
  }
};

export const setAuthService = async ({ payload, type }: SetAuthService) => {
  try {
    const response = await commonApiService<AuthAnswer, SetAuthServicePayload>({
      url: getAuthEndpoint(type),
      method: "POST",
      payload,
    });
    setAuthToken(response.data.token);
    $userStore.activateAuthorizationStatus();
  } catch (e) {
  } finally {
  }
};
