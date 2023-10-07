import Image from "next/image"
import Link from "next/link"
import { AiOutlineTwitter } from "react-icons/ai"
import { BiLogoDribbble, BiLogoFacebook, BiLogoPinterest } from "react-icons/bi"
import { BsInstagram } from "react-icons/bs"
import mapPic from "../assets/map.png"
import RegisterAs from "../home/RegisterAs"
import InnerContact from "./InnerContact"

const page = () => {
  return (
    <>
      <InnerContact />
      
         <div className=' pt-[60px] bg-[#f7f7f7] md:px-[90px]'>
         <div className=' px-[15px] '>
            <div className=" grid md:grid-cols-12 gap-6">
                <div className=" gird md:col-span-8 h-fit" >
                      <div className=" bg-white rounded-[8px] p-[30px] border-[1px] border-[#ebebeb]">
                            <h4 className=" font-nunito font-bold mb-[20px] leading-5 text-[18px] text-text-primary">
                            Send Us An Email
                            </h4>
                            <p className=" font-nunito text-text-primary text-[14px] leading-7 mb-[30px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida quis libero eleifend ornare. Maecenas mattis enim at arcu feugiat, sit amet blandit nisl iaculis. Donec lacus odio, malesuada eu libero sit amet, congue aliquam leo. In hac habitasse platea dictumst.
                            </p>

                            <form action="">
                               <div className=" flex items-center w-full gap-5">
                                 <div className=" w-1/2 h-[50px] border-[1px] border-[#ebebeb] rounded-[8px]">
                                    <input type="text" placeholder="Name" className=" w-full pl-[20px] pr-[10px] py-[10px] outline-none font-nunito text-[14px] text-text-primary " />
                                 </div>
                                 <div className=" w-1/2 h-[50px] border-[1px] border-[#ebebeb] rounded-[8px]">
                                    <input type="email" placeholder="Email" className=" w-full pl-[20px] pr-[10px] py-[10px] outline-none font-nunito text-[14px] text-text-primary " />
                                 </div>
                               </div> 
                               <div className=" mt-[20px] flex items-center w-full gap-5">
                                 <div className=" w-1/2 h-[50px] border-[1px] border-[#ebebeb] rounded-[8px]">
                                    <input type="text" placeholder="Phone" className=" w-full pl-[20px] pr-[10px] py-[10px] outline-none font-nunito text-[14px] text-text-primary " />
                                 </div>
                                 <div className=" w-1/2 h-[50px] border-[1px] border-[#ebebeb] rounded-[8px]">
                                    <input type="text" placeholder="Subject" className=" w-full pl-[20px] pr-[10px] py-[10px] outline-none font-nunito text-[14px] text-text-primary " />
                                 </div>
                               </div> 
                               <div className=" mt-[20px]">
                                  <textarea placeholder=" Your Message" name="" id="" className=" outline-none p-[20px] mb-[25px] w-full h-[175px]  border-[1px] border-[#ebebeb] rounded-[8px]"></textarea>
                               </div>
                               <div>
                                <button className=" bg-primary-color hover:bg-white hover:text-primary-color border-[2px] border-primary-color duration-300 text-white rounded-[8px] text-[16px] font-nunito font-bold  w-[200px] h-[50px] shadow-lg">Send Message</button>
                               </div>
                            </form>
                      </div>
                </div>
                <div className=" gird md:col-span-4 h-fit" >
                      <div className=" bg-white rounded-[8px] p-[30px] border-[1px] border-[#ebebeb]">
                        <div>
                        <h4 className=" font-nunito font-bold mb-[20px] leading-5 text-[18px] text-text-primary">
                             Contact Us
                            </h4>
                            <p className="mb-[30px] font-nunito text-text-primary text-[14px] leading-7 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida quis libero eleifend ornare. habitasse platea dictumst.
                            </p>
                        </div>
                        <div>
                           <h4 className=" font-nunito font-bold  leading-5 text-[16px] text-text-primary">
                                Address
                            </h4>
                            <p className="mb-[30px] font-nunito text-text-primary text-[14px] leading-7 ">
                            2301 Ravenswood Rd Madison,
                            <br /> WI 53711</p>
                        </div>
                        <div>
                           <h4 className=" font-nunito font-bold  leading-5 text-[16px] text-text-primary">
                                Phone
                            </h4>
                            <p className="mb-[30px] font-nunito text-text-primary text-[14px] leading-7 ">
                             02641 6546-69561
                            </p>
                        </div>
                        <div>
                           <h4 className=" font-nunito font-bold  leading-5 text-[16px] text-text-primary">
                                Mail
                            </h4>
                            <p className="mb-[30px] font-nunito text-text-primary text-[14px] leading-7 ">
                             house@find.com
                            </p>
                        </div>
                        <div>
                           <h4 className=" font-nunito font-bold  leading-5 text-[16px] text-text-primary">
                                Skype
                            </h4>
                            <p className="mb-[30px] font-nunito text-text-primary text-[14px] leading-7 ">
                             housefind.com
                            </p>
                        </div>
                        <div>
                           <h4 className=" font-nunito font-bold  leading-5 text-[16px] text-text-primary">
                                Follow Us
                            </h4>
                        <ul className=" outline-none list-none mt-[10px] flex items-start justify-start  gap-[.5rem] ">
                        <li className="w-[42px] bg-[#f7f7f7] flex items-center justify-center rounded-[8px] h-[42px] hover:bg-primary-color hover:text-white duration-300 text-text-primary"> <Link href={"/about"} > <BiLogoFacebook className=" text-[14px]   "/> </Link></li>
                        <li className="w-[42px] bg-[#f7f7f7] flex items-center justify-center rounded-[8px] h-[42px] hover:bg-primary-color hover:text-white duration-300 text-text-primary"> <Link href={"/about"} > <AiOutlineTwitter className=" text-[14px]  "/> </Link></li>
                        <li className="w-[42px] bg-[#f7f7f7] flex items-center justify-center rounded-[8px] h-[42px] hover:bg-primary-color hover:text-white duration-300 text-text-primary"> <Link href={"/about"} > <BsInstagram className=" text-[14px]  "/> </Link></li>
                        <li className="w-[42px] bg-[#f7f7f7] flex items-center justify-center rounded-[8px] h-[42px] hover:bg-primary-color hover:text-white duration-300 text-text-primary"> <Link href={"/about"} > <BiLogoPinterest className=" text-[14px]  "/> </Link></li>
                        <li className="w-[42px] bg-[#f7f7f7] flex items-center justify-center rounded-[8px] h-[42px] hover:bg-primary-color hover:text-white duration-300 text-text-primary" > <Link href={"/about"} > <BiLogoDribbble className=" text-[14px]  "/> </Link></li>
                     </ul>
                        </div>
                      </div>
                 </div>     
           </div>
          </div>
         </div>
     
       
       <div className=' py-[60px] bg-[#f7f7f7] w-full h-[400px] md:h-[600px]'>
           <Image  src={mapPic} className=" w-full h-full"/>
       </div>

       <RegisterAs />

    </>
  )
}

export default page
