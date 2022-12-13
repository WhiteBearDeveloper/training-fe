import { prefix } from "./helpers";

export const getRegistrationEndpoint = () => {
  return `${prefix}/registration`;
};

export const getLoginEndpoint = () => {
  return `${prefix}/login`;
};
