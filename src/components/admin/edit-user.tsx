import { Button, Drawer, Form, Input, Select } from "antd";
import { UsersType } from "./users";
import { api } from "../../api";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useLocation } from "react-router";

export interface UserType {
  id?: number | string;
  name?: string;
  userName?: string;
  password?: string | number;
  phoneNomber?: string | number;
  date?: string | number;
  productCount: string | number;
  rol: string;
}

const EditUser = ({
  userInfo,
  open,
  setOpen,
  userId,
}: {
  userInfo: UsersType;
  open: boolean;
  setOpen: any;
  userId: number;
}) => {
  const notify = () => toast.success("Foydalanuvchi ma'lumoti o'zgartirildi!");
  const queryClient = useQueryClient();
  const [form] = Form.useForm();

  const location = useLocation();

  // Get data Users
  const { data, isLoading } = useQuery("users-admin-one", () => {
    return api.get("/users");
  });
  // Put data User
  const { mutate, isLoading: isLoadingPut } = useMutation(
    (newData: UsersType) => {
      return api.put(`/users/${userId}`, newData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users-admin");
        notify();
        setOpen(false);
      },
    }
  );

  const onFinishUser = (values: UserType) => {
    const newData: UserType = {
      ...values,
      date: userInfo?.date,
      productCount: userInfo?.productCount,
    };

    mutate(newData);
  };

  const onFinishAdmin = (values: UserType) => {
    const newData: UserType = {
      ...values,
      date: userInfo?.date,
      productCount: userInfo?.productCount,
    };
    mutate(newData);
  };

  useEffect(() => {
    form.setFieldsValue(userInfo);
  }, [userInfo]);

  return (
    <>
      <ToastContainer />

      {location.pathname.slice(7, location.pathname.length) == "users" && (
        <Drawer
          title="Basic Drawer"
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
        >
          {data?.data
            .filter((i: UsersType) => i.id == userId)
            .map((user: UsersType) => {
              return (
                <>
                  <Form onFinish={onFinishUser} form={form}>
                    <Form.Item name="name">
                      <Input />
                    </Form.Item>

                    <Form.Item name="userName">
                      <Input />
                    </Form.Item>

                    <Form.Item name="phoneNomber">
                      <Input />
                    </Form.Item>

                    <Form.Item name="password">
                      <Input />
                    </Form.Item>

                    <Form.Item name="rol">
                      <Select
                        options={[
                          { value: "admin", label: "Admin" },
                          { value: "user", label: "Foydalanuvchi" },
                        ]}
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        disabled={isLoadingPut}
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
      )}

      {location.pathname.slice(7, location.pathname.length) == "admins" && (
        <Drawer
          title="Basic Drawer"
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
        >
          {data?.data
            .filter((i: UsersType) => i.id == userId)
            .map((user: UsersType) => {
              return (
                <>
                  <Form onFinish={onFinishAdmin} form={form}>
                    <Form.Item name="name">
                      <Input />
                    </Form.Item>

                    <Form.Item name="userName">
                      <Input />
                    </Form.Item>

                    <Form.Item name="phoneNomber">
                      <Input />
                    </Form.Item>

                    <Form.Item name="password">
                      <Input />
                    </Form.Item>

                    <Form.Item name="rol">
                      <Select
                        options={[
                          { value: "admin", label: "Admin" },
                          { value: "user", label: "Foydalanuvchi" },
                        ]}
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        disabled={isLoadingPut}
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
      )}
    </>
  );
};

export default EditUser;
