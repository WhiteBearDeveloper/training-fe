import { ErrorNetworkScreen, NoAccessScreen } from "@screens";
import { $userStore } from "@store/user";
import { RouteItem } from "./types";
import { $specialScreensStore } from "@store/special-screens";
import { $SERVER_ERRORS } from "@utils/constants/errors";

export const checkAuth = (): React.FC | false => {
  const isAuth: boolean | null = $userStore.isAuth;
  return isAuth ? false : NoAccessScreen;
};

export const checkGuards = (item: RouteItem): React.FC => {
  if (item.guards?.length) {
    for (let guard = 0; guard < item.guards?.length; guard++) {
      switch (item.guards[guard]) {
        case "isAuth": {
          const checkAuthResult = checkAuth();
          if (checkAuthResult) {
            return checkAuthResult;
          }
        }
      }
    }
  }
  return item.component;
};

export const checkSpecialScreens = (): React.FC | false => {
  switch ($specialScreensStore.lastScreen) {
    case $SERVER_ERRORS.ERR_NETWORK:
      return ErrorNetworkScreen;
    default:
      return false;
  }
};
