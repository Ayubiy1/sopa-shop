import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { useDebounce, useLocalStorageState } from "ahooks";
import type { MenuProps } from "antd";
import { Button, Drawer, Input, Menu } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import { useState } from "react";
import { useNavigate } from "react-router";
import { setSearch } from "../slices/store";
import { useDispatch, useSelector } from "react-redux";

const { Search } = Input;

const Header = () => {
  const state = useSelector((state: string) => state?.search);

  const dispatch = useDispatch();

  const [current, setCurrent] = useLocalStorageState<string | undefined>(
    "Menus",
    {
      defaultValue: "Men",
    }
  );

  const [value, setValue] = useState<string>();
  const debouncedValue = useDebounce(value, { wait: 500 });
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        {/* logo */}
        <span>
          <svg
            width="144"
            height="24"
            viewBox="0 0 144 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.0762 12.6899C33.0762 18.3395 28.379 22.9599 22.5342 22.9599C16.6894 22.9599 11.9922 18.3395 11.9922 12.6899C11.9922 7.0403 16.6894 2.41992 22.5342 2.41992C28.379 2.41992 33.0762 7.0403 33.0762 12.6899Z"
              fill="white"
              stroke="#02021D"
              strokeWidth="2"
            />
            <path
              d="M27.5801 12.6899C27.5801 18.3395 22.8829 22.9599 17.0381 22.9599C11.1933 22.9599 6.49609 18.3395 6.49609 12.6899C6.49609 7.0403 11.1933 2.41992 17.0381 2.41992C22.8829 2.41992 27.5801 7.0403 27.5801 12.6899Z"
              fill="white"
              stroke="#02021D"
              strokeWidth="2"
            />
            <path
              d="M23.084 12.6899C23.084 18.9142 17.9164 23.9599 11.542 23.9599C5.16752 23.9599 0 18.9142 0 12.6899C0 6.46567 5.16752 1.41992 11.542 1.41992C17.9164 1.41992 23.084 6.46567 23.084 12.6899Z"
              fill="#02021D"
            />
            <path
              d="M56.69 23.04C55.233 23.04 53.979 22.8721 52.928 22.5362C51.877 22.2003 50.9097 21.7656 50.0259 21.232L48.3419 22.6547H47.2671V16.4305H48.3778C48.6644 17.3987 49.1302 18.3076 49.7751 19.1573C50.4439 20.007 51.3396 20.6985 52.4622 21.232C53.5849 21.7458 54.9583 22.0027 56.5825 22.0027C57.9201 22.0027 59.0308 21.8248 59.9146 21.4692C60.8222 21.1135 61.503 20.6294 61.9568 20.0168C62.4345 19.3845 62.6734 18.693 62.6734 17.9421C62.6734 17.1715 62.4584 16.5491 62.0284 16.0748C61.5985 15.6006 61.0372 15.2351 60.3445 14.9782C59.6757 14.7016 58.9472 14.4842 58.159 14.3261C57.3946 14.168 56.6661 14.0198 55.9734 13.8815C54.3014 13.5259 52.8325 13.0615 51.5665 12.4885C50.3006 11.8957 49.3093 11.135 48.5927 10.2063C47.9001 9.27758 47.5537 8.12165 47.5537 6.73849C47.5537 5.21701 47.9478 3.96229 48.7361 2.97432C49.5243 1.98634 50.5633 1.25524 51.8531 0.781018C53.143 0.287032 54.5164 0.0400391 55.9734 0.0400391C57.0483 0.0400391 58.0037 0.168475 58.8397 0.425347C59.6996 0.68222 60.6072 1.05765 61.5627 1.55164L62.96 0.306792H64.0707V6.35318H62.9958C62.3031 4.47604 61.3716 3.13239 60.2012 2.32225C59.0308 1.49236 57.5976 1.07741 55.9018 1.07741C54.8747 1.07741 53.9312 1.21573 53.0713 1.49236C52.2353 1.74923 51.5665 2.12466 51.0649 2.61865C50.5633 3.11263 50.3125 3.69554 50.3125 4.36736C50.3125 4.99966 50.5275 5.52329 50.9574 5.93823C51.3874 6.33342 51.9487 6.64957 52.6414 6.88669C53.3341 7.1238 54.0745 7.32139 54.8627 7.47947C55.651 7.63755 56.4034 7.78574 57.1199 7.92406C58.9352 8.27973 60.4639 8.77372 61.706 9.40602C62.948 10.0186 63.8915 10.8287 64.5364 11.8364C65.1814 12.8442 65.5038 14.1088 65.5038 15.6302C65.5038 17.9619 64.7395 19.7797 63.2108 21.0839C61.706 22.388 59.5324 23.04 56.69 23.04Z"
              fill="#02021D"
            />
            <path
              d="M81.1371 23.04C79.274 23.04 77.5303 22.7239 75.9061 22.0916C74.3058 21.4593 72.8965 20.5997 71.6784 19.513C70.4841 18.4262 69.5406 17.1912 68.8479 15.8081C68.1791 14.4249 67.8447 12.9726 67.8447 11.4511C67.8447 9.92964 68.1791 8.4872 68.8479 7.1238C69.5406 5.74064 70.4841 4.52543 71.6784 3.47818C72.8965 2.41117 74.3058 1.5714 75.9061 0.958852C77.5303 0.34631 79.274 0.0400391 81.1371 0.0400391C83.0002 0.0400391 84.7438 0.34631 86.368 0.958852C87.9923 1.5714 89.4015 2.41117 90.5958 3.47818C91.814 4.52543 92.7575 5.74064 93.4263 7.1238C94.1189 8.4872 94.4653 9.92964 94.4653 11.4511C94.4653 12.9726 94.1189 14.4249 93.4263 15.8081C92.7575 17.1912 91.814 18.4262 90.5958 19.513C89.4015 20.5997 87.9923 21.4593 86.368 22.0916C84.7438 22.7239 83.0002 23.04 81.1371 23.04ZM81.1013 22.0027C82.3194 22.0027 83.3465 21.8545 84.1825 21.5581C85.0185 21.2419 85.6873 20.6985 86.1889 19.9279C86.7144 19.1573 87.0846 18.0903 87.2996 16.7269C87.5384 15.3635 87.6579 13.6247 87.6579 11.5104C87.6579 9.39614 87.5384 7.66719 87.2996 6.32354C87.0846 4.96014 86.7144 3.90301 86.1889 3.15215C85.6873 2.38153 85.0185 1.84803 84.1825 1.55164C83.3465 1.23549 82.3194 1.07741 81.1013 1.07741C79.907 1.07741 78.8918 1.23549 78.0558 1.55164C77.2437 1.84803 76.5869 2.37165 76.0853 3.12251C75.5837 3.87337 75.2134 4.9305 74.9746 6.2939C74.7596 7.63755 74.6521 9.35662 74.6521 11.4511C74.6521 13.6049 74.7596 15.3734 74.9746 16.7565C75.2134 18.1199 75.5837 19.1869 76.0853 19.9576C76.6107 20.7084 77.2795 21.2419 78.0917 21.5581C78.9277 21.8545 79.9309 22.0027 81.1013 22.0027Z"
              fill="#02021D"
            />
            <path
              d="M105.473 12.5181V11.629H108.447C109.761 11.629 110.824 11.4906 111.636 11.214C112.448 10.9176 113.045 10.3841 113.427 9.61349C113.809 8.82311 114.001 7.68695 114.001 6.20499C114.001 4.80207 113.845 3.74493 113.535 3.03359C113.224 2.32225 112.758 1.83815 112.137 1.58128C111.54 1.3244 110.788 1.19597 109.88 1.19597H96.6237V0.306792H111.672C113.391 0.306792 114.932 0.563664 116.294 1.07741C117.679 1.59116 118.778 2.3025 119.59 3.21143C120.402 4.10061 120.808 5.1281 120.808 6.2939C120.808 7.51899 120.306 8.60576 119.303 9.55421C118.324 10.4829 116.915 11.214 115.075 11.7475C113.236 12.2613 111.027 12.5181 108.447 12.5181H105.473ZM96.6237 22.6547V21.7656H109.916V22.6547H96.6237ZM100.027 22.2101V0.306792H105.688V22.2101H100.027Z"
              fill="#02021D"
            />
            <path
              d="M135.509 22.2101L128.952 7.36091H128.809L128.594 6.26427L131.03 0.0400391H131.962L141.707 22.2101H135.509ZM117.308 22.6547V21.7656H126.05V22.6547H117.308ZM123.721 16.6083V15.7488H136.046V16.6083H123.721ZM131.567 22.6547V21.7656H144V22.6547H131.567ZM120.461 22.2101L131.03 0.0400391H131.962L130.098 4.75267L121.643 22.2101H120.461Z"
              fill="#02021D"
            />
          </svg>
        </span>

        <div className="hidden lg:block">
          <Search
            placeholder="Mahsulotni 1 kunda yetkazib bermaiz"
            enterButton
            onChange={(e) => {
              dispatch(setSearch(e.target.value));
            }}
          />
        </div>

        <div className="flex items-center gap-5">
          <p className="cursor-pointer hidden sm:block">Support</p>

          <span className="cursor-pointer" onClick={() => navigate("/login")}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="#02021D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="#02021D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <span className="cursor-pointer hidden sm:block">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
                stroke="#02021D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="#02021D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
                stroke="#02021D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <Button className="flex items-center lg:hidden" onClick={showDrawer}>
            <MenuFoldOutlined />
          </Button>
        </div>
      </div>

      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Menu onClick={onClick} selectedKeys={[`${current}`]} className="">
          <MenuItem key={"All"} onClick={() => navigate("/")}>
            <SettingOutlined />
            All
          </MenuItem>

          <MenuItem key={"Men"} onClick={() => navigate("men")}>
            <MailOutlined />
            Men
          </MenuItem>

          <MenuItem key={"Women"} onClick={() => navigate("men")}>
            <AppstoreOutlined />
            Women
          </MenuItem>

          <MenuItem key={"About"} onClick={() => navigate("men")}>
            <MailOutlined />
            About
          </MenuItem>
        </Menu>

        <div className="flex gap-10 justify-center items-center mt-5">
          <p className="cursor-pointer hidden sm:block">Support</p>

          <span className="cursor-pointer" onClick={() => navigate("/login")}>
            Login
          </span>
        </div>
      </Drawer>
    </>
  );
};
export default Header;
