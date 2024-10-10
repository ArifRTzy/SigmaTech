import { checks, silvanaBG } from "../utils"

function Hero() {
  return (
    <div className="w-full bg-black pt-16 mid:h-[100vh]">
      <div className="xl:w-[70%] mx-auto h-full mid:flex items-center mt-8 mid:-mt-2 lg:w-[80%] w-[95%]">
        <div className="">
          <h1 className='bg-gradient-to-r from-[#5B61FE] to-[#9296fe] mid:w-fit bg-clip-text text-transparent text-4xl lg:text-5xl xl:text-6xl font-bold mid:text-left text-center'>Jasa Pembuatan Website</h1>
          <p className='text-white mid:w-[90%] mid:text-xl text-lg font-light mid:mt-16 sm:mt-10 mt-6 mid:text-left text-center mid:px-0 md:px-20 '>Dapatkan kemudahan dalam membuat website sesuai yang kamu inginkan dengan Jasa Pembuatan Website di SigmaTech. Website langsung siap pakai!</p>
          <div className="flex mid:mt-16 sm:mt-10 mt-6 mid:gap-10 mid:justify-start sm:gap-8 justify-center sm:flex-row flex-col items-center sm:items-start">
            <div className="flex items-center">
              <img className="w-5 h-5" src={checks} alt="check" />
              <p className="text-white font-semibold mid:text-xl text-lg ml-1">Gratis Domain dan Hosting</p>
            </div>
            <div className="flex items-center">
              <img className="w-5 h-5" src={checks} alt="check" />
              <p className="text-white font-semibold mid:text-xl text-lg ml-1">Gratis Domain dan Hosting</p>
            </div>
          </div>
          <div className="mid:mt-16 sm:mt-10 mt-6 mid:justify-start justify-center flex sm:flex-row flex-col items-center sm:items-start">
            <button className="bg-[#9296fe] text-black font-semibold px-4 py-2 border-solid border-[#9296fe] border-2 rounded-md mid:text-xl text-lg sm:mr-5">Beli Sekarang</button>
            <button className="border-solid border-[#9296fe] font-semibold border-2 text-[#9296fe] px-4 py-2 rounded-md mid:text-xl text-lg sm:mt-0 mt-3">Pilih Desain</button>
          </div>
        </div>
        <div className="flex justify-center mid:mt-0 sm:mt-10 mt-6">
          <img className="mid:w-[550px] sm:w-[280px] w-[240px]" src={silvanaBG} alt="silvana" />
        </div>
      </div>
    </div>
  )
}

export default Hero
