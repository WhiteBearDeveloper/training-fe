export const checkNullish = <T>(value: T): boolean => {
  return value !== null && value !== undefined;
};
