import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

let logoutTimer;

export const useAuth = () => {
  const [token, setToken] = useState(false);
  const [name, setName] = useState("");
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const login = useCallback((uid, token, name, image, expirationDate) => {
    setToken(token);
    setUserId(uid);
    setName(name);
    setImage(image);

    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        image: image,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    setName(null);
    setImage(null);
    localStorage.removeItem("userData");
    navigate("/");
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        storedData.name,
        storedData.image,

        new Date(storedData.expiration)
      );
    }
  }, [login]);

  return { token, login, logout, userId, name, image };
};
