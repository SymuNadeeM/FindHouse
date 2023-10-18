'use client'

import { useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';


const ScrollButton = () =>{ 

const [visible, setVisible] = useState(false) 

const toggleVisible = () => { 
	const scrolled = document.documentElement.scrollTop; 
	if (scrolled > 300){ 
	setVisible(true) 
	} 
	else if (scrolled <= 300){ 
	setVisible(false) 
	} 
}; 

const scrollToTop = () =>{ 
	window.scrollTo({ 
	top: 0, 
	behavior: 'smooth'
	
	}); 
}; 

window.addEventListener('scroll', toggleVisible); 

return ( 
    <div className='fixed  bottom-[15px] right-[20px]'>
		<button className='  w-[45px] h-[45px] rounded-full text-white bg-[#141e2f] bottom-0 right-2' onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} > 
		<div className=' flex items-center justify-center'>
		<AiOutlineArrowUp size={22}  /> 
		</div>
		</button> 
	</div>	
); 
} 

export default ScrollButton; 

