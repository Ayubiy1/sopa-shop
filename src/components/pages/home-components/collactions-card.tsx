import { useMutation, useQuery } from "react-query";
import { api } from "../../../api";
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

const Collections = () => {
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
        <div className="text-start flex items-center justify-between">
          <h1 className="text-[30px] font-bold">All collections</h1>
          <p>Shop Now</p>
        </div>
        <div className="text-start flex flex-wrap items-start justify-center">
          {data?.data.map((item: Products) => {
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

export default Collections;
