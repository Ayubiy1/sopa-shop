import Header from "./header";
import { Outlet } from "react-router";

const Menu = () => {
  return (
    <>
      <div className="">
        <div className="p-4 sm:px-8 lg:px-16 xl:px-24">
          <Header />
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default Menu;
