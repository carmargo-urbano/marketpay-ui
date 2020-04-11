export const TOKEN_KEY = "quickpick-token";
export const USER_NAME = '';
export const USER_ID = '';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUserName = () => localStorage.getItem(USER_NAME);
export const getUserId = () => localStorage.getItem(USER_ID);

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_NAME);
  localStorage.removeItem(USER_ID);
};
export const setUserName = name => {
  localStorage.setItem(USER_NAME, name);
};
export const setUserId = id => {
  localStorage.setItem(USER_ID, id);
};