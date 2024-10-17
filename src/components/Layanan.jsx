import { layanans } from "../constants"

const Layanan = () => {
  return (
    <div className="w-full bg-black py-28" id="layanan">
        <div className="lg:w-[80%] xl:w-[70%] lg:px-0 px-5 mx-auto">
            <h1 className='bg-gradient-to-r from-[#5B61FE] to-[#9296fe] mid:w-full text-center bg-clip-text text-transparent lg:text-5xl mid:text-4xl text-3xl font-bold justify-center flex pb-2'>Apa Layanan SigmaTech?</h1>
            <p className='font-light text-white text-center justify-center mid:text-xl text-lg pt-8 md:px-[15%]'>Kami menyediakan berbagai layanan untuk memenuhi kebutuhan online anda. Dari profil perusahaan hingga website kustom, kami siap membantu.</p>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 mid:grid-cols-4 gap-4 pt-16">
                    {
                        layanans.map(({img, title, text})=>(
                            <div key={title} className="bg-[#060606] border-[1px] border-solid border-[#333333] rounded-md w-full h-auto pb-4">
                                <div className="flex items-center pt-3 pl-3">
                                    <img src={img} alt={title} className="w-14 p-2 rounded-md border-solid" />
                                    <h3 className="text-white pl-2 font-semibold text-lg">{title}</h3>
                                </div>
                                <p className="text-white pl-3 pt-2 font-light">{text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layanan
