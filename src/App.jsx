import "./App.css";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./shared/hooks/auth-hook";
import { AuthContext } from "./shared/context/auth-context";
import Main from "./Main";
import Footer from "./shared/components/Footer";
import React , {Suspense} from "react";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";

/*
import Auth from "./user/pages/Auth";
import NewPlace from "./place/pages/NewPlace";
import UpdatePlace from "./place/pages/UpdatePlace";
import UserProfile from "./user/pages/UserProfile";
import UserSetting from "./user/pages/UserSetting"; */



const UserSetting = React.lazy(() => import("./user/pages/UserSetting"));
const UserProfile = React.lazy(() => import("./user/pages/UserProfile"));
const UpdatePlace = React.lazy(() => import("./place/pages/UpdatePlace"));
const NewPlace = React.lazy(() => import("./place/pages/NewPlace"));
const Auth = React.lazy(() => import("./user/pages/Auth"));


function App() {
  const { token, login, logout, userId, name, image } = useAuth();
  let routes;

  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/:userId/places" element={<UserProfile />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="/settings/" element={<UserSetting />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:userId/places" element={<UserProfile />} />
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
        name: name,
        image: image,
        login: login,
        logout: logout,
      }}
    >
      <MainNavigation />
      <div>
        <main>
          <Suspense fallback={<div className="center">
            <LoadingSpinner />
          </div>}>{routes} </Suspense>
        </main>
      </div>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
