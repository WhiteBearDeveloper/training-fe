import { $userStore } from "@store/user";
import { $notificationsStore } from "./notifications";
import { $profileStore } from "./profile";

export const registeredStates = [
  $userStore,
  $notificationsStore,
  $profileStore,
];
