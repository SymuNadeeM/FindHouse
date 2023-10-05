"use client"
import Image from 'next/image';
import bannar from '../../assets/banner.jpg';


export default function Banner() {
   


  return (
    <>
      <div className='relative'>
      <div>
         <Image src={bannar} className='w-full h-[850px] bg-cover   ' />
      </div>
        <div className='absolute top-[130px] md:top-[290px] left-[18px] right-[18px]  md:left-[96px] md:right-[96px]  '>
            <div className=' text-center  items-center   '>
                 <h2 className=' font-nunito font-bold text-white text-[30px] md:text-[55px]   leading-5'> Find Your Dream Home</h2>
                 <p className=' font-nunito text-[15px] md:text-[18px]   leading-6 font-semibold mt-[15px] md:mt-[25px] text-white '>From as low as $10 per day with limited time offer discounts.</p>
            </div>
             <div className=' mt-[20px] md:mt-[45px] flex justify-center items-center gap-[15px]'>
                  <div className='  relative'>
                  <div className='h-[50px] w-[110px] bg-[#ff5a5f] shadow  rounded-md text-white flex items-center justify-center'>
                      Buy
                  </div>
                   <div className=' absolute w-[20px] h-[20px] bg-[#ff5a5f]  rotate-45 top-[40px] right-[45px] '> </div>
                       
                   
                  </div>
                  <div className='h-[50px] w-[110px] text-[#000] shadow  rounded-md bg-white flex items-center justify-center'>
                      Rent
                  </div>
             </div>
             
                <div className=' mt-[35px] flex flex-col justify-center md:flex-row items-center    py-[30px] bg-white r  ring-[10px]  ring-white rounded  ring-opacity-30'>
                   <li className='md:ml-[-20px] md:mr-[10px] list-none px-[15px] md:px-[10px] w-full md:w-[215px] '>
                     
                      <input type="text" placeholder='Enter Keyword... ' className=' outline-none px-[10px] py-[4px] text-[#484848]  bg-white border-[1px] border-[#ebebeb] rounded-md  text-[14px] leading-5 w-full md:w-[215px] h-[50px] ' />
                     
                   </li>
                   <li className='mt-[15px]  md:mt-0 md:mr-[10px] list-none outline-none w-full md:w-[180px] px-[15px] md:px-[10px] '>
                            <select id='oportunity' className=' list-none outline-none w-full md:w-[180px] px-[10px] py-[4px] text-[#484848] flex items-center  bg-white border-[1px] border-[#ebebeb] rounded-md  text-[14px] leading-5  h-[50px] '>
                                <option> Propety Type</option>
                                <option> Apartment</option>
                                <option> Bungalow</option>
                                <option> Condo</option>
                                <option> House</option>
                                <option> Land</option>
                                <option> Single Family</option>
                            </select>
                   </li>
                   <li className='mt-[15px] md:mt-0 md:mr-[10px] list-none px-[15px] md:px-[10px] w-full md:w-[190px] '>
                   <input type="text" placeholder='Location'  className=' outline-none px-[10px] py-[4px] text-[#484848]  bg-white border-[1.5px] border-[#ebebeb] rounded-md  text-[14px] leading-5 w-full md:w-[190px] h-[50px] ' />
                      
                   </li>
                   <li className=' mt-[15px] md:mt-0 md:mr-[10px] list-none px-[15px] md:px-[10px] w-full md:w-[150px] '>
                            <input placeholder='Price' className=' outline-none w-full md:w-[150px] px-[10px] py-[4px] text-[#484848] flex  items-center  bg-white border-[1px] border-[#ebebeb] rounded-md  text-[14px] leading-5  h-[50px] '/>
                   </li>
                   
                   <li className='mt-[15px] md:mt-0 md:mr-[10px] list-none px-[15px] md:px-[10px] w-full md:w-[110px] '>
                   <input type="text" placeholder='Advance'  className=' outline-none px-[10px] py-[4px] text-[#484848]  bg-white border-[1.5px] border-[#ebebeb] rounded-md  text-[14px] leading-5 w-full md:w-[110px] h-[50px] ' />
                      
                   </li>
                    <li className=' mt-[15px]   px-[15px] md:px-[10px] md:mt-0 list-none w-full md:w-[170px]'>
                       <div className=''>
                          <button type='submit' className=' text-white bg-primary-color hover:bg-white duration-200 hover:border-[2px] hover:text-primary-color hover:border-primary-color rounded-md font-bold w-full md:w-[170px] h-[50px] shadow-md  text-[16px] ' > Search</button>
                       </div>
                    </li>
                </div>
            
        </div>
      </div>
      

    </>
  )
}
