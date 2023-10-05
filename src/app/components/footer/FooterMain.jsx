import Link from 'next/link'

function FooterMain() {
  return (
    <section className=' py-[40px] bg-[#1d293e] md:px-[90px]'>
       <div className='px-[15px]'>
           <div className=' grid md:grid-cols-2'>
                <div>
                     <ul className='outline-none list-none flex justify-center md:justify-start'>
                        <li className=' pr-[25px]'><Link href={"/about"} className=' text-[14px] font-nunito leading-9 text-[#8a99b3] hover:text-white duration-300'>Home</Link></li>
                        <li className=' pr-[25px]'><Link href={"/about"} className=' text-[14px] font-nunito leading-9 text-[#8a99b3] hover:text-white duration-300'>Listing</Link></li>
                        <li className=' pr-[25px]'><Link href={"/about"} className=' text-[14px] font-nunito leading-9 text-[#8a99b3] hover:text-white duration-300'>Property</Link></li>
                        <li className=' pr-[25px]'><Link href={"/about"} className=' text-[14px] font-nunito leading-9 text-[#8a99b3] hover:text-white duration-300'>About Us</Link></li>
                        <li className=' pr-[25px]'><Link href={"/about"} className=' text-[14px] font-nunito leading-9 text-[#8a99b3] hover:text-white duration-300'>Blog</Link></li>
                        <li className=' pr-[25px]'><Link href={"/about"} className=' text-[14px] font-nunito leading-9 text-[#8a99b3] hover:text-white duration-300'>Contact</Link></li>
                     </ul>
                </div>
                <div className='flex items-center justify-center md:justify-end'>
                    <p className=' text-[14px] font-nunito leading-9 text-[#8a99b3]'>© 2023 nadeem symun. All rights reserved.</p>
                </div>
                
           </div>
        </div>
    </section>
  )
}

export default FooterMain
