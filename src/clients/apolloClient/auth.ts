import { ApolloError } from "@apollo/client";
import { refreshingClient } from ".";
import store from "../../store";
import { getToken, isTokenValid, setToken } from "../../utils";

/* const refreshToken = async () => {
  try {
      const { data } = await refreshingClient.mutate({
          mutation: REFRESH_TOKEN,
      });
      const response: refreshToken_refreshToken = data.refreshToken;
      return response.token;
  } catch (err) {
      const error: ApolloError = err;
      if (!error.networkError) {
          store.dispatch(logoutUser());
          console.log("session closed", error);
          return "";
      }
      return getToken();
  }
}; */

export const getAuthentication = async () => {
    /*const isValid = isTokenValid(await getToken());
    if (!isValid) {
        const newToken = await refreshToken();
        setToken(newToken);
    }*/
    const token = await getToken();
    return token ? `Bearer ${token}` : "";
};