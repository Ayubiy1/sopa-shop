import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import Siders from "./slider";
import Layouts from "./Layouts";
import { CounterState, setCollapsed } from "../slices/store";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";

const { Header, Content } = Layout;

const Admin = () => {
  const collapsed = useSelector((state: CounterState) => state.collapsed);
  const dispatch = useDispatch();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Siders />

      <Layout className="h-[100vh]">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => {
              dispatch(setCollapsed(!collapsed));
            }}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>

        <Outlet />
      </Layout>
    </Layout>
  );
};

export default Admin;
