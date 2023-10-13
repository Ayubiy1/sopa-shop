import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Menu from "./components/pages/menu";
import { useQuery } from "react-query";
import { Outlet, useLocation } from "react-router";
import { api } from "./api";
import Login from "./components/pages/login";

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
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
