import { useState } from "react";
import { thumbnails } from "../utils";

const About = () => {
  const [image, setImage] = useState(true);

  const handleImageClick = () => {
    setImage(false);
  };

  return (
    <div className="bg-black w-full">
      <div className="xl:w-[70%] mx-auto mid:pt-0 pt-16">
        <h1 className="bg-gradient-to-r from-[#5B61FE] to-[#9296fe] mid:w-full text-center bg-clip-text text-transparent lg:text-5xl mid:text-4xl text-3xl font-bold justify-center flex">
          Jasa Pembuatan Website SigmaTech, <br />
          Solusi Cara Membuat Website Mudah
        </h1>
        <p className="text-white text-center justify-center mid:text-xl text-lg sm:px-[10%] my-8 font-light">
          Kamu tidak perlu ribet dengan proses pembuatannya. SigmaTech
          memastikan website kamu siap online dalam 2 hari. Dapatkan harga
          termurah se Indonesia mulai dari{" "}
          <span className="font-semibold">Rp100.000,00</span>. <br />
          <span className="font-semibold">DISKON</span> 40% untuk design sendiri.
        </p>
        <div className="relative flex justify-center items-center w-full">
            {
                image && 
          <img
            src={thumbnails}
            alt="thumbnail"
            onClick={handleImageClick}
            className="xl:w-[70%] absolute cursor-pointer mx-auto xl:h-[420px] rounded-xl shadow-lg z-10 mid:w-[55%] mid:h-[350px] sm:w-[70%] sm:h-[280px] w-[90%] h-[250px]"
          />
            }
          <iframe
            className="xl:w-[70%] xl:h-[420px] border-none rounded-xl shadow-lg mid:w-[55%] mid:h-[350px] sm:w-[70%] sm:h-[280px] w-[90%] h-[250px]"
            src="https://www.youtube.com/embed/FJ12mgR4fPI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
