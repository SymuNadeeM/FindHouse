import Link from 'next/link'
import { AiOutlineGoogle, AiOutlineUser } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { CiLock } from 'react-icons/ci'
import InnerLogin from './InnerLogin'

const page = () => {
  return (
    <>
       <InnerLogin />
       <section className=' py-[60px] bg-[#f7f7f7] md:px-[90px]'>
        
            <div className=' px-[15px]'>
                   <div className=' mb-[40px] flex flex-col items-center justify-center'>
                       <h2 className=' text-text-primary font-nunito  leading-5 mb-[10px] text-[24px] font-bold'>Login to your account</h2>
                       <p className=" py-[8px]  text-[16px] font-nunito text-[#777] leading-5 font-normal mb-[10px]">Dont have an account? <span><Link href={'/register'} className=' text-primary-color'>Sign Up!</Link></span> </p>
                   </div>
            
             <div className=' grid md:grid-cols-3 '>
                 <div className=' girdmd: col-span-1'></div>
                 <div className=' gird md:col-span-1'>
                   <form>
                      <div className=' flex items-center justify-between px-[12px] mb-[28px] w-full border-[1px] border-[#ddd] rounded-[5px] bg-white   h-[52px] leading-5'>
                        
                          <input type="email" placeholder=' User Name or Email' className=' w-[85%]  outline-none text-[14px] font-nunito text-text-primary px-2 ' />
                           
                              <AiOutlineUser  size={20} className=' text-text-primary' />
                           
                      </div> 
                      <div className=' flex items-center justify-between px-[12px] mb-[28px] w-full border-[1px] border-[#ddd] rounded-[5px] bg-white   h-[52px] leading-5'>
                        
                          <input type="password" placeholder='Password' className=' w-[85%]  outline-none text-[14px] font-nunito text-text-primary px-2 ' />
                           
                              <CiLock  size={20} className=' text-text-primary' />
                           
                      </div> 
                      <div className=' mb-[1rem] items-center flex  justify-between'>
                        <div  className='  items-center flex  '>
                        <input type="checkbox" className='  w-[17px] h-[17px]   bg-primary-color border-primary-color text-white' />
                         <label htmlFor="" className=' inline-block cursor-pointer text-text-primary font-nunito text-[14px] pl-[15px]'>Remember me</label>
                        </div>
                         <Link href={""} className='font-nunito text-[14px] text-[#8b91dd] leading-9' >Forgot password?</Link>
                      </div>
                       <div className=''>
                           <button type='submite' className=' rounded-[8px] shadow-lg text-white font-nunito text-[16px] font-bold h-[50px] leading-5 bg-primary-color cursor-pointer w-full hover:border-[2px] border-primary-color hover:text-primary-color duration-300 hover:bg-white'> Login</button>
                       </div>
                       <div className=' flex items-center'>
                         <hr className=' w-[50%] my-[28px] opacity-25' />
                          <p className='px-2 text-[16px]  text-text-primary '>Or</p>
                         <hr className=' w-[50%] my-[28px] opacity-25' />

                       </div> 
                       <div className='  grid grid-cols-2 gap-6'>
                        
                       <button className=' w-full h-[38px] bg-[#3b5998] hover:border-[1px] border-[#3b5998] hover:bg-white hover:text-[#3b5998] duration-300 rounded-[4px] text-white text-[16px] flex items-center gap-[25%] md:gap-8 px-[8px] '> <BiLogoFacebook size={20} /> <span >Facebook</span> </button> 
                         <button className=' w-full h-[38px] bg-[#ea4335] hover:border-[1px] border-[#ea4335] hover:bg-white hover:text-[#ea4335] duration-300  rounded-[4px] text-white text-[16px] flex items-center gap-[25%] md:gap-8 px-[8px] '> <AiOutlineGoogle size={20} /> <span >Google</span> </button> 
                           <div>

                           </div>
                       </div>
                   </form>
                 </div>
                 <div className=' gird col-span-1'></div>
             </div>
             </div>
        </section>           
    </>
  )
}

export default page

