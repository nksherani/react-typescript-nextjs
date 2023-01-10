import { TokenData } from "../types/auth";
import { login } from "../store/auth-slice";
import Router from "next/router";

const tokenKey = "access_token";
const expirationKey = "expiration";
export const saveToken = (tokenData: TokenData) => {
  localStorage.setItem(tokenKey, tokenData.token);
  localStorage.setItem(expirationKey, tokenData.expiration);
};

export const getTokenData = (): TokenData => {
  const accessToken = localStorage.getItem(tokenKey) || "";
  const expiration = localStorage.getItem(expirationKey) || "";

  if (!accessToken || !expiration) {
    throw new Error("access token not found");
  }

  return {
    token: accessToken,
    expiration,
  };
};

export const isAuthenticatedFromLS = (): boolean => {
  const accessToken = localStorage.getItem(tokenKey) || "";
  const expiration = localStorage.getItem(expirationKey) || "";

  if (!accessToken || !expiration) {
    return false;
  }

  return true;
};

export const updateState = (dispatch: any, isAuthenticated: boolean) => {
  dispatch(
    login({
      userdata: {
        name: "naveed",
        isAuthenticated,
      },
    })
  );
};

export const updateStateFromLocalStorage = (dispatch: any) => {
  if (isAuthenticatedFromLS()) {
    dispatch(
      login({
        userdata: {
          name: "naveed",
          isAuthenticated: true,
        },
      })
    );
  } else {
    Router.push("/login");
  }
};
