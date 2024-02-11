import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
const SocialLinks = () => {
  return (
    <div className='hidden lg:flex flex-col left-0 top-1/2 fixed text-white pt-2'>
        <ul>
            <li> <a href='https://www.linkedin.com/in/ruchit-gule-406978249/?originalSubdomain=in' className='text-lg font-semibold flex items-center gap-2 justify-between w-40 h-11 px-4 ml-[-100px] rounded-tr-lg hover:ml-[-10px] duration-500 bg-gray-600'>LinkedIn <><FaLinkedin size={30} />
</></a></li>
            <li> <a href='https://github.com/ruchhit24' className='text-lg font-semibold flex items-center gap-2 justify-between w-40 h-11 px-4 ml-[-100px] hover:ml-[-10px] duration-500 bg-gray-600'>Github <><FaGithub size={30}/></></a></li>
            <li> <a href='https://instagram.com' className='text-lg font-semibold flex items-center gap-2 justify-between w-40 h-11 px-4 ml-[-100px] hover:ml-[-10px] duration-500 bg-gray-600'>Instagram <><FaInstagramSquare size={30}/></></a></li>
            <li> <a href='/Ruchit_NITRR_.pdf' download='true' className='text-lg font-semibold flex items-center gap-2 justify-between w-40 h-11 px-4 ml-[-100px] rounded-br-lg hover:ml-[-10px] duration-500 bg-gray-600'>Resume <><IoDocumentText size={30}/></></a></li>
        </ul>
    </div>
  )
}

export default SocialLinks