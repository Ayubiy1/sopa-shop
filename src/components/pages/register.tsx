import { useLocalStorageState } from "ahooks";
import { Form, Input, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { CounterState } from "../slices/store";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import { api } from "../../api";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

interface NewUserType {
  name: string;
  userName: string;
  password: string | number;
  phoneNomber: string | number;
  rol: string;
  productCount: number;
  date: string;
}

const Register = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const notify = () => toast.warning("Parolni 8 yoki undan koproq kiriting!");

  const { mutate: postData } = useMutation(
    (newUser: NewUserType) => {
      return api.post("/users", newUser);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("listsJson");
        navigate("/login");
      },
    }
  );

  const onFinissh = (values: {
    name: string;
    userName: string;
    password: number | string;
    phoneNomber: number | string;
  }) => {
    const newUser: NewUserType = {
      name: values.name,
      userName: values.userName,
      password: values.password,
      phoneNomber: values.phoneNomber,
      productCount: 0,
      date: `${new Date()}`,
      rol: "user",
    };
    const passwordLength =
      typeof values.password === "string"
        ? values.password.length
        : String(values.password).length;

    console.log(newUser);

    if (passwordLength > 7) {
        postData(newUser);
    } else {
      notify();
    }
  };

  return (
    <div className="px-5 sm:px-24 lg:px-44">
      <ToastContainer />

      <button
        className="text-[20px] md:text-[30px]"
        onClick={() => navigate("/")}
      >
        <ArrowLeftOutlined />
      </button>

      <div className="flex items-center justify-center mt-10">
        <div>
          <h3 className="text-[#02021D] text-[40px] font-bold">Register</h3>
          <div>
            <Form layout="vertical" onFinish={(values) => onFinissh(values)}>
              <Form.Item
                name={"name"}
                label="Ism familyangizni kiriting"
                rules={[
                  {
                    required: true,
                    message: "Iltimos Ism familyangizni kiriting!",
                  },
                ]}
              >
                <Input
                  value={"a"}
                  className="w-[400px]"
                  placeholder="Full name"
                />
              </Form.Item>

              <Form.Item
                name={"userName"}
                label="User name ni kiriting"
                rules={[
                  { required: true, message: "Iltimos userName kiriting!" },
                ]}
              >
                <Input
                  value={"a"}
                  className="w-[400px]"
                  placeholder="User name"
                />
              </Form.Item>

              <Form.Item
                name={"phoneNomber"}
                label="Tel nomer ni kiriting"
                rules={[
                  { required: true, message: "Iltimos userName kiriting!" },
                ]}
              >
                <Input
                  value={"a"}
                  className="w-[400px]"
                  placeholder="998 90 111 22 33"
                />
              </Form.Item>

              <Form.Item
                name={"password"}
                label="Parol kiriting"
                rules={[{ required: true, message: "Iltimos parol ornating!" }]}
              >
                <Input.Password
                  value={"a"}
                  className="w-[400px]"
                  placeholder="password"
                  type="password"
                />
              </Form.Item>

              <Form.Item className="text-right">
                <Button
                  htmlType="submit"
                  className="bg-[#02021D] text-white w-[100%] rounded-2xl h-[40px]"
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
            <div className="flex gap-4 items-center">
              <p className="m-0">Already hav an account?</p>
              <p
                className="m-0 cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Sign in
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
