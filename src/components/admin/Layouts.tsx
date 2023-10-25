import { Layout, theme } from "antd";
import Contents from "./content";
import NewProduct from "./new-product";

const { Content } = Layout;

const Layouts = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          overflowX: "scroll",
          position: "relative",
        }}
      >
        <NewProduct />

        <Contents />
      </Content>
    </>
  );
};

export default Layouts;
