import { User } from "@store/user";

export interface State {
  $userStore: User;
}

export interface StateClassCommon {
  reset: () => void;
}
