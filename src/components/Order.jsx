import { benefits } from "../constants";
import { checks, iphones } from "../utils";

const Order = () => {
  return (
    <div className="w-full bg-black">
      <div className="xl:w-[70%] mx-auto bg-[#181818] rounded-2xl lg:w-[80%] w-[95%]">
        <div className="w-full bg-gradient-to-r from-pink-500 to-orange-400 h-8 rounded-tr-2xl rounded-tl-2xl hidden mid:flex items-center">
          <div className="flex gap-2 items-center h-full pl-4">
            <div className="w-4 h-4 rounded-full bg-black/20 backdrop-blur-lg"></div>
            <div className="w-4 h-4 rounded-full bg-black/20 backdrop-blur-lg"></div>
            <div className="w-4 h-4 rounded-full bg-black/20 backdrop-blur-lg"></div>
          </div>
          <div className="flex justify-center flex-1">
            <div className="w-[50%] bg-black/20 h-4 rounded-lg"></div>
          </div>
        </div>
        <div className="mid:p-10 p-8 lg:p-20">
          <div className="">
            <h1 className="bg-gradient-to-r from-[#5B61FE] to-[#9296fe] mid:w-full bg-clip-text text-transparent lg:text-5xl mid:text-4xl text-3xl font-bold pb-6 mid:pb-12">
              Buat Website Sesuai Keinginanmu!
            </h1>
            <p className="text-white font-light mid:text-xl text-lg pb-6 mid:pb-12">
              Cocok untuk Website Perusahaan, Website Pribadi, Blog, dan Toko
              Online
            </p>
          </div>
          <div className="flex mid:flex-row flex-col items-center">
            <div className="mid:order-1 order-2 w-full">
            <h2 className="text-white text-xl mid:text-2xl lg:text-3xl font-semibold">
              Apa yang kamu dapatkan dalam jasa pembuatan website SigmaTech?
            </h2>
            <div className="">
              <div className="py-6 mid:py-12">
                {benefits.map(({ bold, normal }) => (
                  <div key={bold} className="flex pb-2 vm:items-center">
                    <img src={checks} alt="check" className="w-5 h-5" />
                    <p className="text-white font-light pl-2">
                      <span className="font-semibold">{bold}</span>
                      {normal}
                    </p>
                  </div>
                ))}
              </div>
                <button className="bg-[#9296fe] text-black font-semibold px-4 py-2 border-solid border-[#9296fe] border-2 rounded-md mid:text-xl text-lg">
                Pesan Sekarang
              </button>
            </div>
            </div>
            <img src={iphones} alt="iphone" className="mid:w-[50%] mid:h-[50%] w-full mid:order-2 order-1 mid:mb-0 mb-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
