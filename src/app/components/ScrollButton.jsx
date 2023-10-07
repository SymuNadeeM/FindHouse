'use client'

import { useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
// import {FaArrowCircleUp} from 'react-icons/fa'; 
// import { Button } from './Styles'; 

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
	/* you can also use 'auto' behaviour 
		in place of 'smooth' */
	}); 
}; 

window.addEventListener('scroll', toggleVisible); 

return ( 
    
	<button className=' z-50 w-[50px] h-[50px] bg-primary-color bottom-0 right-2'> 
	<AiOutlineArrowUp onClick={scrollToTop} 
	style={{display: visible ? 'inline' : 'none'}} /> 
	</button> 
); 
} 

export default ScrollButton; 

