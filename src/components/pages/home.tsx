import "./loading.css";
import Collections from "./home-components/collactions-card";
import Discount from "./home-components/discount-products";
import ManAndWoman from "./home-components/women-and-man";
import { useSelector } from "react-redux";
import { CounterState } from "../slices/store";
import Corusell from "./home-components/corusell";

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
  const stateLoading = useSelector((state: CounterState) => state.loadingg);
  console.log(stateLoading);

  return (
    <>
      <div className="hidden md:block">
        <Corusell />
      </div>
      <Collections />

      <div className="hiddenmd:block">
        <div className="bg-[#02021D] text-white">
          <Discount />
        </div>
        {stateLoading == false && (
          <>
            <ManAndWoman />
            <footer>Free US shipping on order $80+</footer>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
