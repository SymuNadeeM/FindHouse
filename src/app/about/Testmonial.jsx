"use client"
import Image from "next/image";
import { BiSolidQuoteLeft } from 'react-icons/bi';
import Slider from "react-slick";
import testPin1 from '../assets/testimonial_1.png';
import testPin2 from '../assets/testimonial_2.png';
import testPin3 from '../assets/testimonial_3.png';
import testPin4 from '../assets/testimonial_4.png';

function Testmonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <section className=' py-[60px] bg-[#f7f7f7] md:px-[90px]'>
      <div className=' px-[15px] '>
           <div className=' mb-[40px] flex flex-col items-center justify-center'>
               <h2 className=' text-text-primary font-nunito  leading-5 mb-[10px] text-[30px] font-bold'>Testimonials</h2>
               <p className=" py-[8px]  text-[16px] font-nunito text-[#777] leading-5 font-normal mb-[10px]">Here could be a nice sub title</p>
           </div>
           
          <Slider {...settings}>
          
           <div className=" w-[582px] py-[5px] px-[12px] ">
               <div className=" relative flex flex-col items-center justify-center">
                    <Image src={testPin1} className=" w-[104px] h-[104px] rounded-full shadow-xl border-[5px] border-[#fff]" alt="" />
               
               <div className="  ">
                      <div className=" absolute  left-[54%] md:left-[52%]  top-[62px] ">
                        <BiSolidQuoteLeft className="  w-[43px] h-[43px] bg-primary-color text-white shadow-xl  rounded-full p-3 " />
                      </div>
                </div>
                 <div className=" py-[20px] px-[40px] text-center">
                       <h4 className=" text-text-primary text-[18px] font-bold leading-5">Ausgta Silva</h4>
                      <p className=" text-text-primary text-[14px] font-nunito leading-6 ">Sales Manager</p>
                      <p className="mt-[25px] text-[14px] text-text-primary font-nunito leading-4">Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.</p>
                 </div>
                </div>
           </div>
          
          
           <div className=" w-[582px] py-[5px] px-[12px] ">
               <div className=" relative flex flex-col items-center justify-center">
                    <Image src={testPin2} alt="" className=" w-[104px] h-[104px] rounded-full shadow-xl border-[5px] border-[#fff]" />
               
               <div className="  ">
                      <div className=" absolute  left-[54%] md:left-[52%]  top-[62px] ">
                        <BiSolidQuoteLeft className="  w-[43px] h-[43px] bg-primary-color text-white shadow-xl  rounded-full p-3 " />
                      </div>
                </div>
                 <div className=" py-[20px] px-[40px] text-center">
                       <h4 className=" text-text-primary text-[18px] font-bold leading-5">Ausgta Silva</h4>
                      <p className=" text-text-primary text-[14px] font-nunito leading-6 ">Sales Manager</p>
                      <p className="mt-[25px] text-[14px] text-text-primary  font-nunito leading-4">Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.</p>
                 </div>
                
           </div>
           </div>
          
           <div className=" w-[582px] py-[5px] px-[12px] ">
               <div className=" relative flex flex-col items-center justify-center">
                    <Image src={testPin3} alt="" className=" w-[104px] h-[104px] rounded-full shadow-xl border-[5px] border-[#fff]" />
               
               <div className="  ">
                      <div className=" absolute  left-[54%] md:left-[52%]  top-[62px] ">
                        <BiSolidQuoteLeft className="  w-[43px] h-[43px] bg-primary-color text-white shadow-xl  rounded-full p-3 " />
                      </div>
                </div>
                 <div className=" py-[20px] px-[40px] text-center">
                       <h4 className=" text-text-primary text-[18px] font-bold leading-5">Ausgta Silva</h4>
                      <p className=" text-text-primary text-[14px] font-nunito leading-6 ">Sales Manager</p>
                      <p className="mt-[25px] text-text-primary  text-[14px] font-nunito leading-4">Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.</p>
                 </div>
                </div>
           
           </div>
           <div className=" w-[582px] py-[5px] px-[12px] ">
               <div className=" relative flex flex-col items-center justify-center">
                    <Image src={testPin4} alt="" className=" w-[104px] h-[104px] rounded-full shadow-xl border-[5px] border-[#fff]" />
               
               <div className="  ">
                      <div className=" absolute  left-[54%] md:left-[52%]  top-[62px] ">
                        <BiSolidQuoteLeft className="  w-[43px] h-[43px] bg-primary-color text-white shadow-xl  rounded-full p-3 " />
                      </div>
                </div>
                 <div className=" py-[20px] px-[40px] text-center">
                       <h4 className=" text-text-primary text-[18px] font-bold leading-5">Ausgta Silva</h4>
                      <p className=" text-text-primary text-[14px] font-nunito leading-6 ">Sales Manager</p>
                      <p className="mt-[25px] text-text-primary  text-[14px] font-nunito leading-4">Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.</p>
                 </div>
                </div>
           
           </div>
          
           </Slider> 
        
        </div>
    </section>       
  )
}

export default Testmonial
