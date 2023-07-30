import { useEffect, useState } from "react";
import "./App.css";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { Route, Routes } from "react-router-dom";
import Auth from "./user/pages/Auth";
import Users from "./user/pages/Users";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const routs = isLoggedIn ? (
    <Routes>
      <Route path="/auth" element={<Users />} />
      <Route path="/" element={<Auth />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/:uid/places" element={<Auth />} />
    </Routes>
  );
  return (
    <div className="App">
      <MainNavigation />
      <main>{routs}</main>
    </div>
  );
}

export default App;
