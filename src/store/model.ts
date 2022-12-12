import { $userStore } from "@store/user";

const registeredStates = [$userStore];

export const resetRegisteredStates = () => {
  registeredStates.forEach((item) => item.reset());
};
