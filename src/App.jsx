import { useEffect, useState } from "react";
import "./App.css";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { Route, Routes } from "react-router-dom";
import Auth from "./user/pages/Auth";
import Users from "./user/pages/Users";
import { useAuth } from "./shared/hooks/auth-hook";
import { AuthContext } from "./shared/context/auth-context";

function App() {
  const { token, login, logout, userId } = useAuth();

  let routs;

  if (token) {
    routs = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    );
  } else {
    routs = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        userId: userId,
        token: token,
        login: login,
        logout: logout,
      }}
    >
      <MainNavigation />
      <main>{routs}</main>
    </AuthContext.Provider>
  );
}

export default App;
