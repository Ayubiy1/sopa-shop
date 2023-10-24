import { Button, Layout, Table, Tag, theme } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useQuery } from "react-query";
import { api } from "../../api";

const { Content } = Layout;

const Users = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { data, isLoading } = useQuery("products-admin", () => {
    return api.get("/products");
  });

  const columns = [
    {
      title: "Nomi",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Rasmi",
      dataIndex: "img",
      key: "img",
      render: (text: string) => <img src={text} className="w-[86px]" alt="" />,
    },
    {
      title: "Narxi",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Aksiya narxi",
      dataIndex: "superPirce",
      key: "pricsuperPirce",
      render: (text: string) => (
        <Tag color={text !== null ? "success" : "yellow"}>
          {text !== null ? text : "aksiya yo'q"}
        </Tag>
      ),
    },
    {
      title: "Sotilgan soni",
      dataIndex: "buyCount",
      key: "buyCount",
    },
    {
      title: "Amallar",
      render: () => (
        <div className="flex gap-3 items-center">
          <Button type="primary" className="flex items-center">
            <EditOutlined />
          </Button>

          <Button type="primary" danger className="flex items-center">
            <DeleteOutlined />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          overflowX: "scroll",
        }}
      >
        <Table
          columns={columns}
          dataSource={data?.data}
          pagination={{
            pageSize: 5,
          }}
          loading={isLoading}
        />
      </Content>
    </>
  );
};

export default Users;
