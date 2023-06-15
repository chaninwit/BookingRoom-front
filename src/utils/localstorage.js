const ACCESS_TOKEN = "accessToken";

export const setAccessToken = (token) =>
  localStorage.setItem(ACCESS_TOKEN, token);

export const setRemoveToken = () => localStorage.removeItem(ACCESS_TOKEN);
