import { getLoginEndpoint, getRegistrationEndpoint } from "@api/endpoints/auth";
import { commonApiService } from "../common";
import { setAuthEmail, setAuthToken } from "@services/auth";
import { $userStore } from "@store/user";
import { AuthTypes } from "./types";
import { $profileStore } from "@store/profile";
import {
  AuthAnswer,
  AuthProps,
} from "@whitebeardeveloper/training-logic/logic/types/auth.types";
interface SetAuthService {
  payload: AuthProps;
  type: AuthTypes;
}

const getAuthEndpoint = (type: AuthTypes): string => {
  switch (type) {
    case "registration":
      return getRegistrationEndpoint();
    case "login":
      return getLoginEndpoint();
  }
};

export const setAuthService = async ({
  payload,
  type,
}: SetAuthService): Promise<boolean> => {
  try {
    const response = await commonApiService<AuthAnswer, AuthProps>({
      url: getAuthEndpoint(type),
      method: "POST",
      payload,
    });
    setAuthToken(response.data.token);
    setAuthEmail(response.data.email);
    $userStore.activateAuthorizationStatus();
    await $profileStore.update();
    return true;
  } catch (e) {
    console.error("Ошибка авторизации");
    return false;
  }
};
