export const setAuthToken = (token: string): void => {
  localStorage.setItem("authToken", token);
};

export const getAuthToken = (): string | null => {
  return localStorage.getItem("authToken");
};

export const setAuthEmail = (email: string): void => {
  localStorage.setItem("email", email);
};

export const getAuthEmail = (): string | null => {
  return localStorage.getItem("email");
};

export const clearAuthStorage = (): void => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("email");
};
