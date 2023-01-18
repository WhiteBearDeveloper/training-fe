import { getLoginEndpoint, getRegistrationEndpoint } from "@api/endpoints/auth";
import { commonApiService } from "../common";
import { setAuthToken } from "@services/auth";
import { $userStore } from "@store/user";
import { AuthTypes } from "./types";
import { $notificationsStore } from "@store/notifications";
import { $profileStore } from "@store/profile";
import {
  AuthAnswer,
  AuthProps,
} from "@whitebeardeveloper/training-logic/src/auth/types";
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
}: SetAuthService): Promise<void> => {
  try {
    const response = await commonApiService<AuthAnswer, AuthProps>({
      url: getAuthEndpoint(type),
      method: "POST",
      payload,
    });
    setAuthToken(response.data.token);
    $userStore.activateAuthorizationStatus();
    await $profileStore.update();
    $notificationsStore.addNotification({
      text:
        type === "registration"
          ? "Регистрация успешно завершена"
          : "Вы успешно авторизованы",
      type: "success",
    });
  } catch (e) {
    console.error("Ошибка авторизации");
  }
};
