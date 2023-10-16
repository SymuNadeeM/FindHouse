import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import featPic2 from "../assets/_assets__2.jpg";
import featPic3 from "../assets/features3.jpg";

function PicSlider() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
       <Slider {...settings}>
            <div className=" relative rounded-lg ">
              <Image src={featPic3} className=" w-full rounded-lg " alt='' />
                <div className="  absolute top-[24px] md:top-[10px] bottom-0 right-[24px] md:right-[10px] left-[24px] md:left-[10px] ">
                     <div className=" flex">
                        <Link href={""} className=" mr-[0.5rem] bg-[#3e4c66] text-white font-nunito text-[14px] leading-5  rounded w-[75px] h-[25px] items-center flex justify-center text-center">
                            Featured
                             </Link>
                             <Link href={""} className="  bg-primary-color text-white font-nunito text-[14px] leading-5  rounded w-[75px] h-[25px] items-center flex justify-center text-center">
                                                 For Rent
                                                </Link>
                                           </div>
                                     </div>
                                     
                                     <div className=" absolute bottom-[15px] text-[22px] font-nunito text-white font-bold left-[20px] leading-5">
                                             <h4>$15000/<small>mo</small></h4>
                                              <h4 className=" ">Renovated Apartment</h4>
                                     </div>
            </div> 
            <div className=" relative rounded-lg ">
              <Image src={featPic2} className=" w-full rounded-lg " alt='' />
                <div className="  absolute top-[24px] md:top-[10px] bottom-0 right-[24px] md:right-[10px] left-[24px] md:left-[10px] ">
                     <div className=" flex">
                        <Link href={""} className=" mr-[0.5rem] bg-[#3e4c66] text-white font-nunito text-[14px] leading-5  rounded w-[75px] h-[25px] items-center flex justify-center text-center">
                            Featured
                             </Link>
                             <Link href={""} className="  bg-primary-color text-white font-nunito text-[14px] leading-5  rounded w-[75px] h-[25px] items-center flex justify-center text-center">
                                                 For Rent
                                                </Link>
                                           </div>
                                     </div>
                                     
                                     <div className=" absolute bottom-[15px] text-[22px] font-nunito text-white font-bold left-[20px] leading-5">
                                             <h4>$15000/<small>mo</small></h4>
                                              <h4 className=" ">Renovated Apartment</h4>
                                     </div>
            </div>  
            <div className=" relative rounded-lg ">
              <Image src={featPic3} className=" w-full rounded-lg " alt='' />
                <div className="  absolute top-[24px] md:top-[10px] bottom-0 right-[24px] md:right-[10px] left-[24px] md:left-[10px] ">
                     <div className=" flex">
                        <Link href={""} className=" mr-[0.5rem] bg-[#3e4c66] text-white font-nunito text-[14px] leading-5  rounded w-[75px] h-[25px] items-center flex justify-center text-center">
                            Featured
                             </Link>
                             <Link href={""} className="  bg-primary-color text-white font-nunito text-[14px] leading-5  rounded w-[75px] h-[25px] items-center flex justify-center text-center">
                                                 For Rent
                                                </Link>
                                           </div>
                                     </div>
                                     
                                     <div className=" absolute bottom-[15px] text-[22px] font-nunito text-white font-bold left-[20px] leading-5">
                                             <h4>$15000/<small>mo</small></h4>
                                              <h4 className=" ">Renovated Apartment</h4>
                                     </div>
            </div> 
            <div className=" relative rounded-lg ">
              <Image src={featPic2} className=" w-full rounded-lg " alt='' />
                <div className="  absolute top-[24px] md:top-[10px] bottom-0 right-[24px] md:right-[10px] left-[24px] md:left-[10px] ">
                     <div className=" flex">
                        <Link href={""} className=" mr-[0.5rem] bg-[#3e4c66] text-white font-nunito text-[14px] leading-5  rounded w-[75px] h-[25px] items-center flex justify-center text-center">
                            Featured
                             </Link>
                             <Link href={""} className="  bg-primary-color text-white font-nunito text-[14px] leading-5  rounded w-[75px] h-[25px] items-center flex justify-center text-center">
                                                 For Rent
                                                </Link>
                                           </div>
                                     </div>
                                     
                                     <div className=" absolute bottom-[15px] text-[22px] font-nunito text-white font-bold left-[20px] leading-5">
                                             <h4>$15000/<small>mo</small></h4>
                                              <h4 className=" ">Renovated Apartment</h4>
                                     </div>
            </div> 
        </Slider> 
    </>
  )
}

export default PicSlider
