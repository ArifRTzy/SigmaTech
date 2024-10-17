import { more, navbar } from '../constants'

const Footer = () => {
  return (
    <div className='w-full bg-black border-t-[1px] border-[#333333] pt-12'>
      <div className="lg:w-[80%] xl:w-[70%] lg:px-0 px-5 mx-auto">
        <div className=" w-full justify-between md:flex">
            <div className="">
                <h2 className='text-white font-bold text-xl pb-2'>SigmaTech</h2>
                <p className='text-[#888888] font-poppins text-base'>Jasa Pembuatan Website</p>
            </div>
            <div className="flex-1 md:pl-16 md:pt-0 pt-4">
                <h2 className='text-white font-bold text-xl pb-2 '>Navigation</h2>
                <ul className="grid grid-cols-2 vm:grid-cols-3 gap-2">
                    {
                        navbar.map(({title, url})=>(
                            <li key={title} className='text-[#888888] font-poppins text-base hover:text-white w-fit'><a href={url}>{title}</a></li>
                        ))
                    }
                </ul>
            </div>
            <div className="">
                <h2 className='text-white font-bold text-xl pb-2 md:pt-0 pt-4'>Selengkapnya</h2>
                <div className="flex gap-2">
                    {
                        more.map(({img, url},i)=>(
                            <a href={url} key={i}><img src={img} alt="url" className='bg-white w-10 rounded-lg hover:bg-[#9296fe]'/></a>
                        ))
                    }
                </div>
            </div>
        </div>
        <p className='text-[#888888] text-center pt-10 pb-2'>© 2024 SigmaTech. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
