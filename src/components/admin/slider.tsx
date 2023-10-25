import { Menu } from "antd";
import { useSelector } from "react-redux";
import { CounterState } from "../slices/store";
import Sider from "antd/es/layout/Sider";
import MenuItem from "antd/es/menu/MenuItem";
import { useLocation, useNavigate } from "react-router";
import { useLocalStorageState } from "ahooks";

const Siders = () => {
  const collapsed = useSelector((state: CounterState) => state.collapsed);
  const navigate = useNavigate();
  const location = useLocation();

  const [activeMenu, setActiveMenue] = useLocalStorageState("menus", {
    defaultValue: 1,
  });

  // console.log(location.pathname.slice(7, location.pathname.length));
  const activeMenuItem = location.pathname.slice(7, location.pathname.length);

  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[activeMenuItem]}>
          <MenuItem
            key={`products`}
            onClick={() => {
              navigate("products");
            }}
          >
            Mahsulotlar
          </MenuItem>
          <MenuItem
            key={`users`}
            onClick={() => {
              navigate("users");
            }}
          >
            Foydalanuvchilar
          </MenuItem>
          <MenuItem
            key={`admins`}
            onClick={() => {
              navigate("admins");
            }}
          >
            Adminlar
          </MenuItem>
        </Menu>
      </Sider>
    </>
  );
};

export default Siders;
