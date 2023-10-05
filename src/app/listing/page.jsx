
import Image from "next/image"
import Link from "next/link"
import { BiTransfer } from 'react-icons/bi'
import { BsHeart } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { FaList, FaThLarge } from "react-icons/fa"
import featPic1 from "../assets/features1.jpg"
import featPic2 from "../assets/features2.jpg"
import featPic3 from "../assets/features3.jpg"
import mem1 from "../assets/p-1.png"
import SideList from "./SideList"


function Listingpage() {
  return (
    <section className=' py-[60px] bg-[#f7f7f7] md:px-[90px] '>
      <div className=' px-[15px]  '>
           <div className=" grid grid-cols-2 ">
              <div className=" mb-[30px] ">
                 <ol className=" flex items-center gap-1 ">
                     <li className="text-[#0d638f]">Home</li>
                     <li className=" text-primary-color"> / Simple Listing – Grid V1</li>
                 </ol>
                 <h2 className=" mt-[10px] text-[30px] font-bold font-nunito leading-5 text-[#484848]">Simple Listing – Grid View</h2>
              </div>
              <div className=" mt-[18px] flex items-center justify-end">
                    <ul className=" flex  items-center gap-[10px]">
                        <li className=" flex items-center justify-center bg-[#e3e3e3] border-[1px] border-[#ebebeb] rounded-[8px] h-[44px] w-[49px]"> <FaThLarge className=" text-[#555]" /> </li>
                        <li className=" flex items-center justify-center bg-[#fff] border-[1px] border-[#ebebeb] rounded-[8px] h-[44px] w-[49px]"> <FaList className=" text-[#555]" /> </li>
                    </ul>
              </div>
           </div>
             
             {/* Details */}
                <div className=" grid grid-cols-3 gap-3">
                    <div className=" grid col-span-1">
                       <SideList/>
                    </div>


                    {/* card part */}
                    <div className=" grid col-span-2 h-fit">
                          <div className=" flex justify-between items-center bg-white border-[1px] border-[#ebebeb] rounded-[8px] mb-[30px] px-[15px] py-[17px]">
                               <div className="">
                               <p className=" text-[14px] text-text-primary">10 Search results</p>
                               </div>
                               <div className=" flex items-center ">
                                    
                                    <ul className=" flex items-center "> <span className=" text-[14px] font-nunito font-bold text-text-primary">Status: </span> <li className='list-none outline-none'>
                                           <select id='oportunity' className=' list-none outline-none   text-[#484848] flex items-center  bg-white   text-[14px] '>
                                             <option> All Status</option>
                                             <option> Old</option>
                                             <option> Recent</option>
                                           </select>
                                       </li>
                                        <span className=" mx-[22px] w-[1px] h-[30px] bg-[#e8eef2]"></span>
                                       <span className=" text-[14px] font-nunito font-bold text-text-primary">Status: </span> <li className='list-none outline-none'>
                                           <select id='oportunity' className=' list-none outline-none   text-[#484848] flex items-center  bg-white   text-[14px] '>
                                             <option> Featured All</option>
                                             <option> Sale</option>
                                             <option> Rent</option>
                                           </select>
                                       </li>
                                    </ul>

                                   
                                    
                               </div>
                          </div>
                          <div className=" grid grid-cols-2 gap-[26px]">
                          <div className=" hover:shadow-lg w-[455px] md:w-[365px] bg-white rounded-lg">
                           <div className=" w-full">
                                <div className=" bg-white border-[1px] border-[#ebebeb] rounded-lg mab-[30px]">
                                <div className=" relative rounded-lg mt-[10px] mr-[9px] ml-[10px]">
                                     <Image src={featPic1} className=" w-full rounded-lg " />

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
                                     <div className=" flex absolute bottom-[15px] right-[20px]">
                                        <div className=" rounded-md hover:opacity-100 hover:bg-primary-color duration-300 flex items-center justify-center w-[35px] h-[35px] mr-[5px] bg-[#0f151f] opacity-50">
                                             <BiTransfer className=" text-[22px] text-white"/>
                                        </div>
                                        <div className=" rounded-md hover:opacity-100 hover:bg-primary-color duration-300 flex items-center justify-center w-[35px] h-[35px] mr-[5px] bg-[#0f151f] opacity-50">
                                             <BsHeart className=" text-[22px] text-white"/>
                                        </div>
                                     </div>
                                     <div className=" absolute bottom-[15px] text-[22px] font-nunito text-white font-bold left-[20px] leading-5">
                                             <h4>$15000/<small>mo</small></h4>
                                     </div>
                                </div>
                                <div>
                                    <div className="p-[20px]">
                                         <p className=" text-[14px] font-nunito leading-5  text-primary-color mb-[15px] ">Apartment</p>
                                         <h4 className=" text-[18px] font-nunito leading-5 text-text-primary mb-[15px] font-bold">Luxury Family Home</h4>
                                         <p className=" text-[14px] font-nunito text-[#484848] leading-5 mb-[10px] flex items-center"><CiLocationOn size={18}/> 1421 San Pedro St, Los Angeles, CA 900015</p>
                                       <ul className=" flex items-center ">
                                         <li className="mr-[30px]"> <a href="#" className="text-[14px] font-nunito leading-5 text-text-primary">Beds: 4</a></li>
                                         <li className="mr-[30px]"> <a href="#" className="text-[14px] font-nunito leading-5 text-text-primary">Baths: 6</a></li>
                                         <li > <a href="#" className="text-[14px] font-nunito leading-5 text-text-primary">SqFt: 5280</a></li>
                                       </ul>
                                    </div>
                                    <div className=" border-t-[1px] border-[#eee] p-[20px] ">
                                        <div className=" flex items-center justify-between mb-[20px]">
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
                       <div className=" hover:shadow-lg w-[455px] md:w-[365px] bg-white rounded-lg">
                           <div className=" w-full">
                                <div className=" bg-white border-[1px] border-[#ebebeb] rounded-lg mab-[30px]">
                                <div className=" relative rounded-lg mt-[10px] mr-[9px] ml-[10px]">
                                     <Image src={featPic2} className=" w-full rounded-lg " />

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
                                     <div className=" flex absolute bottom-[15px] right-[20px]">
                                        <div className=" rounded-md hover:opacity-100 hover:bg-primary-color duration-300 flex items-center justify-center w-[35px] h-[35px] mr-[5px] bg-[#0f151f] opacity-50">
                                             <BiTransfer className=" text-[22px] text-white"/>
                                        </div>
                                        <div className=" rounded-md hover:opacity-100 hover:bg-primary-color duration-300 flex items-center justify-center w-[35px] h-[35px] mr-[5px] bg-[#0f151f] opacity-50">
                                             <BsHeart className=" text-[22px] text-white"/>
                                        </div>
                                     </div>
                                     <div className=" absolute bottom-[15px] text-[22px] font-nunito text-white font-bold left-[20px] leading-5">
                                             <h4>$15000/<small>mo</small></h4>
                                     </div>
                                </div>
                                <div>
                                    <div className="p-[20px]">
                                         <p className=" text-[14px] font-nunito leading-5  text-primary-color mb-[15px] ">Apartment</p>
                                         <h4 className=" text-[18px] font-nunito leading-5 text-text-primary mb-[15px] font-bold">Luxury Family Home</h4>
                                         <p className=" text-[14px] font-nunito text-[#484848] leading-5 mb-[10px] flex items-center"><CiLocationOn size={18}/> 1421 San Pedro St, Los Angeles, CA 900015</p>
                                       <ul className=" flex items-center ">
                                         <li className="mr-[30px]"> <a href="#" className="text-[14px] font-nunito leading-5 text-text-primary">Beds: 4</a></li>
                                         <li className="mr-[30px]"> <a href="#" className="text-[14px] font-nunito leading-5 text-text-primary">Baths: 6</a></li>
                                         <li > <a href="#" className="text-[14px] font-nunito leading-5 text-text-primary">SqFt: 5280</a></li>
                                       </ul>
                                    </div>
                                    <div className=" border-t-[1px] border-[#eee] p-[20px] ">
                                        <div className=" flex items-center justify-between mb-[20px]">
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
                       <div className=" hover:shadow-lg w-[455px] md:w-[365px] bg-white rounded-lg">
                           <div className=" w-full">
                                <div className=" bg-white border-[1px] border-[#ebebeb] rounded-lg mab-[30px]">
                                <div className=" relative rounded-lg mt-[10px] mr-[9px] ml-[10px]">
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
                                     <div className=" flex absolute bottom-[15px] right-[20px]">
                                        <div className=" rounded-md hover:opacity-100 hover:bg-primary-color duration-300 flex items-center justify-center w-[35px] h-[35px] mr-[5px] bg-[#0f151f] opacity-50">
                                             <BiTransfer className=" text-[22px] text-white"/>
                                        </div>
                                        <div className=" rounded-md hover:opacity-100 hover:bg-primary-color duration-300 flex items-center justify-center w-[35px] h-[35px] mr-[5px] bg-[#0f151f] opacity-50">
                                             <BsHeart className=" text-[22px] text-white"/>
                                        </div>
                                     </div>
                                     <div className=" absolute bottom-[15px] text-[22px] font-nunito text-white font-bold left-[20px] leading-5">
                                             <h4>$15000/<small>mo</small></h4>
                                     </div>
                                </div>
                                <div>
                                    <div className="p-[20px]">
                                         <p className=" text-[14px] font-nunito leading-5  text-primary-color mb-[15px] ">Apartment</p>
                                         <h4 className=" text-[18px] font-nunito leading-5 text-text-primary mb-[15px] font-bold">Luxury Family Home</h4>
                                         <p className=" text-[14px] font-nunito text-[#484848] leading-5 mb-[10px] flex items-center"><CiLocationOn size={18}/> 1421 San Pedro St, Los Angeles, CA 900015</p>
                                       <ul className=" flex items-center ">
                                         <li className="mr-[30px]"> <a href="#" className="text-[14px] font-nunito leading-5 text-text-primary">Beds: 4</a></li>
                                         <li className="mr-[30px]"> <a href="#" className="text-[14px] font-nunito leading-5 text-text-primary">Baths: 6</a></li>
                                         <li > <a href="#" className="text-[14px] font-nunito leading-5 text-text-primary">SqFt: 5280</a></li>
                                       </ul>
                                    </div>
                                    <div className=" border-t-[1px] border-[#eee] p-[20px] ">
                                        <div className=" flex items-center justify-between mb-[20px]">
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
                       <div className=" hover:shadow-lg w-[455px] md:w-[365px] bg-white rounded-lg">
                           <div className=" w-full">
                                <div className=" bg-white border-[1px] border-[#ebebeb] rounded-lg mab-[30px]">
                                <div className=" relative rounded-lg mt-[10px] mr-[9px] ml-[10px]">
                                     <Image src={featPic1} className=" w-full rounded-lg " />

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
                                     <div className=" flex absolute bottom-[15px] right-[20px]">
                                        <div className=" rounded-md hover:opacity-100 hover:bg-primary-color duration-300 flex items-center justify-center w-[35px] h-[35px] mr-[5px] bg-[#0f151f] opacity-50">
                                             <BiTransfer className=" text-[22px] text-white"/>
                                        </div>
                                        <div className=" rounded-md hover:opacity-100 hover:bg-primary-color duration-300 flex items-center justify-center w-[35px] h-[35px] mr-[5px] bg-[#0f151f] opacity-50">
                                             <BsHeart className=" text-[22px] text-white"/>
                                        </div>
                                     </div>
                                     <div className=" absolute bottom-[15px] text-[22px] font-nunito text-white font-bold left-[20px] leading-5">
                                             <h4>$15000/<small>mo</small></h4>
                                     </div>
                                </div>
                                <div>
                                    <div className="p-[20px]">
                                         <p className=" text-[14px] font-nunito leading-5  text-primary-color mb-[15px] ">Apartment</p>
                                         <h4 className=" text-[18px] font-nunito leading-5 text-text-primary mb-[15px] font-bold">Luxury Family Home</h4>
                                         <p className=" text-[14px] font-nunito text-[#484848] leading-5 mb-[10px] flex items-center"><CiLocationOn size={18}/> 1421 San Pedro St, Los Angeles, CA 900015</p>
                                       <ul className=" flex items-center ">
                                         <li className="mr-[30px]"> <a href="#" className="text-[14px] font-nunito leading-5 text-text-primary">Beds: 4</a></li>
                                         <li className="mr-[30px]"> <a href="#" className="text-[14px] font-nunito leading-5 text-text-primary">Baths: 6</a></li>
                                         <li > <a href="#" className="text-[14px] font-nunito leading-5 text-text-primary">SqFt: 5280</a></li>
                                       </ul>
                                    </div>
                                    <div className=" border-t-[1px] border-[#eee] p-[20px] ">
                                        <div className=" flex items-center justify-between mb-[20px]">
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
                       <div className=" hover:shadow-lg w-[455px] md:w-[365px] bg-white rounded-lg">
                           <div className=" w-full">
                                <div className=" bg-white border-[1px] border-[#ebebeb] rounded-lg mab-[30px]">
                                <div className=" relative rounded-lg mt-[10px] mr-[9px] ml-[10px]">
                                     <Image src={featPic2} className=" w-full rounded-lg " />

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
                                     <div className=" flex absolute bottom-[15px] right-[20px]">
                                        <div className=" rounded-md hover:opacity-100 hover:bg-primary-color duration-300 flex items-center justify-center w-[35px] h-[35px] mr-[5px] bg-[#0f151f] opacity-50">
                                             <BiTransfer className=" text-[22px] text-white"/>
                                        </div>
                                        <div className=" rounded-md hover:opacity-100 hover:bg-primary-color duration-300 flex items-center justify-center w-[35px] h-[35px] mr-[5px] bg-[#0f151f] opacity-50">
                                             <BsHeart className=" text-[22px] text-white"/>
                                        </div>
                                     </div>
                                     <div className=" absolute bottom-[15px] text-[22px] font-nunito text-white font-bold left-[20px] leading-5">
                                             <h4>$15000/<small>mo</small></h4>
                                     </div>
                                </div>
                                <div>
                                    <div className="p-[20px]">
                                         <p className=" text-[14px] font-nunito leading-5  text-primary-color mb-[15px] ">Apartment</p>
                                         <h4 className=" text-[18px] font-nunito leading-5 text-text-primary mb-[15px] font-bold">Luxury Family Home</h4>
                                         <p className=" text-[14px] font-nunito text-[#484848] leading-5 mb-[10px] flex items-center"><CiLocationOn size={18}/> 1421 San Pedro St, Los Angeles, CA 900015</p>
                                       <ul className=" flex items-center ">
                                         <li className="mr-[30px]"> <a href="#" className="text-[14px] font-nunito leading-5 text-text-primary">Beds: 4</a></li>
                                         <li className="mr-[30px]"> <a href="#" className="text-[14px] font-nunito leading-5 text-text-primary">Baths: 6</a></li>
                                         <li > <a href="#" className="text-[14px] font-nunito leading-5 text-text-primary">SqFt: 5280</a></li>
                                       </ul>
                                    </div>
                                    <div className=" border-t-[1px] border-[#eee] p-[20px] ">
                                        <div className=" flex items-center justify-between mb-[20px]">
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
                       <div className=" hover:shadow-lg w-[455px] md:w-[365px] bg-white rounded-lg">
                           <div className=" w-full">
                                <div className=" bg-white border-[1px] border-[#ebebeb] rounded-lg mab-[30px]">
                                <div className=" relative rounded-lg mt-[10px] mr-[9px] ml-[10px]">
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
                                     <div className=" flex absolute bottom-[15px] right-[20px]">
                                        <div className=" rounded-md hover:opacity-100 hover:bg-primary-color duration-300 flex items-center justify-center w-[35px] h-[35px] mr-[5px] bg-[#0f151f] opacity-50">
                                             <BiTransfer className=" text-[22px] text-white"/>
                                        </div>
                                        <div className=" rounded-md hover:opacity-100 hover:bg-primary-color duration-300 flex items-center justify-center w-[35px] h-[35px] mr-[5px] bg-[#0f151f] opacity-50">
                                             <BsHeart className=" text-[22px] text-white"/>
                                        </div>
                                     </div>
                                     <div className=" absolute bottom-[15px] text-[22px] font-nunito text-white font-bold left-[20px] leading-5">
                                             <h4>$15000/<small>mo</small></h4>
                                     </div>
                                </div>
                                <div>
                                    <div className="p-[20px]">
                                         <p className=" text-[14px] font-nunito leading-5  text-primary-color mb-[15px] ">Apartment</p>
                                         <h4 className=" text-[18px] font-nunito leading-5 text-text-primary mb-[15px] font-bold">Luxury Family Home</h4>
                                         <p className=" text-[14px] font-nunito text-[#484848] leading-5 mb-[10px] flex items-center"><CiLocationOn size={18}/> 1421 San Pedro St, Los Angeles, CA 900015</p>
                                       <ul className=" flex items-center ">
                                         <li className="mr-[30px]"> <a href="#" className="text-[14px] font-nunito leading-5 text-text-primary">Beds: 4</a></li>
                                         <li className="mr-[30px]"> <a href="#" className="text-[14px] font-nunito leading-5 text-text-primary">Baths: 6</a></li>
                                         <li > <a href="#" className="text-[14px] font-nunito leading-5 text-text-primary">SqFt: 5280</a></li>
                                       </ul>
                                    </div>
                                    <div className=" border-t-[1px] border-[#eee] p-[20px] ">
                                        <div className=" flex items-center justify-between mb-[20px]">
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
                          </div>
                    </div>
                </div>
      </div>
    </section>    
  )
}

export default Listingpage
