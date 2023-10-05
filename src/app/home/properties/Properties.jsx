import Image from "next/image"
import proPin1 from '../../assets/_assets_images_property_pc1.jpg'
import proPin2 from '../../assets/property_pc2.jpg'
import proPin3 from '../../assets/property_pc3.jpg'
import proPin4 from '../../assets/property_pc4.jpg'


const Properties = () => {
  return (
    <section className=' py-[60px] bg-white md:px-[90px]'>
            <div className=' px-[15px] '>
                   <div className=' mb-[40px] flex flex-col items-center justify-center'>
                       <h2 className=' text-text-primary font-nunito  leading-5 mb-[10px] text-[30px] font-bold'>Find Properties in These Cities</h2>
                       <p className=" py-[8px]  text-[16px] font-nunito text-[#777] leading-5 font-normal mb-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                   </div>

                   <div className=" md:grid md:grid-cols-3 gap-[25px]">
                        <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat  mb-[30px] rounded-[10px] w-full h-[440px] md:h-[355px] bg-slate-400 grid col-span-1">
                               <Image src={proPin1} className=" w-full h-full  duration-250 max-w-xs transition  ease-in-out hover:scale-110" alt="Louvre"/>
                              <div className=" flex flex-col items-center justify-center absolute text-[#fff] bottom-[20px] left-[50%] right-[50%]">
                                  <h4 className=" text-[18px] font-nunito font-bold leading-5  mb-[5px]">Miami</h4>
                                  <p className="text-[14px] font-nunito font-bold ">24 Properties</p>
                              </div>
                        </div>
                        <div className=" relative mb-[30px] rounded-[10px]  bg-slate-400 grid col-span-2">
                        <Image src={proPin2} className=" w-full h-full" />
                        <div className=" absolute flex flex-col items-center justify-center  text-[#fff] bottom-[20px] left-[130px] right-[130px] md:left-[322px] md:right-[322px]">
                                  <h4 className=" text-[18px] font-nunito font-bold leading-5  mb-[5px]">Los Angeles</h4>
                                  <p className="text-[14px] font-nunito font-bold leading-5">18 Properties</p>
                              </div>
                        </div>
                        <div className=" relative mb-[30px] md:mb-0 w-full rounded-[10px] h-[215px]  md:h-[355px] bg-slate-400 grid col-span-2">
                        <Image src={proPin3} className=" w-full h-full" />
                        <div className=" absolute flex flex-col items-center justify-center  text-[#fff] bottom-[20px] left-[130px] right-[130px] md:left-[322px] md:right-[322px]">
                                  <h4 className=" text-[18px] font-nunito font-bold leading-5  mb-[5px]">Los Angeles</h4>
                                  <p className="text-[14px] font-nunito font-bold leading-5">18 Properties</p>
                              </div>
                        </div>
                        <div className=" relative rounded-[10px]  bg-slate-400 grid col-span-1">
                        <Image src={proPin4} className=" w-full h-full" />
                        <div className=" flex flex-col items-center justify-center absolute text-[#fff] bottom-[20px] left-[130px] right-[130px]">
                                  <h4 className=" text-[18px] font-nunito font-bold leading-5  mb-[5px]">Miami</h4>
                                  <p className="text-[14px] font-nunito font-bold leading-5">24 Properties</p>
                              </div>
                        </div>
                   </div>
            </div>
    </section>               
  )
}

export default Properties
