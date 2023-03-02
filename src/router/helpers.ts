import { NoAccessScreen } from "@screens";
import { $userStore } from "@store/user";
import { RouteItem } from "./types";

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
