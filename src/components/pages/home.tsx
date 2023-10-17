import { useMutation, useQuery } from "react-query";
import { api } from "../../api";
import "./loading.css";
import axios from "axios";
import Corusell from "./home-components/carusel";
import Collections from "./home-components/collactions-card";
import Discount from "./home-components/discount-products";
import ManAndWoman from "./home-components/women-and-man";

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

const Home = () => {
  return (
    <>
      <Corusell />

      <Collections />

      <div className="bg-[#02021D] text-white">
        <Discount />
      </div>

      <ManAndWoman />
    </>
  );
};

export default Home;
