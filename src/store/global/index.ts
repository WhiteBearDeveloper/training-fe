import { $notificationsStore } from "@store/notifications";
import { State } from "@store/types";
import { $userStore } from "@store/user";
import { createContext } from "react";

export const $globalStore = {
  $userStore,
  $notificationsStore,
};

export const GlobalStore = createContext<State>({ ...$globalStore });
