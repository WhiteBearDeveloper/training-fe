import { registeredStates } from "./model";

export const resetRegisteredStates = (): void => {
  registeredStates.forEach((item) => item.reset());
};
