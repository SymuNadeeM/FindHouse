import Image from "next/image"
import Link from "next/link"
import featPic1 from "../assets/_assets_1.jpg"
import featPic2 from "../assets/_assets__2.jpg"
import featPic3 from "../assets/_assets_images_blog_3.jpg"
import mem2 from "../assets/assPer2.png"
import mem3 from "../assets/assPer3.png"
import mem1 from "../assets/p-1.png"

function Articals() {
  return (
    <section className=' py-[60px] bg-[#f7f7f7] md:px-[90px]'>
      <div className=' px-[15px] '>
           <div className=' mb-[40px] flex flex-col items-center justify-center'>
               <h2 className=' text-text-primary font-nunito  leading-5 mb-[10px] text-[30px] font-bold'>Articles & Tips</h2>
               <p className=" py-[8px]  text-[16px] font-nunito text-[#777] leading-5 font-normal mb-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           </div>
       
             <div className=" grid md:grid-cols-3  gap-5 ">
                       <div className=" hover:shadow-md w-[455px] md:w-[365px] bg-white rounded-lg">
                           <div className=" w-full">
                                <div className=" bg-white border-[1px] border-[#ebebeb] rounded-lg">
                                <div className=" relative rounded-lg mt-[10px] mr-[9px] ml-[10px]">
                                     <Image src={featPic1} className=" w-full rounded-lg h-[220px] " />
                                </div>
                                <div>
                                    <div className="p-[20px]">
                                         <p className=" text-[14px] font-nunito leading-5  text-primary-color mb-[15px] ">Business</p>
                                         <h4 className=" text-[18px] font-nunito leading-5 text-text-primary mb-[15px] font-bold">Skills That You Can Learn In The Real Estate Market</h4> 
                                    </div>
                                    <div className=" border-t-[1px] border-[#eee] p-[20px] mb-[15px] ">
                                        <div className=" flex items-center justify-between ">
                                            <div className=" flex items-center">
                                                <Link href={"/"}> <Image src={mem1} className=" w-[40px] h-[40px] mr-[10px]" /> </Link>
                                                <p className="text-[14px] font-nunito leading-5 text-[#777]">Ali Tufan</p>
                                            </div>
                                            <p className="text-[14px] font-nunito leading-5 text-[#777]">1 year ago</p>

                                        </div>
                                    </div>   
                                </div>
                                </div>
                           </div>
                       </div>
                       <div className=" hover:shadow-md w-[455px] md:w-[365px] bg-white rounded-lg">
                           <div className=" w-full">
                                <div className=" bg-white border-[1px] border-[#ebebeb] rounded-lg">
                                <div className=" relative rounded-lg mt-[10px] mr-[9px] ml-[10px]">
                                     <Image src={featPic2} className=" w-full rounded-lg h-[220px] " />
                                </div>
                                <div>
                                    <div className="p-[20px]">
                                         <p className=" text-[14px] font-nunito leading-5  text-primary-color mb-[15px] ">Construction</p>
                                         <h4 className=" text-[18px] font-nunito leading-5 text-text-primary mb-[15px] font-bold">Bedroom Colors You will Never this Regret</h4> 
                                    </div>
                                    <div className=" border-t-[1px] border-[#eee] p-[20px] mb-[15px] ">
                                        <div className=" flex items-center justify-between ">
                                            <div className=" flex items-center">
                                                <Link href={"/"}> <Image src={mem2} className=" w-[40px] h-[40px] mr-[10px]" /> </Link>
                                                <p className="text-[14px] font-nunito leading-5 text-[#777]">Zfran Tufan</p>
                                            </div>
                                            <p className="text-[14px] font-nunito leading-5 text-[#777]">7 August 2023</p>

                                        </div>
                                    </div>   
                                </div>
                                </div>
                           </div>
                       </div>
                       <div className=" hover:shadow-md w-[455px] md:w-[365px] bg-white rounded-lg">
                           <div className=" w-full">
                                <div className=" bg-white border-[1px] border-[#ebebeb] rounded-lg">
                                <div className=" relative rounded-lg mt-[10px] mr-[9px] ml-[10px]">
                                     <Image src={featPic3} className=" w-full rounded-lg h-[220px] " />
                                </div>
                                <div>
                                    <div className="p-[20px]">
                                         <p className=" text-[14px] font-nunito leading-5  text-primary-color mb-[15px] ">Construction</p>
                                         <h4 className=" text-[18px] font-nunito leading-5 text-text-primary mb-[15px] font-bold">5 Essential Steps for Buying everyone Investment</h4> 
                                    </div>
                                    <div className=" border-t-[1px] border-[#eee] p-[20px] mb-[15px] ">
                                        <div className=" flex items-center justify-between ">
                                            <div className=" flex items-center">
                                                <Link href={"/"}> <Image src={mem3} className=" w-[40px] h-[40px] mr-[10px]" /> </Link>
                                                <p className="text-[14px] font-nunito leading-5 text-[#777]">Zfran Tufan</p>
                                            </div>
                                            <p className="text-[14px] font-nunito leading-5 text-[#777]">8 August 2023</p>

                                        </div>
                                    </div>   
                                </div>
                                </div>
                           </div>
                       </div>
                       
             </div>
        </div>
    </section>
  )
}

export default Articals
