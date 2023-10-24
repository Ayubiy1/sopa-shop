import { Button, Drawer, Form, Input } from "antd";
import { UsersType } from "./users";
import { api } from "../../api";
import { useMutation, useQuery, useQueryClient } from "react-query";

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
  const queryClient = useQueryClient();
  const [form] = Form.useForm();

  // Get data Users
  const { data, isLoading } = useQuery("users-admin", () => {
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
        setOpen(false);
      },
    }
  );

  const onFinish = (values: UsersType) => {
    const newData: UsersType = {
      ...values,
      date: userInfo?.date,
      productCount: userInfo?.productCount,
    };
    mutate(newData);
  };
  return (
    <>
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
                <Form initialValues={user} onFinish={onFinish} form={form}>
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

export default EditUser;
