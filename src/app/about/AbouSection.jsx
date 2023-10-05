import Image from 'next/image'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { RiMoneyDollarBoxLine } from 'react-icons/ri'
import abouPin from '../assets/about_1.jpg'


const AbouSection = () => {
  return (
    <section className=" py-[60px] bg-white md:px-[90px]">
        <div className=" mx-[15px]">
              <div className=' mb-[40px] flex flex-col items-center justify-center'>
                       <h2 className=' text-text-primary font-nunito  leading-5 mb-[10px] text-[30px] font-bold'>Our Mission Is To FindHouse</h2>
              </div>
           <div className=" grid md:grid-cols-12 gap-[30px] md:gap-[20px]">
               <div className=" grid md:col-span-7 h-fit ">
               <p className=" mb-[45px] font-nunito text-[16px] md:leading-5 font-bold text-text-primary ">Mauris ac consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia tempor.</p>
                    <p className=" mb-[40px] text-[14px] md:leading-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ligula eu lectus vulputate porttitor sed feugiat nunc. Mauris ac consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia tempor, lectus orci elementum augue, eget auctor metus ante sit amet velit.</p>
                    <p className=" mb-[40px] text-[14px] md:leading-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ligula eu lectus vulputate porttitor sed feugiat nunc. Mauris ac consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia tempor, lectus orci elementum augue, eget auctor metus ante sit amet velit.</p>
                  
                  <ul className=" flex flex-col md:flex-row space-y-4 md:space-y-0 md:items-center">
                     <li>
                         <div className="flex items-center mr-[30px]">
                            <AiOutlineUser size={60} className='leading-5 text-primary-color'/>
                            <div className='pl-[12px] '>
                                   <h3 className='text-[22px] font-nunito text-text-primary font-bold '>50,564</h3>
                                   <p className='text-[14px] font-nunito text-text-primary '>Customers to date</p>
                            </div>
                         </div>
                     </li>
                     <li>
                          <div className="flex items-center mr-[30px]">
                               <AiOutlineHome size={60} className='leading-5 text-primary-color'/>
                           <div className='pl-[12px] '>
                                  <h3 className='text-[22px] font-nunito text-text-primary font-bold '>$74 Billion</h3>
                                   <p className='text-[14px] font-nunito text-text-primary '>In home sales</p>
                           </div>
                     </div>
                     </li>
                     <li>
                          <div className="flex items-center mr-[30px]">
                                <RiMoneyDollarBoxLine size={60} className='leading-5 text-primary-color'/>
                             <div className='pl-[12px] '>
                                  <h3 className='text-[22px] font-nunito text-text-primary font-bold '>$468 Million</h3>
                                   <p className='text-[14px] font-nunito text-text-primary '>In Savings</p>
                             </div>
                         </div>
                     </li>
                </ul>
               </div>
               
               
               <div className=' grid md:col-span-5'>
                   <div className='  rounded-md'>
                      <Image src={abouPin} className='rounded-lg md:w-full h-[509px]'/>
                   </div>
               </div>
           </div>
        </div>
    </section>
  )
}

export default AbouSection
