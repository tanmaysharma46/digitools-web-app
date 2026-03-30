import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { FaDotCircle } from 'react-icons/fa';
import { FaHandDots } from 'react-icons/fa6';
import heroImg from '../../../assets/banner.png'

const Banner = () => {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={heroImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <button className='btn  rounded-full bg-gradient-to-r border-[#4F39F6] from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent bg-[#E1E7FF]'><span className='text-blue-700'><FaDotCircle/></span>
                            New: AI-Powered Tools Available
                        </button>
                        <h1 className="text-5xl font-bold"> Supercharge Your <br /> Digital Workflow </h1>
                        <p className="py-6">
                            Access premium AI tools, design assets, templates, and productivity <br />
                            software—all in one place. Start creating faster today.

                           <br /> Explore Products

                        </p>
                       <div className='flex  gap-5'>
                         <button className="btn rounded-full bg-gradient-to-r text-white from-[#4F39F6] to-[#9514FA]">Explore Products </button>
                        <button className='btn rounded-full bg-gradient-to-r border-[#4F39F6] from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent '> <span className='text-black'><CiPlay1/></span> Watch Demo</button>
                       </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;