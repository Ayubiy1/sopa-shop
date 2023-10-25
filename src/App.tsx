import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Menu from "./components/pages/menu";
import Login from "./components/pages/login";
import Home from "./components/pages/home";
import Admin from "./components/admin";
import Layouts from "./components/admin/Layouts";
import Users from "./components/admin/users";
import AdminPage from "./components/admin/admins";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<>Men</>} />
          <Route path="/women" element={<>Women</>} />
        </Route>

        <Route path="admin" element={<Admin />}>
          <Route path="products" element={<Layouts />} />
          <Route path="users" element={<Users />} />
          <Route path="admins" element={<AdminPage />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
