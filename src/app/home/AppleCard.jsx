import { GiHighFive } from 'react-icons/gi'
import { MdOutlineAddHomeWork } from 'react-icons/md'
import { SiWebmoney } from 'react-icons/si'


const AppleCard = () => {
  return (
    <section className=' py-[60px] bg-[#f7f7f7] md:px-[90px]'>
            <div className=' px-[15px] '>
                   <div className=' mb-[40px] flex flex-col items-center justify-center'>
                       <h2 className=' text-text-primary font-nunito  leading-5 mb-[10px] text-[30px] font-bold'>Why Choose Us</h2>
                       <p className=" py-[8px]  text-[16px] font-nunito text-[#777] leading-5 font-normal mb-[10px]">We provide full service at every step.</p>
                   </div>
                    
                    <div className=" md:grid  md:grid-cols-3 md:gap-[25px] text-center">
                          <div className=" flex flex-col items-center justify-center bg-white rounded-[8px]  mb-[30px] pt-[50px] md:px-[41px] pb-[30px] hover:shadow-xl ">
                              <div className=' flex items-center justify-center w-[130px] h-[130px] leading-[130px] rounded-full bg-[#ffe8e9] hover:bg-primary-color'>
                                 <GiHighFive className=' leading-[130px] text-primary-color hover:text-white text-[68px] '  /> 
                                 
                              </div>
                              <div className='mt-[50px] flex flex-col justify-center items-center '>
                                  <h4 className=' font-nunito text-text-primary font-bold text-[18px]'>Trusted Nure  Thousands</h4>
                                   <p className=' text-[14px] font-nunito leading-[32px] text-text-primary mb-[25px] flex  justify-center items-center'> Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.</p>
                              </div>
                              
                              
                          </div>   
                          <div className=" flex flex-col items-center justify-center bg-white rounded-[8px]  mb-[30px] pt-[50px] md:px-[41px] pb-[30px] hover:shadow-xl ">
                              <div className=' flex items-center justify-center w-[130px] h-[130px] leading-[130px] rounded-full bg-[#ffe8e9] hover:bg-primary-color'>
                                 <MdOutlineAddHomeWork className='leading-[130px] text-primary-color hover:text-white text-[68px] '  /> 
                              </div>
                              <div className='mt-[50px] flex flex-col justify-center items-center '>
                                  <h4 className=' font-nunito text-text-primary font-bold text-[18px]'>Wide Renge Of Properties</h4>
                                   <p className=' text-[14px] font-nunito leading-[32px] text-text-primary mb-[25px]'> Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.</p>
                              </div>
                          </div> 
                          <div className=" flex flex-col items-center justify-center bg-white rounded-[8px]  mb-[30px] pt-[50px] md:px-[41px] pb-[30px] hover:shadow-xl ">
                              <div className=' flex items-center justify-center w-[130px] h-[130px] leading-[130px] rounded-full bg-[#ffe8e9] hover:bg-primary-color'>
                                 <SiWebmoney className='leading-[130px] text-primary-color hover:text-white text-[68px] '  /> 
                              </div>
                              <div className='mt-[50px] flex flex-col justify-center items-center '>
                                  <h4 className=' font-nunito text-text-primary font-bold text-[18px]'>Financing Made Easy</h4>
                                   <p className=' text-[14px] font-nunito leading-[32px] text-text-primary mb-[25px]'> Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.</p>
                              </div>
                          </div> 
                    </div>
            </div>
    </section>  
  )
}

export default AppleCard

