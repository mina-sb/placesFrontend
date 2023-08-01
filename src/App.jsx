import { useEffect, useState } from "react";
import "./App.css";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { Route, Routes } from "react-router-dom";
import Auth from "./user/pages/Auth";
import Users from "./user/pages/Users";
import { useAuth } from "./shared/hooks/auth-hook";
import { AuthContext } from "./shared/context/auth-context";
import UserPlaces from "./place/pages/UserPlaces";
import NewPlace from "./place/pages/NewPlace";
import UpdatePlace from "./place/pages/UpdatePlace";
import Profile from "./user/components/ProfileHeader";
import UserProfile from "./user/pages/UserProfile";

function App() {
  const { token, login, logout, userId, name } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/:userId/places" element={<UserProfile />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" element={<UserProfile />} />
        <Route path="/auth" element={<Auth />} />]{" "}
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        userId: userId,
        token: token,
        name: name,
        login: login,
        logout: logout,
      }}
    >
      <MainNavigation />
      <main>{routes}</main>
    </AuthContext.Provider>
  );
}

export default App;
