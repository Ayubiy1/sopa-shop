import { useMutation, useQuery } from "react-query";
import { api } from "../../../api";
import { useState, useEffect } from "react";
import "../loading.css";
import axios from "axios";

export interface Comments {
  id: number;
  title: string;
  name: string;
}

export interface Products {
  id: number;
  name: string;
  price: number;
  products: number;
  buyCount: number;
  poductInfo: string;
  comments: Comments[];
  img: string;
  type: string;
  status: string;
  data: string;
  superPirce: number | null;
}

const Discount = () => {
  const { data, isLoading, isError } = useQuery("products", () => {
    return api.get("/products");
  });

  const { data: dataa } = useQuery("productsa", () => {
    return axios.get("http://192.168.1.48:8080/home");
  });

  const { mutate } = useMutation(() => {
    return axios.post("http://192.168.1.48:8080/home", {
      id: 2,
      name: "Test",
    });
  });

  const [randNumber, setRandNumber] = useState(4);

  let a = Math.floor(Math.random() * 9);
  let kattaSon = a + 1;

  if (isLoading) {
    return (
      <div>
        <div id="spinner" className="active">
          <span id="first" className="ball"></span>
          <span id="second" className="ball"></span>
          <span id="third" className="ball"></span>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="mt-20 text-center p-4 sm:px-8 lg:px-16 xl:px-24">
        <h1 className="text-[50px] font-bold text-center mb-10 mt-20">
          Discount products
        </h1>

        <div className="text-start flex items-start justify-center">
          <div className="text-start flex flex-col items-start justify-center">
            {data?.data
              .filter((i: Products) => i.superPirce !== null)
              .slice(1, 3)
              .map((item: Products) => {
                return (
                  <div
                    className="m-2 bg-[#f2f2f2] h-[400px] w-[300px] rounded-lg cursor-pointer py-2 px-4 flex flex-col justify-end"
                    key={item?.id}
                  >
                    <img src={item?.img} alt="" />
                    <div>
                      <p>{item?.name}</p>
                      <div className="flex items-center justify-between mt-2">
                        <p
                          className="text-[#75869C]"
                          style={{ fontFamily: "Rubik" }}
                        >
                          {item?.data}
                        </p>
                        <p
                          className="text-[#75869C]"
                          style={{ fontFamily: "Rubik" }}
                        >
                          {item?.superPirce == null ? (
                            <>{item?.price}$</>
                          ) : (
                            <>
                              {item?.superPirce}$
                              <i
                                className="text-red-600 ms-1"
                                style={{ textDecoration: "line-through" }}
                              >
                                {item?.price}$
                              </i>
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="hidden lg:block">
            {data?.data
              .filter((i: Products) => i.superPirce !== null)
              .slice(1, 2)
              .map((item: Products) => {
                return (
                  <div
                    className="m-2 bg-[#f2f2f2] h-[810px] w-[700px] rounded-lg cursor-pointer py-2 px-4 flex flex-col justify-end"
                    key={item?.id}
                  >
                    <img src={item?.img} alt="" />
                    <div>
                      <p>{item?.name}</p>
                      <div className="flex items-center justify-between mt-2">
                        <p
                          className="text-[#75869C]"
                          style={{ fontFamily: "Rubik" }}
                        >
                          {item?.data}
                        </p>
                        <p
                          className="text-[#75869C]"
                          style={{ fontFamily: "Rubik" }}
                        >
                          {item?.superPirce == null ? (
                            <>{item?.price}$</>
                          ) : (
                            <>
                              {item?.superPirce}$
                              <i
                                className="text-red-600 ms-1"
                                style={{ textDecoration: "line-through" }}
                              >
                                {item?.price}$
                              </i>
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <button
          className="bg-[#C1F651] mt-5 text-center px-8 py-2 rounded-full"
          style={{ fontFamily: "Rubik" }}
        >
          Shop Now
        </button>
      </div>
    </>
  );
};

export default Discount;
