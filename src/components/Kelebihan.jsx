import { kelebihan } from "../constants";

const Kelebihan = () => {
  return (
    <div className="w-full bg-black py-28">
      <div className="lg:w-[80%] xl:w-[70%] lg:px-0 px-5 mx-auto">
        <h1 className="bg-gradient-to-r from-[#5B61FE] to-[#9296fe] mid:w-5/6 xl:w-4/6 mid:pb-20 bg-clip-text text-transparent lg:text-5xl mid:text-4xl text-3xl font-bold pb-12">Mengapa Harus Membuat Website di SigmaTech?</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-12">
          {kelebihan.map(({ img, title, text }) => (
            <div key={title} className="w-full">
              <img
                src={img}
                alt={title}
                className="bg-[#9296fe] rounded-lg p-1.5"
              />
              <h3 className="text-white pt-1 font-semibold text-lg">{title}</h3>
              <p className="text-white pt-2 font-light">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kelebihan;
