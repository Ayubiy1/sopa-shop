import { useLocalStorageState } from "ahooks";
import { Form, Input, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { CounterState } from "../slices/store";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import { api } from "../../api";
import { useNavigate } from "react-router";

interface NewUserType {
  name: string;
  userName: string;
  password: string | number;
}

const Login = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [changeLogin, setChangeLogin] = useLocalStorageState("changeLogin", {
    defaultValue: false,
  });

  const { mutate: postData } = useMutation(
    (newUser: NewUserType) => {
      return api.post("/users", newUser);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("listsJson");
        navigate("/");
      },
    }
  );

  const onFinissh = (values: {
    name: string;
    userName: string;
    password: number | string;
  }) => {
    const newUser: NewUserType = {
      name: values.name,
      userName: values.userName,
      password: values.password,
    };

    postData(newUser);
  };

  return (
    <div className="px-5 sm:px-24 lg:px-44">
      <button
        className="text-[20px] md:text-[30px]"
        onClick={() => navigate("/")}
      >
        <ArrowLeftOutlined />
      </button>

      <div className="flex items-center justify-center mt-10">
        {/* Login */}
        {changeLogin == false && (
          <div className="">
            <h3 className="text-[#02021D] text-[40px] font-bold">Sign in.</h3>
            <div>
              <Form>
                <Form.Item
                  name={"userName"}
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
                  name={"password"}
                  rules={[
                    {
                      required: true,
                      message: "Iltimos parolingizni kiriting!",
                    },
                  ]}
                >
                  <Input
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
                    Change
                  </Button>
                </Form.Item>
              </Form>
              <div className="flex gap-4 items-center">
                <p className="m-0">New to Sopa?</p>
                <p
                  className="m-0 cursor-pointer"
                  onClick={() => setChangeLogin(true)}
                >
                  Create an account
                </p>
              </div>
            </div>
          </div>
        )}
        {/* Register */}
        {changeLogin == true && (
          <div>
            <h3 className="text-[#02021D] text-[40px] font-bold">Register</h3>
            <div>
              <Form onFinish={(values) => onFinissh(values)}>
                <Form.Item
                  name={"name"}
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
                  name={"password"}
                  rules={[
                    { required: true, message: "Iltimos parol ornating!" },
                  ]}
                >
                  <Input
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
                  onClick={() => setChangeLogin(false)}
                >
                  Sign in
                </p>
              </div>
            </div>
            {/* Refister */}{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
