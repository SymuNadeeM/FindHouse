import { BsArrowLeft } from 'react-icons/bs'

const PrevArrow = ({onClick}) => {
  return (
    <div className='absolute top-[45%] bottom-[50%] left-[-8px] z-20  '  onClick={onClick}>
       <div className=' bg-primary-color text-white h-[40px] w-[40px] rounded-full flex items-center justify-center cursor-pointer'>
         <BsArrowLeft />
       </div>
    </div>
  )
}

export default PrevArrow
