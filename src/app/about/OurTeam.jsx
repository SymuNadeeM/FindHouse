"use client"
import Image from "next/image";
import Link from "next/link";
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoDribbble, BiLogoFacebook, BiLogoPinterest } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';
import Slider from "react-slick";
import tem3 from "../assets/team_10.jpg";
import tem1 from "../assets/team_7.jpg";
import tem2 from "../assets/team_8.jpg";
import tem4 from "../assets/team_9.jpg";
import NextArrow from "./arrow/NextArrow";
import PrevArrow from "./arrow/PrevArrow";

export default function OurTeam() {
      
      
          const settings = {
          //   dots: true,
            infinite: false,
            arrows: true,
            speed: 700,
            slidesToShow: 4,
            slidesToScroll: 1,
          //   <NextArrow/> <PrevArrow />
            nextArrow: <NextArrow/> ,
            prevArrow: <PrevArrow /> ,
            responsive: [
               {
                 breakpoint: 1024,
                 settings: {
                   slidesToShow: 3,
                   slidesToScroll: 3,
                   infinite: true,
                   dots: true
                 }
               },
               {
                 breakpoint: 600,
                 settings: {
                   slidesToShow: 2,
                   slidesToScroll: 2,
                   initialSlide: 2
                 }
               },
               {
                 breakpoint: 520,
                 settings: {
                   slidesToShow: 1,
                   slidesToScroll: 1
                 }
               }
             ]
          }
  return (
    <section className=' overflow-hidden py-[60px] bg-[#fff] md:px-[90px]'>
      <div className=' px-[15px] '>
           <div className=' mb-[40px] flex flex-col items-center justify-center'>
               <h2 className=' text-text-primary font-nunito  leading-5 mb-[10px] text-[30px] font-bold'>Our Team</h2>
                
               <p className=" py-[8px]  text-[16px] font-nunito text-[#777] leading-5 font-normal mb-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           </div>

             <div className=" relative ">
             <Slider {...settings}>
                  <div className="  py-[12px] px-[5px]">
                       <div className=" group bg-white border-[1px] border-[#ebebeb] p-[10px] text-center rounded-lg">
                             <div className=" relative">
                                <Image src={tem1} className=" w-full md:w-[245px] md:h-[306px]" />
                                <div className=" absolute opacity-0 group-hover:opacity-100 transition rounded-lg bg-[rgba(255,90,95,.8)] top-0 left-0 right-0 bottom-0  ">
                                     <ul className=" items-center justify-center flex bottom-[15px] left-0 right-0 absolute">
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><BiLogoFacebook className=" text-white" /></Link>
                                         </li>
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><AiOutlineTwitter className=" text-white" /></Link>
                                         </li>
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><BsInstagram className=" text-white" /></Link>
                                         </li>
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><BiLogoDribbble className=" text-white" /></Link>
                                         </li>
                                         <li className="">
                                              <Link href={""} ><BiLogoPinterest className=" text-white" /></Link>
                                         </li>
                                     </ul>
                              </div>
                             </div>
                              
                              <div className=" pt-[20px] pb-[5px]">
                                   <h4 className=" text-[18px]  leading-5 hover:text-[#fd7e14] duration-300 text-text-primary font-nunito mb-[.5rem]">Helene Powers</h4>
                                   <p className=" text-[14px] leading-5">Agent</p>
                              </div>
                       </div>
                  </div>
                  <div className=" py-[12px] px-[5px]">
                       <div className=" group bg-white border-[1px] border-[#ebebeb] p-[10px] text-center rounded-lg">
                             <div className=" relative">
                                <Image src={tem2} alt="" className=" w-full md:w-[245px] md:h-[306px]" />
                                <div className=" absolute opacity-0 group-hover:opacity-100 transition rounded-lg bg-[rgba(255,90,95,.8)] top-0 left-0 right-0 bottom-0  ">
                                     <ul className=" items-center justify-center flex bottom-[15px] left-0 right-0 absolute">
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><BiLogoFacebook className=" text-white" /></Link>
                                         </li>
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><AiOutlineTwitter className=" text-white" /></Link>
                                         </li>
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><BsInstagram className=" text-white" /></Link>
                                         </li>
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><BiLogoDribbble className=" text-white" /></Link>
                                         </li>
                                         <li className="">
                                              <Link href={""} ><BiLogoPinterest className=" text-white" /></Link>
                                         </li>
                                     </ul>
                              </div>
                             </div>
                              
                              <div className=" pt-[20px] pb-[5px]">
                                   <h4 className=" text-[18px]  leading-5 hover:text-[#fd7e14] duration-300 text-text-primary font-nunito mb-[.5rem]">Helene Powers</h4>
                                   <p className=" text-[14px] leading-5">Agent</p>
                              </div>
                       </div>
                  </div>
                  <div className=" py-[12px] px-[5px]">
                       <div className=" group bg-white border-[1px] border-[#ebebeb] p-[10px] text-center rounded-lg">
                             <div className=" relative">
                                <Image src={tem3} alt="" className=" w-full md:w-[245px] md:h-[306px]" />
                                <div className=" absolute opacity-0 group-hover:opacity-100 transition rounded-lg bg-[rgba(255,90,95,.8)] top-0 left-0 right-0 bottom-0  ">
                                     <ul className=" items-center justify-center flex bottom-[15px] left-0 right-0 absolute">
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><BiLogoFacebook className=" text-white" /></Link>
                                         </li>
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><AiOutlineTwitter className=" text-white" /></Link>
                                         </li>
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><BsInstagram className=" text-white" /></Link>
                                         </li>
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><BiLogoDribbble className=" text-white" /></Link>
                                         </li>
                                         <li className="">
                                              <Link href={""} ><BiLogoPinterest className=" text-white" /></Link>
                                         </li>
                                     </ul>
                              </div>
                             </div>
                              
                              <div className=" pt-[20px] pb-[5px]">
                                   <h4 className=" text-[18px] leading-5 hover:text-[#fd7e14] duration-300 text-text-primary font-nunito mb-[.5rem]">Helene Powers</h4>
                                   <p className=" text-[14px] leading-5">Agent</p>
                              </div>
                       </div>
                  </div>
                  <div className=" py-[12px] px-[5px]">
                       <div className=" group bg-white border-[1px] border-[#ebebeb] p-[10px] text-center rounded-lg">
                             <div className=" relative">
                                <Image src={tem4} alt="" className=" w-full md:w-[245px] md:h-[306px]" />
                                <div className=" absolute opacity-0 group-hover:opacity-100 transition rounded-lg bg-[rgba(255,90,95,.8)] top-0 left-0 right-0 bottom-0  ">
                                     <ul className=" items-center justify-center flex bottom-[15px] left-0 right-0 absolute">
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><BiLogoFacebook className=" text-white" /></Link>
                                         </li>
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><AiOutlineTwitter className=" text-white" /></Link>
                                         </li>
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><BsInstagram className=" text-white" /></Link>
                                         </li>
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><BiLogoDribbble className=" text-white" /></Link>
                                         </li>
                                         <li className="">
                                              <Link href={""} ><BiLogoPinterest className=" text-white" /></Link>
                                         </li>
                                     </ul>
                              </div>
                             </div>
                              
                              <div className=" pt-[20px] pb-[5px]">
                                   <h4 className=" text-[18px]  leading-5 hover:text-[#fd7e14] duration-300 text-text-primary font-nunito mb-[.5rem]">Helene Powers</h4>
                                   <p className=" text-[14px] leading-5">Agent</p>
                              </div>
                       </div>
                  </div>
                  <div className=" py-[12px] px-[5px]">
                       <div className=" group bg-white border-[1px] border-[#ebebeb] p-[10px] text-center rounded-lg">
                             <div className=" relative">
                                <Image src={tem1} alt="" className=" w-full md:w-[245px] md:h-[306px]" />
                                <div className=" absolute opacity-0 group-hover:opacity-100 transition rounded-lg bg-[rgba(255,90,95,.8)] top-0 left-0 right-0 bottom-0  ">
                                     <ul className=" items-center justify-center flex bottom-[15px] left-0 right-0 absolute">
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><BiLogoFacebook className=" text-white" /></Link>
                                         </li>
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><AiOutlineTwitter className=" text-white" /></Link>
                                         </li>
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><BsInstagram className=" text-white" /></Link>
                                         </li>
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><BiLogoDribbble className=" text-white" /></Link>
                                         </li>
                                         <li className="">
                                              <Link href={""} ><BiLogoPinterest className=" text-white" /></Link>
                                         </li>
                                     </ul>
                              </div>
                             </div>
                              
                              <div className=" pt-[20px] pb-[5px]">
                                   <h4 className=" text-[18px] leading-5 hover:text-[#fd7e14] duration-300 text-text-primary font-nunito mb-[.5rem]">Helene Powers</h4>
                                   <p className=" text-[14px] leading-5">Agent</p>
                              </div>
                       </div>
                  </div>
                  <div className=" py-[12px] px-[5px]">
                       <div className=" group bg-white border-[1px] border-[#ebebeb] p-[10px] text-center rounded-lg">
                             <div className=" relative">
                                <Image src={tem2} alt="" className=" w-full md:w-[245px] md:h-[306px]" />
                                <div className=" absolute opacity-0 group-hover:opacity-100 transition rounded-lg bg-[rgba(255,90,95,.8)] top-0 left-0 right-0 bottom-0  ">
                                     <ul className=" items-center justify-center flex bottom-[15px] left-0 right-0 absolute">
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><BiLogoFacebook className=" text-white" /></Link>
                                         </li>
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><AiOutlineTwitter className=" text-white" /></Link>
                                         </li>
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><BsInstagram className=" text-white" /></Link>
                                         </li>
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><BiLogoDribbble className=" text-white" /></Link>
                                         </li>
                                         <li className="">
                                              <Link href={""} ><BiLogoPinterest className=" text-white" /></Link>
                                         </li>
                                     </ul>
                              </div>
                             </div>
                              
                              <div className=" pt-[20px] pb-[5px]">
                                   <h4 className=" text-[18px]  leading-5 hover:text-[#fd7e14] duration-300 text-text-primary font-nunito mb-[.5rem]">Helene Powers</h4>
                                   <p className=" text-[14px] leading-5">Agent</p>
                              </div>
                       </div>
                  </div>
                  <div className=" py-[12px] px-[5px]">
                       <div className=" group bg-white border-[1px] border-[#ebebeb] p-[10px] text-center rounded-lg">
                             <div className=" relative">
                                <Image src={tem3} alt="" className=" w-full md:w-[245px] md:h-[306px]" />
                                <div className=" absolute opacity-0 group-hover:opacity-100 transition rounded-lg bg-[rgba(255,90,95,.8)] top-0 left-0 right-0 bottom-0  ">
                                     <ul className=" items-center justify-center flex bottom-[15px] left-0 right-0 absolute">
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><BiLogoFacebook className=" text-white" /></Link>
                                         </li>
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><AiOutlineTwitter className=" text-white" /></Link>
                                         </li>
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><BsInstagram className=" text-white" /></Link>
                                         </li>
                                         <li className=" mr-[20px]">
                                              <Link href={""} ><BiLogoDribbble className=" text-white" /></Link>
                                         </li>
                                         <li className="">
                                              <Link href={""} ><BiLogoPinterest className=" text-white" /></Link>
                                         </li>
                                     </ul>
                              </div>
                             </div>
                              
                              <div className=" pt-[20px] pb-[5px]">
                                   <h4 className=" text-[18px]  leading-5 hover:text-[#fd7e14] duration-300 text-text-primary font-nunito mb-[.5rem]">Helene Powers</h4>
                                   <p className=" text-[14px] leading-5">Agent</p>
                              </div>
                       </div>
                  </div>

                  
              </Slider>    
             </div>
        </div>
    </section>    

  )
}
