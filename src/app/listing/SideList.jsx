import Image from "next/image"
import Link from "next/link"

import { BiCaretRight } from "react-icons/bi"
import { CiLocationOn, CiSearch } from "react-icons/ci"
import { HiOutlineDotsVertical } from "react-icons/hi"
import featPic3 from "../assets/features3.jpg"
import sidPIn1 from "../assets/fp2.jpg"
import sidPIn2 from "../assets/fp3.jpg"
import sidPIn3 from "../assets/fp4.jpg"

function SideList() {
  return (
    <>
    <div>
      <div className=' h-fit border-[1px] border-[#ebebeb] rounded-lg bg-white overflow-hidden  p-[30px]'>
          <div>
              <ul>
                <li className=' relative'>
                    <div className=' flex items-center mb-[1rem]'>
                        <input type="text" className=' outline-none bg-white border-[1px] border-[#ebebeb]  rounded-lg font-nunito text-[14px] text-text-primary leading-5 h-[52px] pl-[20px] pr-[40px] w-full ' />
                        <label htmlFor="" className=' absolute right-[10px] text-[18px] text-[#777]'><CiSearch size={24}/></label>
                    </div>
                </li>
                <li className=' relative'>
                    <div className=' flex items-center mb-[1rem]'>
                        <input type="text" className=' outline-none bg-white border-[1px] border-[#ebebeb]  rounded-lg font-nunito text-[14px] text-text-primary leading-5 h-[52px] pl-[20px] pr-[40px] w-full ' />
                        <label htmlFor="" className=' absolute right-[10px] text-[18px] text-[#777]'><CiLocationOn size={24}/></label>
                    </div>
                </li>
                 <li>
                    <div className="  flex items-center mb-[1rem]">
                         <select name="" id="" className="outline-none  bg-white border-[1px] border-[#ebebeb]  rounded-lg font-nunito text-[14px] text-text-primary leading-5 h-[52px] pl-[20px] w-full">
                             <option value="">Status</option>
                             <option value="apartment">Apartment</option>
                             <option value="bungalow">Bungalow</option>
                             <option value="condo">Condo</option>
                             <option value="land">Land</option>
                         </select>
                    </div>
                 </li>
                 <li>
                    <div className="  flex items-center mb-[1rem]">
                         <select name="" id="" className="outline-none  bg-white border-[1px] border-[#ebebeb]  rounded-lg font-nunito text-[14px] text-text-primary leading-5 h-[52px] pl-[20px] w-full">
                             <option value="">Property</option>
                             <option value="apartment">Apartment</option>
                             <option value="bungalow">Bungalow</option>
                             <option value="condo">Condo</option>
                             <option value="land">Land</option>
                         </select>
                    </div>
                 </li>
                 <li>
                    <div className="  flex items-center mb-[1rem]">
                         <select name="" id="" className="outline-none  bg-white border-[1px] border-[#ebebeb]  rounded-lg font-nunito text-[14px] text-text-primary leading-5 h-[52px] pl-[20px] w-full">
                             <option value="">Price Range</option>
                             
                         </select>
                         
                    </div>
                 </li>
                 <li>
                    <div className="  flex items-center mb-[1rem]">
                         <select name="" id="" className="outline-none  bg-white border-[1px] border-[#ebebeb]  rounded-lg font-nunito text-[14px] text-text-primary leading-5 h-[52px] pl-[20px] w-full">
                             <option value="">Bathrooms</option>
                             <option value="apartment">1</option>
                             <option value="bungalow">2</option>
                             <option value="condo">3</option>
                             <option value="land">4</option>
                         </select>
                    </div>
                 </li>
                 <li>
                    <div className="  flex items-center mb-[1rem]">
                         <select name="" id="" className="outline-none  bg-white border-[1px] border-[#ebebeb]  rounded-lg font-nunito text-[14px] text-text-primary leading-5 h-[52px] pl-[20px] w-full">
                             <option value="">Bedrooms</option>
                             <option value="apartment">1</option>
                             <option value="bungalow">2</option>
                             <option value="condo">3</option>
                             <option value="land">4</option>
                         </select>
                    </div>
                 </li>
                 <li>
                    <div className="  flex items-center mb-[1rem]">
                         <select name="" id="" className="outline-none  bg-white border-[1px] border-[#ebebeb]  rounded-lg font-nunito text-[14px] text-text-primary leading-5 h-[52px] pl-[20px] w-full">
                             <option value="">Garages</option>
                             <option value="apartment">Yes</option>
                             <option value="bungalow">NO</option>
                             <option value="condo">Other</option>
                             
                         </select>
                    </div>
                 </li>
                 <li>
                    <div className="  flex items-center mb-[1rem]">
                         <select name="" id="" className="outline-none  bg-white border-[1px] border-[#ebebeb]  rounded-lg font-nunito text-[14px] text-text-primary leading-5 h-[52px] pl-[20px] w-full">
                             <option value="">Year built</option>
                             <option value="apartment">2013</option>
                             <option value="bungalow">2014</option>
                             <option value="condo">2015</option>
                             <option value="condo">2016</option>
                             <option value="condo">2017</option>
                         </select>
                    </div>
                 </li>
                <li className=" flex items-center justify-between w-full">
                     
                 <div className=" w-[135px] mr-[20px]">
                     <div className=" mb-[1rem]">
                             <input type="text" placeholder="Min Area" className="outline-none  bg-white border-[1px] border-[#ebebeb]  rounded-lg font-nunito text-[14px] text-text-primary leading-5 h-[52px] w-full pl-[20px] py-[.375rem] pr-[.75rem]" />
                     </div>
                 </div>
                 <div className="  w-[135px] mr-[20px]">
                     <div className=" mb-[1rem]">
                             <input type="text" placeholder="Max Area" className="outline-none  bg-white border-[1px] border-[#ebebeb]  rounded-lg font-nunito text-[14px] text-text-primary leading-5 h-[52px] w-full pl-[20px] py-[.375rem] pr-[.75rem]" />
                     </div>
                 </div>
                </li>
                <li>
                    <div className="  flex items-center mb-[25px] gap-[5px]">
                         <HiOutlineDotsVertical />
                         <p className=" outline-none  font-nunito text-[14px] leading-5 text-text-primary"> Advanced features</p>
                    </div>
                 </li>
                 <li>
                     <div>
                         <button className=" w-full h-[50px] bg-primary-color hover:bg-white duration-300 hover:border-[2px] border-primary-color rounded-[5px] text-white hover:text-primary-color">
                            Clear Filters
                         </button>
                     </div>
                 </li>
                 
              </ul>
          </div>
          {/* ------------------------------------------------------------- */}
      </div>
      <div className="mt-[30px] h-fit border-[1px] border-[#ebebeb] rounded-lg bg-white overflow-hidden pb-[20px] p-[30px]">
        <h4 className="mb-[20px] text-[18px] font-bold text-text-primary font-nunito">Featured Properties</h4>
          <div className=" relative rounded-lg ">
              <Image src={featPic3} className=" w-full rounded-lg " />
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
     </div>
     <div className="mt-[30px] h-fit border-[1px] border-[#ebebeb] rounded-lg bg-white overflow-hidden pb-[20px] p-[30px]">
     <h4 className="mb-[20px] text-[18px] font-bold text-text-primary font-nunito">Categories Property</h4>
       <div>
          <ul>
            <li className=" flex items-center justify-between text-[14px] font-nunito leading-10 text-[#484848]">
                <Link href={""} className=" flex items-center gap-1"><BiCaretRight /> Apartment</Link>
                 <p>6 properties</p>
            </li>
            <li className=" flex items-center justify-between text-[14px] font-nunito leading-10 text-[#484848]">
                <Link href={""} className=" flex items-center gap-1"><BiCaretRight /> Condo</Link>
                 <p>12 properties</p>
            </li>
            <li className=" flex items-center justify-between text-[14px] font-nunito leading-10 text-[#484848]">
                <Link href={""} className=" flex items-center gap-1"><BiCaretRight /> Family House</Link>
                 <p>8 properties</p>
            </li>
            <li className=" flex items-center justify-between text-[14px] font-nunito leading-10 text-[#484848]">
                <Link href={""} className=" flex items-center gap-1"><BiCaretRight /> Modern Villa</Link>
                 <p>26 properties</p>
            </li>
            <li className=" flex items-center justify-between text-[14px] font-nunito leading-10 text-[#484848]">
                <Link href={""} className=" flex items-center gap-1"><BiCaretRight /> Town House</Link>
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

export default SideList
