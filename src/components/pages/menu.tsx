import Header from "./headet";
import { Outlet, useLocation } from "react-router";
import Home from "./home";

const Menu = () => {
  return (
    <>
      <div className="">
        <div className="p-4 sm:px-8 lg:px-16 xl:px-24">
          <Header />
        </div>

        {/* <Home /> */}

        <Outlet />
      </div>
    </>
  );
};

export default Menu;
