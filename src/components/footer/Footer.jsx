import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#101727] text-white'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-10 md:p-20'>
                <div>
                    <h1 className='text-3xl md:text-4xl font-extrabold'>DigiTools</h1>
                    <p className='text-[#727272] mt-3 text-sm md:text-base'>
                        Premium digital tools for creators, professionals, <br />
                        and businesses. Work smarter <br /> with our suite of powerful tools.
                    </p>
                </div>

                <div>
                    <h1 className='font-bold text-xl md:text-2xl mb-3'>Product</h1>
                    <ul className='text-[#727272] space-y-2'>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>

                <div>
                    <h1 className='font-bold text-xl md:text-2xl mb-3'>Company</h1>
                    <ul className='text-[#727272] space-y-2'>
                        <li><a href="">About</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Press</a></li>
                    </ul>
                </div>

                <div>
                    <h1 className='font-bold text-xl md:text-2xl mb-3'>Resources</h1>
                    <ul className='text-[#727272] space-y-2'>
                        <li><a href="">Documentation</a></li>
                        <li><a href="">Help Center</a></li>
                        <li><a href="">Community</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h1 className='font-bold text-xl md:text-2xl mb-3'>Social Links</h1>
                    <ul className='flex gap-5 text-white mt-3'>
                        <li><FaInstagram size={20} /></li>
                        <li><FaFacebook size={20} /></li>
                        <li><FaX size={20} /></li>
                    </ul>
                </div>
            </div>

            <hr className='border-gray-700' />

            <div className='flex flex-col md:flex-row text-[#727272] p-5 md:p-10 justify-between items-center'>
                <div>
                    <h1>© 2026 Digitools. All rights reserved.</h1>
                </div>
                <div className='flex gap-5 mt-3 md:mt-0'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies</li>
                </div>
            </div>
        </div>
    );
};

export default Footer;