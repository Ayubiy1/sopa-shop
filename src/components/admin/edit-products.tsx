import { Button, Drawer, Form, Input } from "antd";
import { UsersType } from "./users";
import { api } from "../../api";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductType } from "./content";
import { useEffect } from "react";

const EditProduct = ({
  userInfo,
  open,
  setOpen,
  userId,
}: {
  userInfo: any;
  open: boolean;
  setOpen: any;
  userId: number;
}) => {
  const notify = () => toast.success("Mahsulot ma'lumoti o'zgartirildi!");
  const queryClient = useQueryClient();
  const [form] = Form.useForm();

  // Get data Products
  const { data, isLoading } = useQuery(["products-admin"], () => {
    return api.get("/products");
  });
  // Put data Product
  const { mutate, isLoading: isLoadingPut } = useMutation(
    (newData: UsersType) => {
      return api.put(`/products/${userId}`, newData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["products-admin"]);
        notify();
        setOpen(false);
      },
    }
  );

  useEffect(() => {
    form.setFieldsValue(userInfo);
  }, [userInfo]);

  const onFinish = (values: ProductType) => {
    const newData: ProductType = {
      id: userInfo?.id,
      ...values,
      poductInfo: userInfo?.poductInfo,
      comments: userInfo?.comments,
      img: userInfo?.img,
      data: userInfo?.data,
      productCount: userInfo?.productCount,
      type: userInfo?.type,
      status: userInfo?.status,
    };

    mutate(newData);
  };
  return (
    <>
      <ToastContainer />
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        {data?.data
          .filter((i: ProductType) => i.id == userId)
          .map((user: ProductType) => {
            return (
              <>
                <Form onFinish={onFinish} form={form}>
                  <Form.Item name="name">
                    <Input />
                  </Form.Item>

                  <Form.Item name="price">
                    <Input />
                  </Form.Item>

                  <Form.Item name={"superPirce"}>
                    <Input />
                  </Form.Item>

                  <Form.Item name="buyCount">
                    <Input />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      disabled={isLoading}
                      type="primary"
                      htmlType="submit"
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </>
            );
          })}
      </Drawer>
    </>
  );
};

export default EditProduct;
