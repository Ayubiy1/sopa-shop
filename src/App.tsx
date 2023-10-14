import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Menu from "./components/pages/menu";
import { useQuery } from "react-query";
import { Outlet, useLocation } from "react-router";
import { api } from "./api";
import Login from "./components/pages/login";
import Home from "./components/pages/home";

function App() {
  const {
    data: dataUsers,
    isLoading: isLoadingUsers,
    isError: isErrorUsers,
  } = useQuery("users", () => api.get("/users"));

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<>Men</>} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
