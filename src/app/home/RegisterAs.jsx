
function RegisterAs() {
  return (
   
    <section className='py-[50px]  bg-primary-color md:px-[90px]'>
        <div className=' px-[15px]'>

            <div className=' grid md:grid-cols-12  gap-[12px]  '>
                <div className=' grid md:col-span-8'>
                   <div className=' px-[10px] flex flex-col items-center md:items-start justify-center'>
                         <h2 className=' mb-[10px] text-white leading-5 text-[30px] font-bold font-nunito'>Become a Real Estate Agent</h2>
                          <p  className=" text-white leading-5 text-[14px] ">We only work with the best companies around the globe</p>
                   </div>
                </div>
                <div className=' grid md:col-span-4 '>
                   <div className=" flex items-center justify-center font-nunito text-[16px] mt-[15px] md:mt-0 ">
                        
                        <button className="rounded-lg bg-[#ff787c] hover:bg-white hover:text-primary-color duration-300 h-[60px] w-[200px] leading-[50px] shadow-lg text-white">
                            Register Now
                        </button>
                        
                           
                   </div>
                </div>
            </div>
 
        </div>
    </section>
  )
}

export default RegisterAs
