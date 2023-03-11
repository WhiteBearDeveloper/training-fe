import { $loaderStore } from "@store/loader";
import { $notificationsStore } from "@store/notifications";
import { $profileStore } from "@store/profile";
import { State } from "@store/types";
import { $userStore } from "@store/user";
import { createContext } from "react";

export const $globalStore = {
  $userStore,
  $notificationsStore,
  $profileStore,
  $loaderStore,
};

export const GlobalStore = createContext<State>({ ...$globalStore });
