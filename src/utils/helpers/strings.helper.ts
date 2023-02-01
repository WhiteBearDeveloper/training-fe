export const joinFullName = (
  firstName?: string,
  middleName?: string,
  lastName?: string,
): string => {
  return `${firstName ? `${firstName} ` : ""}${
    middleName ? `${middleName} ` : ""
  }${lastName ? `${lastName}` : ""}`;
};
