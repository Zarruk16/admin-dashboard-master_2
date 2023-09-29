import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import urls from "../../api/urls";
import useAPI from "./useAPI";
import store from "../../utils/store";
import { toast } from "react-toastify";

function useAuth(props) {
  const { setUser } = useContext(AppContext);
  const { get, isLoading, post } = useAPI();

  const login = async (fdata) => {
    const { error, data } = await post(urls.admin.auth.login, fdata);
    if (error) return toast.warn(error.message);
    store.setTokens(data.data.tokens);
    setUser(data.data.profile);
    window.location = "/";
  };

  const restoreUser = async (cb) => {
    const token = store.getAccessToken();
    if (!token) {
      if (typeof cb === "function") return cb(null);
      return null;
    }
    const response = await get(urls.admin.profile.me);
    if (typeof cb === "function") {
      return cb(
        response.error || !response.data ? null : response.data.data.profile
      );
    }
    if (response.error || !response.data) return null;
    return response.data.data.profile;
  };

  const logout = () => {
    setUser(null);
    store.removeTokens();
  };

  return { login, isLoading, restoreUser, logout };
}

export default useAuth;
