import Image from "next/image"
import part1 from '../assets/partner1.png'
import part2 from '../assets/partner2.png'
import part3 from '../assets/partner3.png'
import part4 from '../assets/partner4.png'
import part5 from '../assets/partner5.png'

function Partner() {
  return (
    <section className=' py-[60px] bg-white md:px-[90px]'>
      <div className=' px-[15px] '>
           <div className=' mb-[40px] flex flex-col items-center justify-center'>
               <h2 className=' text-text-primary font-nunito  leading-5 mb-[10px] text-[30px] font-bold'>Our Partners</h2>
               <p className=" py-[8px]  text-[16px] font-nunito text-[#777] leading-5 font-normal mb-[10px]">We only work with the best companies around the globe</p>
           </div>
            <div className=" grid md:grid-cols-5 gap-[50px] md:gap-[10px] ">
                <div className=" flex items-center justify-center">
                <Image src={part1} className=" w-[106px] h-[71px]" />
                </div>
                <div className=" flex items-center justify-center">
                <Image src={part2} className=" w-[106px] h-[71px]" />
                </div>
                <div className=" flex items-center justify-center">
                <Image src={part3} className=" w-[106px] h-[71px]" />
                </div>
                <div className=" flex items-center justify-center">
                <Image src={part4} className=" w-[106px] h-[71px]" />
                </div>
                <div className=" flex items-center justify-center">
                <Image src={part5} className=" w-[106px] h-[71px]" />
                </div>
            </div>
        </div>
    </section> 
         
  )
}

export default Partner
