export const setAuthToken = (token: string) => {
  localStorage.setItem("authToken", token);
};

export const getAuthToken = () => {
  localStorage.getItem("authToken");
};
