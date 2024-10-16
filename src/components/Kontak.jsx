import { kontak } from "../constants"


const Kontak = () => {
  return (
    <div className='w-full bg-black py-20'>
      <div className="lg:w-[80%] xl:w-[70%] lg:px-0 px-5 mx-auto">
        <h1 className='bg-gradient-to-r from-[#5B61FE] to-[#9296fe] text-center mid:w-full bg-clip-text text-transparent lg:text-5xl mid:text-4xl text-3xl font-bold'>Butuh Bantuan?</h1>
        <p className='text-white mid:text-xl text-lg font-light text-center pt-6'>Anda bisa berkonsultasi dengan kami terlebih dahulu untuk mendapatkan informasi yang lebih jelas.</p>
        <div className="w-full grid vm:grid-cols-2 md:grid-cols-3 gap-8 pt-14">
          {
            kontak.map(({img, url}, i)=>(
              <a  href={url} key={i} className="w-full group hover:bg-[#181818] border-solid border-[1px] border-white flex justify-center h-40 rounded-lg items-center">
                <div className="bg-white rounded-full p-2 group-hover:bg-[#9296fe]">
                  <img src={img} alt="url" className="w-10"/>
                </div>
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Kontak
