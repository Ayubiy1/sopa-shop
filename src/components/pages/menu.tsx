import Header from "./headet";
import { Outlet, useLocation } from "react-router";

const Menu = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

export default Menu;
