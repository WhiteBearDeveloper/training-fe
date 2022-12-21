export const setAuthToken = (token: string) => {
  localStorage.setItem('authToken', token)
}

export const getAuthToken = (): string | null => {
  return localStorage.getItem('authToken')
}
