import Link from "next/link";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiChevronRight, BiLogoDribbble, BiLogoFacebook, BiLogoPinterest } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";

export default function FooterOne() {
  return (
    <section className=' pt-[80px] pb-[70px] bg-[#24324a] md:px-[90px]'>
       <div className='px-[15px]'>
            <div className=' grid md:grid-cols-4'>
                 <div>
                    <h4 className=" text-white font-bold mb-[25px]  text-[18px] font-nunito leading-5">About Site</h4>
                    <p className=" text-[14px] font-nunito text-[#8a99b3] leading-9">We’re reimagining how you buy, sell and rent. It’s now easier to get into a place you love. So let’s do this, together.</p>
                 </div>
                 <div className=" md:pl-[70px]">
                 <h4 className=" text-white font-bold mb-[25px]  text-[18px] font-nunito leading-5">Quick Links</h4>
                     <ul className=" outline-none list-none">
                        <li> <Link href={"/about"} className=" text-[14px] font-nunito text-[#8a99b3] leading-10"> About us </Link></li>
                        <li> <Link href={"/about"} className=" text-[14px] font-nunito text-[#8a99b3] leading-10"> Terms & Conditions </Link></li>
                        <li> <Link href={"/about"} className=" text-[14px] font-nunito text-[#8a99b3] leading-10"> Users Guide </Link></li>
                        <li> <Link href={"/about"} className=" text-[14px] font-nunito text-[#8a99b3] leading-10"> Support Center </Link></li>
                        <li> <Link href={"/about"} className=" text-[14px] font-nunito text-[#8a99b3] leading-10"> Press Info </Link></li>
                     </ul>
                 </div>
                 <div className="">
                 <h4 className=" text-white font-bold mb-[25px]  text-[18px] font-nunito leading-5">Contact Us</h4>
                     <ul className=" outline-none list-none">
                        <li> <Link href={"/about"} className=" text-[14px] font-nunito text-[#8a99b3] leading-10"> info@findhouse.com </Link></li>
                        <li> <Link href={"/about"} className=" text-[14px] font-nunito text-[#8a99b3] leading-10"> Collins Street West, Victoria</Link></li>
                        <li> <Link href={"/about"} className=" text-[14px] font-nunito text-[#8a99b3] leading-10"> 8007, Australia.</Link></li>
                        <li> <Link href={"/about"} className=" text-[14px] font-nunito text-[#8a99b3] leading-10"> +1 246-345-0699 </Link></li>
                        <li> <Link href={"/about"} className=" text-[14px] font-nunito text-[#8a99b3] leading-10"> +1 246-345-0695 </Link></li>
                     </ul>
                 </div>
                 <div className="">
                 <h4 className=" text-white font-bold mb-[25px]  text-[18px] font-nunito leading-5">Follow us</h4>
                     <ul className=" outline-none list-none mb-[30px] flex items-start justify-start ">
                        <li className="pr-[.8rem]"> <Link href={"/about"} > <BiLogoFacebook className=" text-[20px] leading-5 text-[#8a99b3] hover:text-white duration-200"/> </Link></li>
                        <li className="pr-[.8rem]"> <Link href={"/about"} > <AiOutlineTwitter className=" text-[20px] leading-5 text-[#8a99b3] hover:text-white duration-200"/> </Link></li>
                        <li className="pr-[.8rem]"> <Link href={"/about"} > <BsInstagram className=" text-[20px] leading-5 text-[#8a99b3] hover:text-white duration-200"/> </Link></li>
                        <li className="pr-[.8rem]"> <Link href={"/about"} > <BiLogoPinterest className=" text-[20px] leading-5 text-[#8a99b3] hover:text-white duration-200"/> </Link></li>
                        <li > <Link href={"/about"} > <BiLogoDribbble className=" text-[20px] leading-5 text-[#8a99b3] hover:text-white duration-200"/> </Link></li>
                     </ul>
                     <h4 className=" text-white font-bold mb-[25px] text-[18px] font-nunito">Subscribs</h4>
                    <form action="" className=" flex">
                         <div>
                             <input type="text" placeholder="Your email" className=" outline-none bg-[#354765] border-[#354765] rounded-3xl text-white h-[50px] w-[195px] pl-[30px]" />
                         </div> 
                         <div className=" ml-[.5rem]"> 
                            <button className=" flex justify-center text-white items-center bg-[#354765] border-[1px] border-[#354765] rounded-[50%] h-[50px] w-[50px] mb-[.5rem]"><BiChevronRight size={18}/></button>
                         </div>
                    </form>
                 </div>
                  
            </div>
       </div>
    </section>
  )
}
