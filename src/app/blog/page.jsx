import Image from 'next/image'
import Link from 'next/link'
import { BiChevronRight } from 'react-icons/bi'
import { CiCalendar } from 'react-icons/ci'
import blogpic1 from '../assets/blog1.jpg'
import blogpic2 from '../assets/blog2.jpg'
import blogpic3 from '../assets/blog3.jpg'
import mem1 from "../assets/p-1.png"
import InnerBlog from './InnerBlog'
import RightSideBlog from './RightSideBlog'

const page = () => {
  return (
    <>
      
       <div className=' py-[60px] bg-white md:px-[90px]'>
         <div className='px-[15px]'>
         <InnerBlog />
         <div className=' grid md:grid-cols-3 gap-6'>
          <div className=' grid md:col-span-2 gap-[30px]'>
          <div className=" hover:shadow-lg  bg-white rounded-lg">
                           <div className=" w-full">
                                <div className=" bg-white border-[1px] border-[#ebebeb] rounded-lg mab-[30px]">
                                <div className=" relative rounded-lg mt-[10px] mr-[9px] ml-[10px]">
                                     <Image src={blogpic1} className=" w-full rounded-lg " />

                                     <div className="  absolute top-[24px] md:top-[10px] bottom-0 right-[24px] md:right-[10px] left-[24px] md:left-[10px] ">
                                           <div className=" flex">
                                                <Link href={""} className=" mr-[0.5rem] bg-primary-color text-white font-nunito text-[14px] leading-5  rounded h-[25px] items-center flex justify-center text-center px-[10px]">
                                                Construction
                                                </Link>
                                           </div>
                                     </div>
                                </div>
                                <div>
                                    <div className="p-[20px]">
                                         <h4 className=" text-[18px] font-nunito leading-5  text-text-primary mb-[15px] ">Redfin Ranks the Most Competitive Neighborhoods of 2022</h4>
                                         <p className=" text-[14px] font-nunito leading-5 text-text-primary mb-[15px] ">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis Mollis Et Sem Sed Sollicitudin. Donec Non Odio Neque. Aliquam Hendrerit Sollicitudin Purus, Quis Rutrum Mi Accumsan Nec. Quisque Bibendum Orci Ac Nibh Facilisis, At Malesuada Orci Congue. Nullam Tempus Sollicitudin Cursus.</p>
                                         
                                    </div>
                                    <div className=" border-t-[1px] border-[#eee] px-[20px] py-[30px] ">
                                        <div className=" flex items-center justify-between ">
                                            <div className=" flex items-center">
                                                <Link href={"/"}> <Image src={mem1} className=" w-[40px] h-[40px] mr-[10px]" /> </Link>
                                                <p className="text-[14px] font-nunito leading-5 text-[#777] mr-[30px]">Ali Tufan</p>
                                                <div>
                                                
                                                <div className="text-[14px] font-nunito leading-5 text-[#777] flex items-center gap-1"> 
                                                   <h4><CiCalendar size={18} /></h4>
                                                  <p>7 August 2023</p> </div>
                                              
                                                </div>
                                            </div>
                                            <Link href={'/'} className=' text-primary-color flex items-center'>
                                               <p className='text-[14px] font-nunito leading-5'>Read More</p>
                                               <BiChevronRight size={24} />
                                            </Link>
                                            
                                        </div>
                                    </div>   
                                </div>
                                </div>
                           </div>
          </div>
          <div className=" hover:shadow-lg  bg-white rounded-lg">
                           <div className=" w-full">
                                <div className=" bg-white border-[1px] border-[#ebebeb] rounded-lg mab-[30px]">
                                <div className=" relative rounded-lg mt-[10px] mr-[9px] ml-[10px]">
                                     <Image src={blogpic2} className=" w-full rounded-lg " />

                                     <div className="  absolute top-[24px] md:top-[10px] bottom-0 right-[24px] md:right-[10px] left-[24px] md:left-[10px] ">
                                           <div className=" flex">
                                                <Link href={""} className=" mr-[0.5rem] bg-primary-color text-white font-nunito text-[14px] leading-5  rounded h-[25px] items-center flex justify-center text-center px-[10px]">
                                                Construction
                                                </Link>
                                           </div>
                                     </div>
                                </div>
                                <div>
                                    <div className="p-[20px]">
                                         <h4 className=" text-[18px] font-nunito leading-5  text-text-primary mb-[15px] ">Redfin Ranks the Most Competitive Neighborhoods of 2022</h4>
                                         <p className=" text-[14px] font-nunito leading-5 text-text-primary mb-[15px] ">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis Mollis Et Sem Sed Sollicitudin. Donec Non Odio Neque. Aliquam Hendrerit Sollicitudin Purus, Quis Rutrum Mi Accumsan Nec. Quisque Bibendum Orci Ac Nibh Facilisis, At Malesuada Orci Congue. Nullam Tempus Sollicitudin Cursus.</p>
                                         
                                    </div>
                                    <div className=" border-t-[1px] border-[#eee] px-[20px] py-[30px] ">
                                        <div className=" flex items-center justify-between ">
                                            <div className=" flex items-center">
                                                <Link href={"/"}> <Image src={mem1} className=" w-[40px] h-[40px] mr-[10px]" /> </Link>
                                                <p className="text-[14px] font-nunito leading-5 text-[#777] mr-[30px]">Ali Tufan</p>
                                                <div>
                                                
                                                <div className="text-[14px] font-nunito leading-5 text-[#777] flex items-center gap-1"> 
                                                   <h4><CiCalendar size={18} /></h4>
                                                  <p>7 August 2023</p> </div>
                                              
                                                </div>
                                            </div>
                                            <Link href={'/'} className=' text-primary-color flex items-center'>
                                               <p className='text-[14px] font-nunito leading-5'>Read More</p>
                                               <BiChevronRight size={24} />
                                            </Link>
                                            
                                        </div>
                                    </div>   
                                </div>
                                </div>
                           </div>
          </div>
          <div className=" hover:shadow-lg  bg-white rounded-lg">
                           <div className=" w-full">
                                <div className=" bg-white border-[1px] border-[#ebebeb] rounded-lg mab-[30px]">
                                <div className=" relative rounded-lg mt-[10px] mr-[9px] ml-[10px]">
                                     <Image src={blogpic3} className=" w-full rounded-lg " />

                                     <div className="  absolute top-[24px] md:top-[10px] bottom-0 right-[24px] md:right-[10px] left-[24px] md:left-[10px] ">
                                           <div className=" flex">
                                                <Link href={""} className=" mr-[0.5rem] bg-primary-color text-white font-nunito text-[14px] leading-5  rounded h-[25px] items-center flex justify-center text-center px-[10px]">
                                                Construction
                                                </Link>
                                           </div>
                                     </div>
                                </div>
                                <div>
                                    <div className="p-[20px]">
                                         <h4 className=" text-[18px] font-nunito leading-5  text-text-primary mb-[15px] ">Redfin Ranks the Most Competitive Neighborhoods of 2022</h4>
                                         <p className=" text-[14px] font-nunito leading-5 text-text-primary mb-[15px] ">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis Mollis Et Sem Sed Sollicitudin. Donec Non Odio Neque. Aliquam Hendrerit Sollicitudin Purus, Quis Rutrum Mi Accumsan Nec. Quisque Bibendum Orci Ac Nibh Facilisis, At Malesuada Orci Congue. Nullam Tempus Sollicitudin Cursus.</p>
                                         
                                    </div>
                                    <div className=" border-t-[1px] border-[#eee] px-[20px] py-[30px] ">
                                        <div className=" flex items-center justify-between ">
                                            <div className=" flex items-center">
                                                <Link href={"/"}> <Image src={mem1} className=" w-[40px] h-[40px] mr-[10px]" /> </Link>
                                                <p className="text-[14px] font-nunito leading-5 text-[#777] mr-[30px]">Ali Tufan</p>
                                                <div>
                                                
                                                <div className="text-[14px] font-nunito leading-5 text-[#777] flex items-center gap-1"> 
                                                   <h4><CiCalendar size={18} /></h4>
                                                  <p>7 August 2023</p> </div>
                                              
                                                </div>
                                            </div>
                                            <Link href={'/'} className=' text-primary-color flex items-center'>
                                               <p className='text-[14px] font-nunito leading-5'>Read More</p>
                                               <BiChevronRight size={24} />
                                            </Link>
                                            
                                        </div>
                                    </div>   
                                </div>
                                </div>
                           </div>
          </div>
          </div>
          <div className=' grid col-span-1'>
                 <RightSideBlog />
          </div>
      </div>
         </div>
       </div>
    </>
  )
}

export default page

