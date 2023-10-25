import { Button, Drawer, Form, Input, Select } from "antd";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { api } from "../../api";
import { ToastContainer, toast } from "react-toastify";

export interface ProductType {
  name?: string;
  price?: number;
  superPirce?: number;
  buyCount?: number;
  poductInfo?: string;
  comments?: any;
  img?: string;
  type?: string;
  status?: string;
  data?: string;
}

const NewProduct = () => {
  const notify = () => toast.success("Yangi mahsulot qo'shildi!");
  const notifyError = () => toast.error("Yangi mahsulot qo'shilmadi!");

  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    (newData: ProductType) => {
      console.log(newData);

      return api.post("/products", newData);
    },
    {
      onSuccess() {
        queryClient.invalidateQueries("products-admin");
        setOpen(false);
        notify();
      },

      onError() {
        notifyError();
      },
    }
  );

  const onFinish = (vaulus: any) => {
    const newData: ProductType = {
      ...vaulus,
      comments: [],
      status: "Old",
      data: new Date(),
      buyCount: 0,
    };

    mutate(newData);
  };

  return (
    <div className="mb-5 text-right">
      <ToastContainer />

      <Button onClick={() => setOpen(true)} type="primary">
        New prodduct
      </Button>

      <Drawer
        title="New Product"
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="name" label="Mahsulot nomi:">
            <Input />
          </Form.Item>

          <Form.Item name="img" label="Mahsulot rasmi:">
            <Input />
          </Form.Item>

          <Form.Item name={"price"} label="Mahsulot narxi:">
            <Input />
          </Form.Item>

          <Form.Item name="superPirce" label="Mahsulot aksiya narxi:">
            <Input />
          </Form.Item>

          <Form.Item name="type" label="Mahsulot turi:">
            <Select
              options={[
                { value: "Men", label: "Erkaklar" },
                { value: "Women", label: "Ayollar" },
              ]}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default NewProduct;
