import Image from 'next/image'
import Link from 'next/link'
import { IoIosSearch } from 'react-icons/io'
import erroPic from '../assets/404.png'

function ErrorPage() {
  return (
    <>
      <div className=' grid md:grid-cols-12 bg-white '>
          <div className=' grid col-span-1'></div>
          <div className=' grid col-span-10'>
          <div className=' mt-[85px]   py-[60px]  bg-white md:px-[90px] flex flex-col items-center justify-center'>
              <Image src={erroPic} className=' w-[266px] h-[200px]'  />
              
                  <div className=' px-[15px] '>
                     <div className=' mt-[50px] flex flex-col items-center justify-center '>
                       <h2 className=' text-text-primary font-nunito  leading-5 mb-[10px] text-[30px] md:text-[45px] font-bold'>Ohh! Page Not Found</h2>
                       <p className=" py-[8px] text-[14px]  md:text-[16px] font-nunito text-[#777] leading-3 md:leading-5 font-normal mb-[10px]">We can’t seem to find the page you’re looking for.</p>
                     </div>
                      <div className='mt-[20px]'>
                      <div className=' flex items-center justify-between px-[12px] mb-[28px] w-full border-[1px] border-[#ddd] rounded-[5px] bg-white   h-[52px] leading-5'>
                         <input type="text" placeholder='Search' className=' w-[85%]  outline-none text-[14px] font-nunito text-text-primary px-2 ' />
                          <IoIosSearch  size={20} className=' text-text-primary' />
                     </div> 
                      </div>

                      <div className=' flex items-center justify-center'>
                      <div className=' mt-[20px] flex items-center justify-center  bg-primary-color rounded-[8px] hover:bg-white hover:text-primary-color hover:border-[2px] border-primary-color duration-300 text-white font-nunito font-bold leading-[35px] w-[200px] h-[50px]'>
                           <Link href={'/'} >
                           Back To Home
                           </Link>
                      </div>
                      </div>
                </div>
              </div>
          </div>
       
          <div className=' grid col-span-1'></div>
      </div>
    </>
  )
}

export default ErrorPage
