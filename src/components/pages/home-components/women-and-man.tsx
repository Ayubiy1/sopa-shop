import { useNavigate } from "react-router";

const ManAndWoman = () => {
  const navigate = useNavigate();

  return (
    <div className="hidden md:block">
      <div className="p-4 sm:px-8 lg:px-16 xl:px-24 mt-10">
        <div
          className="m-w-[1000px] flex flex-wrap items-center justify-center shadow-md rounded-md mx-auto mb-20"
          style={{ fontFamily: "Noto Serif Lao" }}
        >
          <img
            src="https://s.alicdn.com/@sc04/kf/U08f30bddcd1749799f060884adce63841.jpg_200x200.jpg"
            alt=""
            className="w-[300px]"
          />

          <div className="bg-[#02021D] w-[350px] text-center h-[500px] flex flex-col justify-center items-center">
            <button
              className="bg-white px-4 py-2 rounded-3xl"
              onClick={() => navigate("/women")}
            >
              Our Story
            </button>
            <p className="text-white text-[56px] mt-3">SOPA</p>
          </div>

          <div className="w-[350px] text-center p-2">
            <p>
              SOPA was born out of a simple yet powerful concept - creating a
              shoe that you would choose to wear every single day, and they've
              brought this idea to life in the bustling city of New York.
            </p>

            <button
              className="bg-[#02021D] text-white px-4 py-2 rounded-3xl mt-5"
              onClick={() => navigate("/women")}
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="hidden lg:block">
          <div
            className="w-[1000px] flex items-center justify-center shadow-md rounded-md mx-auto mt-20"
            style={{ fontFamily: "Noto Serif Lao" }}
          >
            <img
              src="https://i.pinimg.com/736x/98/bc/1f/98bc1fa03a8c11af00f7f07c1bfa8dcd.jpg"
              alt=""
              className="w-[300px] h-[500px] object-cover"
            />

            <div className="text-[#02021D] w-[350px] text-center flex flex-col justify-center items-center">
              <button
                className="bg-[#02021D] text-white px-4 py-2 rounded-3xl"
                onClick={() => navigate("/men")}
              >
                Our Story
              </button>
              <p className="text-[56px] mt-3">
                SOPA <br />
                Mans
              </p>
            </div>

            <div className="w-[350px] bg-[#02021D] text-white h-[500px] text-center p-2 flex flex-col justify-center items-center">
              <p>
                SOPA was born out of a simple yet powerful concept - creating a
                shoe that you would choose to wear every single day, and they've
                brought this idea to life in the bustling city of New York.
              </p>

              <button
                className="bg-white text-[#02021D] px-4 py-2 rounded-3xl mt-5"
                onClick={() => navigate("/men")}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManAndWoman;
