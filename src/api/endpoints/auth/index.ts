import { prefix } from "./helpers";

export const getRegistrationEndpoint = (): string => {
  return `${prefix}/registration`;
};

export const getLoginEndpoint = (): string => {
  return `${prefix}/login`;
};
