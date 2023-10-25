import { Button, Table, Tag } from "antd";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { api } from "../../api";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import EditProduct from "./edit-products";
import { useState } from "react";
import { UsersType } from "./users";
import { ToastContainer, toast } from "react-toastify";

export interface ProductType {
  id?: number | string;
  name?: string;
  userName?: string;
  password?: string | number;
  phoneNomber?: string | number;
  date?: string | number;
  productCount: string | number;
  price: number;
  superPirce: string | number;
  buyCount: number;
  comments: any;
  img: string;
  type: string;
  status: string;
  data: string;
  poductInfo: string;
}

const Contents = () => {
  const queryClient = useQueryClient();
  const notify = () => toast.success("Mahsulot ochirildi!");
  const notifyError = () =>
    toast.error("Mahsulot ochirilishda xatolik yuz berdi!");

  const { data, isLoading } = useQuery("products-admin", () => {
    return api.get("/products");
  });

  const { mutate, isLoading: isLoadingDelete } = useMutation(
    (deleteId) => {
      return api.delete(`/products/${deleteId}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("products-admin");
        notify();
      },
      onError: () => {
        notifyError();
      },
    }
  );

  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState<number>(1);
  const [userInfo, setUserInfo] = useState({});

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

      <Table
        columns={columns}
        dataSource={data?.data}
        pagination={{
          pageSize: 5,
        }}
        loading={isLoading || isLoadingDelete}
        scroll={{ y: 400 }}
      />

      <EditProduct
        userInfo={userInfo}
        open={open}
        setOpen={setOpen}
        userId={userId}
      />
    </>
  );
};

export default Contents;
