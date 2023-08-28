import React from 'react';
import {BsGithub, BsTwitter, BsFacebook} from 'react-icons/bs';
import { AiFillCopyrightCircle } from 'react-icons/ai';



const Footer = () => {

return (

<div className='bg-[#000] text-white p-4 '>
<div className=' container mx-auto'>
  <h1 className='flex flex-row justify-center'> <span className='py-1 px-2'> <AiFillCopyrightCircle /></span> Iswat Owokoniran. All rights reserved</h1> 
  <div className='flex flex-row justify-center'> 
  <h2 className='px-2'> <BsGithub /> </h2>
  <h2 className='px-2'><BsTwitter/></h2> 
  <h2 className='px-2'><BsFacebook /></h2> 
</div>
</div>
</div>

);
};



export default Footer;