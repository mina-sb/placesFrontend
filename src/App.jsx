import { useEffect, useRef, useState } from "react";
import "./App.css";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { Route, Routes } from "react-router-dom";
import Auth from "./user/pages/Auth";
import Users from "./user/pages/Users";
import { useAuth } from "./shared/hooks/auth-hook";
import { AuthContext } from "./shared/context/auth-context";
import NewPlace from "./place/pages/NewPlace";
import UpdatePlace from "./place/pages/UpdatePlace";
import UserProfile from "./user/pages/UserProfile";

function App() {
  const ref = useRef();
  const { token, login, logout, userId, name, image } = useAuth();
  let routes;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

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
        image: image,
        login: login,
        logout: logout,
      }}
    >
      <MainNavigation showMenu={isMenuOpen} setOpen={openMenu} />
      <div ref={ref}>
        <main>{routes}</main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
