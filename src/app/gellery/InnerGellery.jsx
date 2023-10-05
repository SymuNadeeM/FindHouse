import Image from "next/image"
import innerPic from '../assets/gallery.jpg'

function InnerGellery() {
  return (
    <>
      <div className=' relative'>
               <Image src={innerPic} className=" h-[255px] md:h-[370px] "/>
               <div className=" absolute px-[15px] bottom-[100px] md:bottom-[150px] md:left-[100px]">
                   <div className=" mt-[85px]">
                        <div className=" text-white font-nunito text-[16px] gap-2 flex items-center">
                            <p>Home</p>
                            <p>/</p>
                            <p>Gellery</p>
                        </div>
                         <h4 className=" mt-[20px] font-nunito text-[40px] text-white font-bold leading-5">Gellery</h4>
                   </div>
               </div>
          </div>
    </>
  )
}

export default InnerGellery
