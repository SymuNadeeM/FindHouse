import { BsArrowRight } from 'react-icons/bs'

const NextArrow = ({onClick}) => {
  return (
    <div className=' absolute top-[45%] bottom-[50%] right-[-5px] md:right-[-10px]  ' onClick={onClick}>
       <div className=' bg-primary-color text-white  h-[40px] w-[40px] rounded-full flex items-center justify-center cursor-pointer'>
         <BsArrowRight />
       </div>
    </div>
  )
}

export default NextArrow
