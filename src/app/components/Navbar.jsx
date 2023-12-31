"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiPlus } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { LiaUserSolid } from 'react-icons/lia';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import { RxCross1 } from 'react-icons/rx';
import logopic from "../assets/colorheader-logo2.png";
import ModelLogReg from "./ModelLogReg";


export default function Navbar() {
 
  const [oneModel, setOneModel] = useState(false)
  const [menuOpnen, setMenuopen] = useState(true)
   const [isOpen, setIsOpen] = useState(false)
   const [isOpen2, setIsOpen2] = useState(false)
   const [isPage, setIsPage] = useState(false)
   const [isProperty, setIsProperty] = useState(false)
   const [isBlog, setIsBlog] = useState(false)

  const handlemenu =()=>{
    setMenuopen(!menuOpnen)
    
  }
  const handleModal =()=>{
    setOneModel(!oneModel)
  }

  return (
    <>
    {oneModel? (
        <div className=" z-50  bg-black/75 fixed top-0 right-[50%] bottom-0 left-0 h-screen w-screen overflow-y-auto">     
          <div>
            <ModelLogReg handleModal={handleModal}/>
          </div>
        </div>
    ) : ""}
     <header className=" z-30 px-[20px] md:px-[30px] fixed  top-0 right-0 left-0 bg-white  ">
         <div className="hidden md:flex items-center justify-between text-[#777] text-[16px] leading-6 ">
            <Link href={"/"} className="  flex mr-[37px] relative">
            <Image src={logopic} alt="" width={40} height={45} className=" text-primary-color"/>
            <p className=" text-[22px] text-[#484848] font-bold mt-[9px] pl-[15px]  font-nunito leading-7">FindHouse</p>
            </Link>
            <nav>
                <ul className=" flex items-center justify-start text-[#484848] font-nunito bg-white ">
                    <li className=" mx-[2px] relative  group bg-white   "><Link href={"/"} className="  text-[#484848] pt-[30px] pr-[16px] pb-[30px] pl-[10px]  font-normal text-[16px] flex items-center gap-2 " > Home <MdKeyboardArrowDown  /></Link> 
                         
                       <ul className="z-10  absolute  invisible group-hover:visible bg-white rounded-md py-[15px] shadow-xl duration-150  px-[30px] w-[260px] ">
                     
                           <li className=" hover:translate-x-3 duration-150 hover:text-primary-color   border-b-[1px] border-[#dedede] text-sm py-[15px] pr-[20px] " ><Link href={"/"} >Home 1</Link> </li>
                           <li className="  hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[15px] pr-[20px] "><Link href={"/"} >Home 2</Link>  </li>
                           <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[15px] pr-[20px] " ><Link href={"/"} >Home 3</Link>  </li>
                           <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[15px] pr-[20px] " ><Link href={"/"} >Home 4</Link>  </li>
                           <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[15px] pr-[20px] " ><Link href={"/"} >Home 5</Link> </li>
                           <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[15px] pr-[20px] " ><Link href={"/"} >Home 6</Link>  </li>
                           <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[15px] pr-[20px] " ><Link href={"/"} >Home 7</Link> </li>
                           <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[15px] pr-[20px] " ><Link href={"/"} >Home 8</Link>  </li>
                           <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[15px] pr-[20px] " ><Link href={"/"} >Home 9</Link>  </li>
                           <li className=" hover:translate-x-3 duration-150 hover:text-primary-color  text-sm py-[15px] pr-[20px] " ><Link href={"/"} >Home 10</Link> </li>
                           
                           
                       </ul>
                    </li>
                    <li className=" mx-[2px] relative  group bg-white   "><Link href={"/listing"} className="  text-[#484848] pt-[30px] pr-[16px] pb-[30px] pl-[10px]  font-normal text-[16px] flex items-center gap-2 " > Listing <MdKeyboardArrowDown  /></Link> 
                         
                       <ul className="z-10  absolute  invisible group-hover:visible bg-white rounded-md py-[15px] shadow-xl duration-150  px-[30px] w-[260px] ">
                       <li className="relative  group2  border-b-[1px]  hover:translate-x-3 duration-150  border-[#dedede] text-sm py-[15px] pr-[20px] "><Link href={"/listing"} className="flex  justify-between items-center" > 
                       Listing Grid <MdKeyboardArrowRight size={20} />  </Link>
                             <ul className=" ml-[200px] absolute  invisible group2-hover:visible bg-white rounded-md py-[15px] shadow-xl duration-150  px-[30px] w-[260px]">
                                <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[12px] pr-[20px] " >Grid v1</li>
                                <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[12px] pr-[20px] " >Grid v2</li>
                                <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[12px] pr-[20px] " >Grid v2</li>
                                <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[12px] pr-[20px] " >Grid v2</li>
                                <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[12px] pr-[20px] " >Grid v2</li>
                                <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[12px] pr-[20px] " >Grid v2</li>
                                <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[12px] pr-[20px] " >Grid v2</li>
                                <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[12px] pr-[20px] " >Grid v2</li>
                                <li className=" hover:translate-x-3 duration-150 hover:text-primary-color text-sm py-[12px] pr-[20px] " >Grid vlast</li>
                             </ul>
                           </li>
                           <li className="relative  group2 hover:translate-x-3 duration-150 border-b-[1px]  border-[#dedede] text-sm py-[15px] pr-[20px] "><Link href={"/listing"} className="flex  justify-between items-center" > 
                       Listing List <MdKeyboardArrowRight size={20} />  </Link>
                             <ul className=" ml-[220px] absolute  invisible group2-hover:visible bg-white rounded-md py-[15px] shadow-xl duration-150  px-[30px] w-[260px]">
                                <li className=" text-sm py-[12px] pr-[20px] hover:translate-x-3 duration-150 hover:text-primary-color" >List v1</li>
                                
                             </ul>
                           </li>
                           <li className="relative  group2  border-b-[1px] hover:translate-x-3 duration-150   border-[#dedede] text-sm py-[15px] pr-[20px] "><Link href={"/listing"} className="flex  justify-between items-center" > 
                       Listing Style <MdKeyboardArrowRight size={20} />  </Link>
                             <ul className=" ml-[220px] absolute  invisible group2-hover:visible bg-white rounded-md py-[15px] shadow-xl duration-150  px-[30px] w-[260px]">
                             <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[12px] pr-[20px] " >Parallaz Style</li>
                             <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[12px] pr-[20px] " >Slider Style</li>
                             <li className=" hover:translate-x-3 duration-150 hover:text-primary-color text-sm py-[12px] pr-[20px] " >Map Header</li>
                                
                             </ul>
                           </li>
                           <li className="relative  group2  border-b-[1px] hover:translate-x-3 duration-150   border-[#dedede] text-sm py-[15px] pr-[20px] "><Link href={"/listing"} className="flex  justify-between items-center" > 
                       Listing Half <MdKeyboardArrowRight size={20} />  </Link>
                             <ul className=" ml-[220px] absolute  invisible group2-hover:visible bg-white rounded-md py-[15px] shadow-xl duration-150  px-[30px] w-[260px]">
                             <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[12px] pr-[20px] " >Map v1</li>
                             <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[12px] pr-[20px] " >Map v2</li>
                             <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[12px] pr-[20px] " >Map v3</li>
                             <li className=" hover:translate-x-3 duration-150 hover:text-primary-color text-sm py-[12px] pr-[20px] " >Map v4</li>
                                
                             </ul>
                           </li>
                           <li className="relative  group2  border-b-[1px] hover:translate-x-3 duration-150   border-[#dedede] text-sm py-[15px] pr-[20px] "><Link href={"/listing"} className="flex  justify-between items-center" > 
                      Agent View<MdKeyboardArrowRight size={20} />  </Link>
                             <ul className=" ml-[220px] absolute  invisible group2-hover:visible bg-white rounded-md py-[15px] shadow-xl duration-150  px-[30px] w-[260px]">
                             <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[12px] pr-[20px] " >Agent v1</li>
                             <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[12px] pr-[20px] " >Agent v2</li>
                             <li className="hover:translate-x-3 duration-150 hover:text-primary-color  text-sm py-[12px] pr-[20px] " >Agent Details</li>
                             
                                
                             </ul>
                           </li>
                           <li className=" border-b-[1px] border-[#dedede] text-sm py-[12px] pr-[20px] hover:translate-x-3 duration-150 " ><Link href={'/'}>Agencies View</Link></li>
                           <li  className="   text-sm py-[12px] pr-[20px] hover:translate-x-3 duration-150 " ><Link href={'/'}>Create Listing </Link> </li>
                       </ul>
                    </li>
                    <li className=" mx-[2px] "><Link href={"/"} className=" pt-[30px] pr-[16px] pb-[30px] pl-[10px] font-light text-[#777] flex items-center gap-2   " > Property </Link> </li>
                    <li className=" mx-[2px] relative  group   "><Link href={"/"} className=" pt-[30px] pr-[16px] pb-[30px] pl-[10px] font-light text-[#777] flex items-center gap-2 " > Pages <MdKeyboardArrowDown  /></Link> 
                         
                         <ul className="z-10  absolute  invisible group-hover:visible bg-white rounded-md py-[15px] shadow-xl duration-150  px-[30px] ">
                             <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede]  text-sm  py-[15px]  w-[200px]  " > <Link className=" py-[12px]  text-[16px]    hover:text-primary-color duration-150" href={"/about"}> About Us </Link> </li>
                             <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede]  text-sm  py-[15px]  w-[200px] " > <Link className=" py-[12px] text-[16px]   hover:text-primary-color duration-150" href={"/gellery"}> Gellery </Link> </li>
                             <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede]  text-sm  py-[15px]  w-[200px]  " > <Link className=" py-[12px] text-[16px]   hover:text-primary-color duration-150" href={"/faqpart"}> Faq </Link> </li>
                             <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede]  text-sm  py-[15px]  w-[200px]  " > <Link className=" py-[12px] text-[16px]   hover:text-primary-color duration-150" href={"/login"}> Login</Link> </li>
                             <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede]  text-sm  py-[15px]  w-[200px]  " > <Link className=" py-[12px] text-[16px]   hover:text-primary-color duration-150" href={"/compare"}> Compare </Link> </li>
                             <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede]  text-sm  py-[15px]  w-[200px]  " > <Link className=" py-[12px] text-[16px]   hover:text-primary-color duration-150" href={"/membership"}> MemberShip</Link> </li>
                             <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede]  text-sm  py-[15px]  w-[200px]  " > <Link className=" py-[12px] text-[16px]   hover:text-primary-color duration-150" href={"/register"}> Register </Link> </li>
                             <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede]  text-sm  py-[15px]  w-[200px]  " > <Link className=" py-[12px] text-[16px]   hover:text-primary-color duration-150" href={"/ourservice"}> Service</Link> </li>
                             <li className=" hover:translate-x-3 duration-150 hover:text-primary-color  text-sm  py-[15px]  w-[200px]  " > <Link className=" py-[12px]  text-[16px]   hover:text-primary-color duration-150" href={"/errorpage"}> 404 Page</Link> </li>
                             
                         </ul>
                      </li>
                    <li className=" mx-[2px] relative  group bg-white   "><Link href={"/blog"} className="  text-[#484848] pt-[30px] pr-[16px] pb-[30px] pl-[10px]  font-normal text-[16px] flex items-center gap-2 " > Blog <MdKeyboardArrowDown  /></Link> 
                         
                         <ul className="z-10  absolute  invisible group-hover:visible bg-white rounded-md py-[15px] shadow-xl duration-150  px-[30px] w-[260px] ">
                       
                             <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[15px] pr-[20px] " ><Link href={"/blog"}>Blog List 1</Link> </li>
                             <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[15px] pr-[20px] " ><Link href={"/blog"}>Blog List 2</Link>  </li>
                             <li className=" hover:translate-x-3 duration-150 hover:text-primary-color border-b-[1px] border-[#dedede] text-sm py-[15px] pr-[20px] " ><Link href={"/blog"}>Blog List 3</Link> </li>
      
                             <li  className=" hover:translate-x-3 duration-150 hover:text-primary-color  text-sm py-[12px] pr-[20px] " >Blog Details </li>
                         </ul>
                    </li>
                    <li className=" mx-[2px] "><Link href={"/contact"} className=" active:text-primary-color pt-[30px] pr-[16px] pb-[30px] pl-[10px] font-light text-[#777] flex items-center gap-2   " > Contact</Link> </li>
                    <li className=" mx-[2px] " onClick={ handleModal } ><Link href={"/"} className=" pt-[30px] pr-[16px] pb-[30px] pl-[10px] font-light text-[#777] flex items-center" > <LiaUserSolid  className=" text-[25px]"  />Login/Register</Link> 
                    
                    </li>
                    <li className=" mx-[2px] "><Link href={"/"} className="  font-light text-white flex items-center gap-2 h-[50px] w-[180px] p-[13px] justify-center hover:text-primary-color hover:bg-white hover:border-[2px] border-primary-color rounded-full text-center  bg-primary-color leading-4 " > <BiPlus size={24} /> Create Listing</Link> </li>
                </ul>
            </nav>
         </div>

         {/* small sceen */}
         <div className="md:hidden py-[20px] z-[1] flex items-center justify-between text-[#777] text-[16px] leading-6 ">
         <div onClick={handlemenu}>
        <HiOutlineMenuAlt1  size={34} />
        </div>
        <div className={menuOpnen ? "fixed left-[-100%] duration-200" : "fixed z-50 left-0 top-0 w-[60%] h-full overflow-auto  ease-in-out duration-700 bg-slate-100"}>
        <div className=" ">
            <div className=" flex items-center justify-between p-[20px] bg-white ">
            <Link href={"/"} className="flex mr-[30px] relative">
            <Image src={logopic} alt="" width={40} height={45} className=" text-primary-color"/>
            <p className=" text-[20px]  text-[#484848] font-bold  mt-[12px] pl-[10px]  font-nunito leading-7">FindHouse</p>
            </Link>
            <RxCross1 onClick={handlemenu}  size={20} className=" mt-[4px] text-black" />
            </div> 
            <nav className="py-[10px] snap-y">
            
              <ul>
              <li className=" relative h-auto  border-b-[1px] border-[hsla(0,0%,68%,.2)]">
                <div onClick={()=> setIsOpen(!isOpen)} className=" flex items-center justify-between px-[20px] ">
                  <button  className=" flex  relative text-[16px]  py-[12px]">
                  <Link href={'/'}>Home</Link>
                 </button>
                  <h4 className=" text-[16px]">
                   {
                    !isOpen? (<MdKeyboardArrowRight className=" h-8" />) :(<MdKeyboardArrowDown  />)
                   }
                   
                  </h4>
                </div>
              
               {isOpen && <div className="  bg-slate-200 px-[20px] "> 
                     <ul>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"><Link href={'/'} onClick={handlemenu} >Home 1</Link></li>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"><Link href={'/'} onClick={handlemenu} >Home 2</Link></li>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"><Link href={'/'} onClick={handlemenu} >Home 3</Link></li>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"><Link href={'/'} onClick={handlemenu} >Home 4</Link></li>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"><Link href={'/'} onClick={handlemenu} >Home 5</Link></li>
                      
                     </ul>
                </div>}
      
              </li>
              <li className=" relative h-auto  border-b-[1px] border-[hsla(0,0%,68%,.2)]">
                <div onClick={()=> setIsOpen2(!isOpen2)} className=" flex items-center justify-between px-[20px] ">
                  <button  className=" flex  active:text-red  relative text-[16px]  py-[12px]">
                  <Link href={''}>Listing</Link>
                 </button>
                  <h4 className=" text-[16px]">
                   {
                    !isOpen2? (<MdKeyboardArrowRight className=" h-8" />) :(<MdKeyboardArrowDown  />)
                   }
                   
                  </h4>
                </div>
              
               {isOpen2 && <div className=" text-[16px]  bg-slate-200 px-[20px] "> 
                     <ul>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"><Link href={'/listing'} onClick={handlemenu} >Listing Grid</Link></li>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"><Link href={'/listing'} onClick={handlemenu} >Listing List</Link></li>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"> <Link href={'/listing'} onClick={handlemenu} >Listing Style</Link></li>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"><Link href={'/listing'} onClick={handlemenu} >Listing Half</Link></li>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"><Link href={'/listing'} onClick={handlemenu} >Listing View</Link></li>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"><Link href={'/listing'} onClick={handlemenu} >Create Listing</Link></li>
                      
                     </ul>
                </div>}
      
              </li>
              <li className=" relative h-auto  border-b-[1px] border-[hsla(0,0%,68%,.2)]">
                <div onClick={()=> setIsProperty(!isProperty)} className=" flex items-center justify-between px-[20px] ">
                  <button  className=" flex  active:text-red  relative text-[16px]  py-[12px]">
                     Property
                 </button>
                  <h4 className=" text-[16px]">
                   {
                    !isProperty? (<MdKeyboardArrowRight className=" h-8" />) :(<MdKeyboardArrowDown  />)
                   }
                   
                  </h4>
                </div>
              
               {isProperty && <div className=" text-[16px]  bg-slate-200 px-[20px] "> 
                     <ul>
                      <li className=" py-[12px] pr-[30px] pl-[15px]">User Admin</li>
                      <li className=" py-[12px] pr-[30px] pl-[15px]">Listing Single</li>
                     </ul>
                </div>}
      
              </li>
              <li className=" relative h-auto  border-b-[1px] border-[hsla(0,0%,68%,.2)]">
                <div onClick={()=> setIsBlog(!isBlog)} className=" flex items-center justify-between px-[20px] ">
                  <button  className=" flex  active:text-red  relative text-[16px]  py-[12px]">
                     <Link href={''} >Blog</Link> 
                 </button>
                  <h4 className=" text-[16px]">
                   {
                    !isBlog? (<MdKeyboardArrowRight className=" h-8" />) :(<MdKeyboardArrowDown  />)
                   }
                   
                  </h4>
                </div>
              
               {isBlog && <div className=" text-[16px]  bg-slate-200 px-[20px] "> 
                     <ul>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"><Link href={'/blog'} onClick={handlemenu} >Blog List 1</Link></li>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"> <Link href={'/blog'} onClick={handlemenu} >Blog List 2</Link></li>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"> <Link href={'/blog'} onClick={handlemenu} >Blog List 3</Link></li>
                     </ul>
                </div>}
      
              </li>
              <li className=" relative h-auto  border-b-[1px] border-[hsla(0,0%,68%,.2)]">
                <div onClick={()=> setIsPage(!isPage)} className=" flex items-center justify-between px-[20px] ">
                  <button  className=" flex  active:text-red  relative text-[16px]  py-[12px]">
                     Pages
                 </button>
                  <h4 className=" text-[16px]">
                   {
                    !isPage? (<MdKeyboardArrowRight className=" h-8" />) :(<MdKeyboardArrowDown  />)
                   }
                   
                  </h4>
                </div>
              
                {isPage && <div className=" text-[16px]  bg-slate-200 px-[20px] ">
                     <ul>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"> <Link onClick={handlemenu} href={'/about'} >About us</Link> </li>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"><Link  onClick={handlemenu} href={'/gellery'} >Gallery</Link></li>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"><Link  onClick={handlemenu} href={'/faqpart'} >Faq</Link></li>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"> <Link onClick={handlemenu} href={'/login'} >Login</Link></li>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"> <Link onClick={handlemenu} href={'/compare'} >Compare</Link></li>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"> <Link onClick={handlemenu} href={'/membership'} >Membership</Link></li>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"> <Link onClick={handlemenu} href={'/register'} >Register</Link></li>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"> <Link onClick={handlemenu} href={'/ourservice'} >Service</Link></li>
                      <li className=" py-[12px] pr-[30px] pl-[15px]"> <Link onClick={handlemenu} href={'/errorpage'} >404 Page</Link> </li>
                     </ul>
                </div>}
      
              </li>
              
              <li className=" relative h-auto  border-b-[1px] border-[hsla(0,0%,68%,.2)]">
                <div  className=" flex items-center justify-between px-[20px] py-[12px] ">
                   <Link href={'/contact'} onClick={handlemenu}>Contact </Link>
                </div>
              </li>
              <li className=" relative h-auto  border-b-[1px] border-[hsla(0,0%,68%,.2)]">
                <div  className=" flex items-center justify-between px-[20px] py-[12px] ">
                   <Link href={'/login'} onClick={handlemenu} className=" flex items-center "> <LiaUserSolid size={20}/> Login </Link>
                </div>
              </li>
              <li className=" relative h-auto  border-b-[1px] border-[hsla(0,0%,68%,.2)]">
                <div  className=" flex items-center justify-between px-[20px] py-[12px] ">
                   <Link href={'/register'} onClick={handlemenu} className=" flex items-center "> <BsPencil size={18}/> Register </Link>
                </div>
              </li>
                </ul>
              </nav>
               
               <div className=" my-[50px] w-full h-[50px] flex items-center px-[20px]" >
               <Link href={"/"} className="  font-light text-white flex items-center gap-2 h-[50px] w-full p-[13px] justify-center  rounded-full text-[20px] font-nunito text-center duration-300 hover:text-primary-color hover:bg-white hover:border-[2px] border-primary-color  bg-primary-color leading-4 " > <BiPlus size={24} /> Create Listing</Link>
                   
               </div>
        </div>
        </div>
              <div>
              <Link href={"/"} className="flex mr-[30px] relative">
            <Image src={logopic} width={40} height={45} alt="" className=" text-primary-color"/>
            <p className=" text-[18px] text-[#484848] font-bold ml-[-10px] mt-[12px] pl-[15px]  font-nunito leading-7">FindHouse</p>
            </Link>
              </div>
              <div>
                  <LiaUserSolid size={24} />
              </div>
              
            </div>
     </header>
    </>
  )
}
