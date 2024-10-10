import { useEffect, useState } from 'react'
import { navbar } from '../constants'
import { menuIcon } from '../utils'
import { closeIcon } from '../utils'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleResize = ()=>{
    if(window.innerWidth >= 1024){
      setIsOpen(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("resize", handleResize)

    return ()=>{
      window.removeEventListener("resize", handleResize)
    }
  },[])

  return (
    <div className={`w-full bg-black mid:h-16 border-b-[1px] border-[#333333] border-solid fixed z-10 ${!isOpen ? 'h-16' : 'pt-[13.5px]'}`}>
      <nav className='xl:w-[70%] mx-auto items-center flex justify-between h-full lg:w-[80%] w-[95%]'>
        <div>
            <h2 className='text-white font-bold text-3xl'>SigmaTech</h2>
        </div>
        <ul className='text-[#888888] mid:flex font-poppins text-base hidden'>
            {
                navbar.map(({title, url})=>(
                    <li key={title} className='ml-12 hover:text-white'><a href={url}>{title}</a></li>
                ))
            }
        </ul>
        <button onClick={toggleMenu} className='w-6 mid:hidden'>
          {isOpen ? (
            <img src={closeIcon} alt="menu"/>
          ):(
            <img src={menuIcon} alt="close" />
          )}
        </button>
      </nav>
      <ul className='text-[#888888] mid:hidden font-poppins text-base w-[95%]'>
            {
              isOpen && 
                navbar.map(({title, url})=>(
                    <li key={title} className='ml-6 my-4 w-fit hover:text-white'><a href={url}>{title}</a></li>
                ))
            }
        </ul>
    </div>
  )
}

export default Navbar
