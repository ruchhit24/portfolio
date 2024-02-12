import React from 'react'
import netflix from "../assets/images/netflix.png"
const Projects = () => {
  return (
    <div name='portfolio' className='w-full h-screen bg-gradient-to-b from bg-gray-900 via-gray-800 to-black text-white pt-36'>
        <div className='max-w-screen-lg h-screen mx-auto'>
            <div>
                <p className='text-6xl font-semibold'>Portfolio</p>
                <p className='text-xl pt-6'>Check out some of my work here</p>
            </div>
            <div className='grid grid-cols-3 gap-10 pt-10'>
            <div>
                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/c4965b85606305.5d80fd667a6a2.png' alt='bfb' height={200} width={200} className='w-fit rounded-2xl cursor-pointer hover:scale-105 duration-500'></img>
                <div className='flex justify-evenly'>
                <button className='p-2 mt-6 bg-gradient-to-r from-cyan-500 to-blue-800 text-white cursor-pointer rounded-lg px-6 flex flex-row items-center text-lg'>Demo</button>
                <button className='p-2 mt-6 bg-gradient-to-r from-cyan-500 to-blue-800 text-white cursor-pointer rounded-lg px-6 flex flex-row items-center text-lg'>Live</button>
                </div>

            </div>
            <div>
                <img src={netflix} alt='bfb' height={200} width={200} className='w-fit rounded-2xl cursor-pointer hover:scale-105 duration-500'></img>
                <div className='flex justify-evenly'>
                <button className='p-2 mt-6 bg-gradient-to-r from-cyan-500 to-blue-800 text-white cursor-pointer rounded-lg px-6 flex flex-row items-center text-lg'>Demo</button>
                <button className='p-2 mt-6 bg-gradient-to-r from-cyan-500 to-blue-800 text-white cursor-pointer rounded-lg px-6 flex flex-row items-center text-lg'>Live</button>
                </div>

            </div>
            <div>
                <img src="https://duet-cdn.vox-cdn.com/thumbor/0x0:1494x840/750x500/filters:focal(220x120:221x121):format(webp)/cdn0.vox-cdn.com/uploads/chorus_asset/file/8449755/New_Dark_Theme.png" alt='bfb' className='h-[230px] w-fit rounded-2xl cursor-pointer hover:scale-105 duration-500'></img>
                <div className='flex justify-evenly pt-2'>
                <button className='p-2 mt-6 bg-gradient-to-r from-cyan-500 to-blue-800 text-white cursor-pointer rounded-lg px-6 flex flex-row items-center text-lg'>Demo</button>
                <button className='p-2 mt-6 bg-gradient-to-r from-cyan-500 to-blue-800 text-white cursor-pointer rounded-lg px-6 flex flex-row items-center text-lg'>Live</button>
                </div>

            </div>
            

            </div>
        </div>

    </div>
  )
}

export default Projects