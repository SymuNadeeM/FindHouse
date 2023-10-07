import Image from "next/image"
import Link from "next/link"
import { BiCaretRight } from "react-icons/bi"
import { CiSearch } from "react-icons/ci"
import sidPIn1 from "../assets/fp2.jpg"
import sidPIn2 from "../assets/fp3.jpg"
import sidPIn3 from "../assets/fp4.jpg"

function RightSideBlog() {
  return (
    <>
    <div>
         <div className=" p-[30px] border-[1px] border-[#ebebeb] rounded-[8px] bg-white mb-[30px]">
                 <div className=' flex items-center border-[1px] border-[#ebebeb] rounded-[8px] justify-between w-[302px]  h-[52px] px-[20px] '>
                         <input type="text" placeholder='Search Here' className=' w-[88%]  outline-none text-[14px] font-nunito text-text-primary  py-[7px] ' />
                          <CiSearch  size={20} className=' text-text-primary ' />
                  </div> 
         </div>
         <div className="mt-[30px] h-fit border-[1px] border-[#ebebeb] rounded-lg bg-white overflow-hidden pb-[20px] p-[30px]">
          <h4 className="mb-[20px] text-[18px] font-bold text-text-primary font-nunito">Categories Property</h4>
       <div>
          <ul>
            <li className=" flex items-center justify-between text-[14px] font-nunito leading-10 text-[#484848]">
                <Link href={""} className=" flex items-center gap-1"><BiCaretRight /> <span className=" hover:text-primary-color">Apartment</span> </Link>
                 <p>6 properties</p>
            </li>
            <li className=" flex items-center justify-between text-[14px] font-nunito leading-10 text-[#484848]">
                <Link href={""} className=" flex items-center gap-1"><BiCaretRight /> <span className=" hover:text-primary-color">Condo</span> </Link>
                 <p>12 properties</p>
            </li>
            <li className=" flex items-center justify-between text-[14px] font-nunito leading-10 text-[#484848]">
                <Link href={""} className=" flex items-center gap-1"><BiCaretRight /> <span className=" hover:text-primary-color">Family House</span> </Link>
                 <p>8 properties</p>
            </li>
            <li className=" flex items-center justify-between text-[14px] font-nunito leading-10 text-[#484848]">
                <Link href={""} className=" flex items-center gap-1"><BiCaretRight /> <span className=" hover:text-primary-color">Modern Villa</span> </Link>
                 <p>26 properties</p>
            </li>
            <li className=" flex items-center justify-between text-[14px] font-nunito leading-10 text-[#484848]">
                <Link href={""} className=" flex items-center gap-1"><BiCaretRight /> <span className=" hover:text-primary-color">Town House</span> </Link>
                 <p>89 properties</p>
            </li>
          </ul>
       </div>
     </div>
     <div className="mt-[30px] h-fit border-[1px] border-[#ebebeb] rounded-lg bg-white overflow-hidden pb-[20px] p-[30px]">
       <h4 className="mb-[20px] text-[18px] font-bold text-text-primary font-nunito">Recently Viewed</h4>
          <div className="mt-[30px] flex">
              <div className=" w-[118px] h-[80px]">
              <Image src={sidPIn1} className=" rounded-md w-[102px] h-[80px]"/>
              </div>
              <div className=" space-y-2">
                  <h5 className=" text-[16px] font-nunito text-text-primary font-bold leading-5">Luxury Family Home</h5>
                  <h5 className=" text-[16px] font-nunito text-[#ff5a5f] font-bold leading-5">$19000/<small>/mo</small></h5>
                  <ul className=" flex items-center justify-between text-[14px] font-nunito text-text-primary  gap-2 leading-5 ">
                     <li>Beds:4</li>
                     <li>Baths:2</li>
                     <li>SqFt:5280</li>
                  </ul> 
              </div>
          </div>
          <div className="mt-[30px] flex">
              <div className=" w-[118px] h-[80px]">
              <Image src={sidPIn2} className=" rounded-md w-[102px] h-[80px]"/>
              </div>
              <div className=" space-y-2">
                  <h5 className=" text-[16px] font-nunito text-text-primary font-bold leading-5">Luxury Family Home</h5>
                  <h5 className=" text-[16px] font-nunito text-[#ff5a5f] font-bold leading-5">$19000/<small>/mo</small></h5>
                  <ul className=" flex items-center justify-between text-[14px] font-nunito text-text-primary  gap-2 leading-5 ">
                     <li>Beds:4</li>
                     <li>Baths:2</li>
                     <li>SqFt:5280</li>
                  </ul> 
              </div>
          </div>
          <div className="mt-[30px] flex">
              <div className=" w-[118px] h-[80px]">
              <Image src={sidPIn3} className=" rounded-md w-[102px] h-[80px]"/>
              </div>
              <div className=" space-y-2">
                  <h5 className=" text-[16px] font-nunito text-text-primary font-bold leading-5">Renovated Apartment</h5>
                  <h5 className=" text-[16px] font-nunito text-[#ff5a5f] font-bold leading-5">$29000/<small>/mo</small></h5>
                  <ul className=" flex items-center justify-between text-[14px] font-nunito text-text-primary  gap-2 leading-5 ">
                     <li>Beds:4</li>
                     <li>Baths:2</li>
                     <li>SqFt:5280</li>
                  </ul> 
              </div>
          </div>
     </div>
    </div>
    </>
  )
}

export default RightSideBlog
