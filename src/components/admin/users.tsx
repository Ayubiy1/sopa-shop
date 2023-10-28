import { Button, Layout, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { api } from "../../api";
import { useState } from "react";
import EditUser from "./edit-user";
import { ToastContainer, toast } from "react-toastify";
import dayjs from "dayjs";

const { Content } = Layout;

type FieldType = {
  name?: string;
  username?: string;
  password?: string;
  phoneNomber?: number | string;
};

export interface UsersType {
  id?: number | string;
  name?: string;
  userName?: string;
  password?: string | number;
  phoneNomber?: string | number;
  date?: string | number;
  productCount: string | number;
}

const Users = () => {
  const quertClinet = useQueryClient();
  const notify = () => toast.success("Mahsulot ochirildi!");
  const notifyError = () =>
    toast.error("Mahsulot ochirilishda xatolik yuz berdi!");

  // Get data Users
  const { data, isLoading } = useQuery("users-admin", () => {
    return api.get("/users?rol=user");
  });

  const { mutate, isLoading: isLoadingDelete } = useMutation(
    (deleteId) => {
      return api.delete(`/users/${deleteId}`);
    },
    {
      onSuccess: () => {
        quertClinet.invalidateQueries(["users-admin"]);
        notify();
      },
    }
  );

  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState<number>(1);
  const [userInfo, setUserInfo] = useState<UsersType>({
    id: 1,
    name: "Abdulloh Umarov",
    userName: "Abu",
    password: 12121,
    phoneNomber: 999999999,
    date: "23-10-2023",
    productCount: 3,
  });

  const columns = [
    {
      title: "Ismi",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Foldalanuvchi nomi",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Tel raqam",
      dataIndex: "phoneNomber",
      key: "phoneNomber",
      render: (text: string) => <>+{text}</>,
    },
    {
      title: "Kirgan sana",
      dataIndex: "date",
      key: "date",
      render: (text: string) => <>{dayjs(text).format("DD.MM.YY")}</>,
    },
    {
      title: "Buyurtmalar soni",
      dataIndex: "productCount",
      key: "productCount",
      render: (text: number) => <>{text} ta</>,
    },
    {
      title: "Amallar",
      render: (row: any) => (
        <div className="flex gap-3 items-center">
          <Button
            type="primary"
            className="flex items-center"
            onClick={() => {
              setOpen(true);
              setUserId(row?.id);
              setUserInfo(row);
            }}
          >
            <EditOutlined />
          </Button>

          <Button
            type="primary"
            danger
            className="flex items-center"
            onClick={() => mutate(row?.id)}
          >
            <DeleteOutlined />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <ToastContainer />
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
          background: "#fff",
          overflowX: "scroll",
        }}
      >
        <Table
          columns={columns}
          dataSource={data?.data}
          pagination={{
            pageSize: 5,
          }}
          loading={isLoading || isLoadingDelete}
        />
      </Content>

      <EditUser
        userInfo={userInfo}
        open={open}
        setOpen={setOpen}
        userId={userId}
      />
    </>
  );
};

export default Users;
