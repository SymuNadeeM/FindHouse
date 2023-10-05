"use client"
import { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import InnerFaq from './InneerFq'

const Faqpage = () => {
   const [quesOne, setquesOne] = useState(false)
   const [quesTwo, setquesTwo] = useState(false)
   const [quesThree, setquesThree] = useState(false)
   const [quesFour, setquesFour] = useState(false)
   const [quesFive, setquesFive] = useState(false)

  return (
    <> <InnerFaq />
    <section className=' py-[60px] bg-[#f7f7f7] md:px-[90px]'>
      <div className=' px-[15px] '>
           <div className=' mb-[40px] flex flex-col items-center justify-center'>
               <h2 className=' text-text-primary font-nunito  leading-5 mb-[10px] text-[30px] font-bold'>Frequently Asked Questions</h2>
           </div>
           <div className=" grid md:grid-cols-12 ">
               <div className="  grid col-span-1"></div>
               <div className=" bg-white col-span-10 border-[1px] border-[#ebebeb] rounded-[8px] p-[30px]" >
                <ul className=''>
                 <li>
                <div onClick={()=> setquesOne(!quesOne)} className={quesOne?" duration-300  relative h-auto  border-[1px]  border-primary-color mb-[20px] rounded-[8px]  flex items-center justify-between px-[20px] " :" duration-300  relative h-auto  border-[1px] border-[hsla(0,0%,68%,.2)] mb-[20px] rounded-[8px]  flex items-center justify-between px-[20px] "}>
                  <button  className={quesOne? "flex duration-300  items-center relative text-sm md:text-[16px] text-primary-color font-bold  py-[10px]  ": " flex  duration-300  items-center text-text-primary relative text-sm md:text-[16px] font-bold  py-[10px] "} >
                  Contrary to popular belief is Lorem inspum 
                 </button>
                  <h4 className=" text-[16px]">
                   {
                    !quesOne? (<MdKeyboardArrowDown className=" h-8" />) :(<MdKeyboardArrowUp className=' text-primary-color duration-300 '  />)
                   }
                   
                  </h4>
                </div>
              
               {quesOne && <div className="  pt-[10px] pb-[30px] "> 
                     <p className=' mb-[10px]  text-[14px] font-nunito text-text-primary leading-7'>Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.</p>
                </div>}
      
                 </li>
                 <li>
                <div onClick={()=> setquesTwo(!quesTwo)} className={quesTwo?" duration-300  relative h-auto  border-[1px]  border-primary-color mb-[20px] rounded-[8px]  flex items-center justify-between px-[20px] " :" duration-300  relative h-auto  border-[1px] border-[hsla(0,0%,68%,.2)] mb-[20px] rounded-[8px]  flex items-center justify-between px-[20px] "}>
                  <button  className={quesTwo? "flex duration-300  items-center relative text-sm md:text-[16px] text-primary-color font-bold  py-[10px]  ": " flex  duration-300  items-center text-text-primary relative text-sm md:text-[16px] font-bold  py-[10px] "} >
                  Model sentence structures, to generate
                 </button>
                  <h4 className=" text-[16px]">
                   {
                    !quesTwo? (<MdKeyboardArrowDown className=" h-8" />) :(<MdKeyboardArrowUp className=' text-primary-color duration-300 '  />)
                   }
                   
                  </h4>
                </div>
              
               {quesTwo && <div className="  pt-[10px] pb-[30px] "> 
                     <p className=' mb-[10px]  text-[14px] font-nunito text-text-primary leading-7'>Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.</p>
                </div>}
      
                 </li>
                 <li>
                <div onClick={()=> setquesThree(!quesThree)} className={quesThree?" duration-300  relative h-auto  border-[1px]  border-primary-color mb-[20px] rounded-[8px]  flex items-center justify-between px-[20px] " :" duration-300  relative h-auto  border-[1px] border-[hsla(0,0%,68%,.2)] mb-[20px] rounded-[8px]  flex items-center justify-between px-[20px] "}>
                  <button  className={quesThree? "flex duration-300  items-center relative text-sm md:text-[16px] text-primary-color font-bold  py-[10px]  ": " flex  duration-300  items-center text-text-primary relative text-sm md:text-[16px] font-bold  py-[10px] "} >
                  The First line of lorem Isupm
                 </button>
                  <h4 className=" text-[16px]">
                   {
                    !quesThree? (<MdKeyboardArrowDown className=" h-8" />) :(<MdKeyboardArrowUp className=' text-primary-color duration-300 '  />)
                   }
                   
                  </h4>
                </div>
              
               {quesThree && <div className="  pt-[10px] pb-[30px] "> 
                     <p className=' mb-[10px]  text-[14px] font-nunito text-text-primary leading-7'>Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.</p>
                </div>}
      
                 </li>
                 <li>
                <div onClick={()=> setquesFour(!quesFour)} className={quesFour?" duration-300  relative h-auto  border-[1px]  border-primary-color mb-[20px] rounded-[8px]  flex items-center justify-between px-[20px] " :" duration-300  relative h-auto  border-[1px] border-[hsla(0,0%,68%,.2)] mb-[20px] rounded-[8px]  flex items-center justify-between px-[20px] "}>
                  <button  className={quesFour? "flex duration-300  items-center relative text-sm md:text-[16px] text-primary-color font-bold  py-[10px]  ": " flex  duration-300  items-center text-text-primary relative text-sm md:text-[16px] font-bold  py-[10px] "} >
                  Letraset sheets containing Lorem Ipsum
                 </button>
                  <h4 className=" text-[16px]">
                   {
                    !quesFour? (<MdKeyboardArrowDown className=" h-8" />) :(<MdKeyboardArrowUp className=' text-primary-color duration-300 '  />)
                   }
                   
                  </h4>
                </div>
              
               {quesFour && <div className="  pt-[10px] pb-[30px] "> 
                     <p className=' mb-[10px]  text-[14px] font-nunito text-text-primary leading-7'>Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.</p>
                </div>}
      
                 </li>
                 <li>
                <div onClick={()=> setquesFive(!quesFive)} className={quesFive?" duration-300  relative h-auto  border-[1px]  border-primary-color mb-[20px] rounded-[8px]  flex items-center justify-between px-[20px] " :" duration-300  relative h-auto  border-[1px] border-[hsla(0,0%,68%,.2)] mb-[20px] rounded-[8px]  flex items-center justify-between px-[20px] "}>
                  <button  className={quesFive? "flex duration-300  items-center relative text-sm md:text-[16px] text-primary-color font-bold  py-[10px]  ": " flex  duration-300  items-center text-text-primary relative text-sm md:text-[16px] font-bold  py-[10px] "} >
                  
                  Finibus Bonorum et Malorum by Cicero are also
                 </button>
                  <h4 className=" text-[16px]">
                   {
                    !quesFive? (<MdKeyboardArrowDown className=" h-8" />) :(<MdKeyboardArrowUp className=' text-primary-color duration-300 '  />)
                   }
                   
                  </h4>
                </div>
              
               {quesFive && <div className="  pt-[10px] pb-[30px] "> 
                     <p className=' mb-[10px]  duration-700 text-[14px] font-nunito text-text-primary leading-7'>Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.</p>
                </div>}
      
                 </li>
              </ul>
               </div>
               <div className="  grid col-span-1"></div>
           </div>
        </div>
    </section>   
    </>    
  )
}

export default Faqpage
