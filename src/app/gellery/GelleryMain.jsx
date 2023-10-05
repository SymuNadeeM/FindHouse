import Image from "next/image";
import { MdSearch } from 'react-icons/md';
import gellPic1 from '../assets/gellerypic1.jpg';
import gellPic2 from '../assets/gellerypic2.jpg';
import gellPic3 from '../assets/gellerypic3.jpg';
import gellPic4 from '../assets/gellerypic4.jpg';
import gellPic5 from '../assets/gellerypic5.jpg';
import gellPic6 from '../assets/gellerypic6.jpg';
import gellPic7 from '../assets/gellerypic7.jpg';
import gellPic8 from '../assets/gellerypic8.jpg';
import gellPic9 from '../assets/gellerypic9.jpg';


function GelleryMain() {
  return (
    <section className=' py-[60px] bg-[#f7f7f7] md:px-[90px]'>
      <div className=' px-[15px] '>
         
             <div className=" grid md:grid-cols-3 gap-[25px]">
                    <div className=" group relative">
                        <Image src={gellPic1} className="w-full h-full" />
                        <div className=" absolute opacity-0 group-hover:opacity-100 transition delay-150 duration-300 ease-in-out  bg-[rgba(255,90,95,.8)] top-0 left-0 right-0 bottom-0  ">
                            <div className=" items-center justify-center flex  left-[50%] right-[50%] top-[50%] bottom-[50%] absolute">

                                      <p><MdSearch className=" text-white" size={36}/></p>
                            </div>
                        </div>
                    </div>
                    <div className=" group relative">
                        <Image src={gellPic2} className="w-full h-full" />
                        <div className=" absolute opacity-0 group-hover:opacity-100 transition delay-150 duration-300 ease-in-out  bg-[rgba(255,90,95,.8)] top-0 left-0 right-0 bottom-0  ">
                            <div className=" items-center justify-center flex  left-[50%] right-[50%] top-[50%] bottom-[50%] absolute">

                                      <p><MdSearch className=" text-white" size={36}/></p>
                            </div>
                        </div>
                    </div>
                    <div className=" group relative">
                        <Image src={gellPic3} className="w-full h-full" />
                        <div className=" absolute opacity-0 group-hover:opacity-100 transition delay-150 duration-300 ease-in-out  bg-[rgba(255,90,95,.8)] top-0 left-0 right-0 bottom-0  ">
                            <div className=" items-center justify-center flex  left-[50%] right-[50%] top-[50%] bottom-[50%] absolute">

                                      <p><MdSearch className=" text-white" size={36}/></p>
                            </div>
                        </div>
                    </div>
                    <div className=" group relative">
                        <Image src={gellPic4} className="w-full h-full" />
                        <div className=" absolute opacity-0 group-hover:opacity-100 transition delay-150 duration-300 ease-in-out  bg-[rgba(255,90,95,.8)] top-0 left-0 right-0 bottom-0  ">
                            <div className=" items-center justify-center flex  left-[50%] right-[50%] top-[50%] bottom-[50%] absolute">

                                      <p><MdSearch className=" text-white" size={36}/></p>
                            </div>
                        </div>
                    </div>
                    <div className=" group relative">
                        <Image src={gellPic5} className="w-full h-full" />
                        <div className=" absolute opacity-0 group-hover:opacity-100 transition delay-150 duration-300 ease-in-out  bg-[rgba(255,90,95,.8)] top-0 left-0 right-0 bottom-0  ">
                            <div className=" items-center justify-center flex  left-[50%] right-[50%] top-[50%] bottom-[50%] absolute">

                                      <p><MdSearch className=" text-white" size={36}/></p>
                            </div>
                        </div>
                    </div>
                    <div className=" group relative">
                        <Image src={gellPic6} className="w-full h-full" />
                        <div className=" absolute opacity-0 group-hover:opacity-100 transition delay-150 duration-300 ease-in-out  bg-[rgba(255,90,95,.8)] top-0 left-0 right-0 bottom-0  ">
                            <div className=" items-center justify-center flex  left-[50%] right-[50%] top-[50%] bottom-[50%] absolute">

                                      <p><MdSearch className=" text-white" size={36}/></p>
                            </div>
                        </div>
                    </div>
                    <div className=" group relative">
                        <Image src={gellPic7} className="w-full h-full" />
                        <div className=" absolute opacity-0 group-hover:opacity-100 transition delay-150 duration-300 ease-in-out  bg-[rgba(255,90,95,.8)] top-0 left-0 right-0 bottom-0  ">
                            <div className=" items-center justify-center flex  left-[50%] right-[50%] top-[50%] bottom-[50%] absolute">

                                      <p><MdSearch className=" text-white" size={36}/></p>
                            </div>
                        </div>
                    </div>
                    <div className=" group relative">
                        <Image src={gellPic8} className="w-full h-full" />
                        <div className=" absolute opacity-0 group-hover:opacity-100 transition delay-150 duration-300 ease-in-out  bg-[rgba(255,90,95,.8)] top-0 left-0 right-0 bottom-0  ">
                            <div className=" items-center justify-center flex  left-[50%] right-[50%] top-[50%] bottom-[50%] absolute">

                                      <p><MdSearch className=" text-white" size={36}/></p>
                            </div>
                        </div>
                    </div>
                    <div className=" group relative">
                        <Image src={gellPic9} className="w-full h-full" />
                        <div className=" absolute opacity-0 group-hover:opacity-100 transition delay-150 duration-300 ease-in-out  bg-[rgba(255,90,95,.8)] top-0 left-0 right-0 bottom-0  ">
                            <div className=" items-center justify-center flex  left-[50%] right-[50%] top-[50%] bottom-[50%] absolute">

                                      <p><MdSearch className=" text-white" size={36}/></p>
                            </div>
                        </div>
                    </div>
             </div>
      </div>
    </section>  
  )
}

export default GelleryMain
