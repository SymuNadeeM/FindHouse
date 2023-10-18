"use client"
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineGoogle, AiOutlineUser } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { CiLock } from 'react-icons/ci'
import logrespic from '../assets/logInregister.jpg'

const ModelLogReg = ({handleModal}) => {
   
  return (
    <>
      <div className="bg-[#ffff] z-50   absolute w-auto rounded-[8px] top-[80px] left-[277px] right-[277px] ">
                         {/* ---close side----- */}
                        <div onClick={handleModal} className=' absolute top-[-20px] right-[-20px]  ' >
                            <div className=' flex items-center justify-center bg-primary-color h-[50px] w-[50px] rounded-full text-white'>
                              <AiOutlineClose className='' size={20} />
                            </div>
                        </div>
                         <div className=' w-[800px] h-auto  p-[20px]'>
                             <div className=' flex items-center border-b-[2px] border-[#ebebebeb]'>
                                <div className=' flex items-center justify-center w-1/2 h-[70px]'>
                                  <h4 className=' text-[18px] font-bold leading-[65px] text-text-primary'>Login</h4>
                                </div>
                                <div className='flex items-center justify-center bg-[#f5f5f5] w-1/2 h-[70px]'>
                                  <h4 className=' text-[18px] font-bold leading-[65px] text-text-primary'>Register</h4>
                                </div>
                             </div>
                             <div className=' px-[15px] my-[20px] flex gap-[20px]'>
                                  <div className=' w-1/2'>
                                      <Image src={logrespic} alt="" />
                                  </div>
                                  <div className=' w-1/2'>
                                     <form action="">
                                     <h4 className='mb-[25px] text-[#006c70] text-[18px] font-bold font-nunito'>Login</h4>
                                     <button className=' w-full h-[52px] hover:bg-[#3b5998] hover:text-white border-[1px] border-[#3b5998]   duration-300 rounded-[4px] text-[#3b5998] text-[16px] flex items-center gap-[25%]  px-[8px] '> <BiLogoFacebook size={20} /> <span > Login with Facebook</span> </button> 
                                     <button className=' w-full h-[52px] hover:bg-[#ea4335] hover:text-white border-[1px] border-[#ea4335] mt-[20px] mb-[25px] duration-300  rounded-[4px] text-[#ea4335] text-[16px] flex items-center gap-[25%]   px-[8px] '> <AiOutlineGoogle size={20} /> <span > Login with Google</span> </button>
                                      <hr className=' mb-[25px] text-[#ebebebeb] ' />
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
                           <div className=' flex items-center justify-center mt-[15px]'>
                              <p>Dont have an account?</p>
                              <Link href={""} className=' text-[14px] text-primary-color'> Register</Link>
                           </div>
                          </form>
                                  
                                  </div>
                             </div>
                         </div>
                     </div>
    </>
  )
}

export default ModelLogReg
