import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineCaretUp } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { RxCross1 } from 'react-icons/rx';
import logopic from "../assets/colorheader-logo2.png";

export default function SmallNav() {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
  return (
    <>
              <div className=" bg-white">
            <div className=" flex items-center justify-between p-[20px] ">
            <Link href={"/"} className="flex mr-[30px] relative">
            <Image src={logopic} width={40} height={45} className=" text-primary-color"/>
            <p className=" text-[20px]  text-[#484848] font-bold  mt-[12px] pl-[10px]  font-nunito leading-7">FindHouse</p>
            </Link>
            <RxCross1 onClick={handlemenu}  size={20} className=" mt-[4px] text-black" />
            </div> 
              <div className=" relative h-auto">
              <button onClick={()=> setIsOpen(!isOpen)} className="">
                 Dropdown
                   {
                    !isOpen? (<MdKeyboardArrowRight className=" h-8" />) :(<AiOutlineCaretUp  />)
                   }
              </button>
               {isOpen && <div className=" bg-blue text-white"> 
                     <ul>
                      <li>About1</li>
                      <li>About2</li>
                      <li>About3</li>
                      <li>About4</li>
                     </ul>
                </div>}
      
              </div>
              <div className=" relative h-auto">
              <button onClick={()=> setIsOpen2(!isOpen2)} className="">
                 Dropdown
                   {
                    !isOpen2? (<MdKeyboardArrowRight className=" h-8" />) :(<AiOutlineCaretUp  />)
                   }
              </button>
               {isOpen2 && <div className=" bg-blue text-white"> 
                     <ul>
                      <li>About1</li>
                      <li>About2</li>
                      <li>About3</li>
                      <li>About4</li>
                     </ul>
                </div>}
      
              </div>
        </div>
    </>
  )
}
