"use client";
import '../app/global.css';
import { useState } from 'react';
import Link from 'next/link';
import Logout from './Logout';

const NavProducer = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuButtonClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className=" m-4 bg-gray-300">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <div>
                            <Link href="/" >
                                <span className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                                    <svg className="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    <span className="font-bold">KURMI</span>
                                </span>
                            </Link>
                        </div>
                        <div className="hidden md:flex items-center space-x-1">
                            <Link href="/producer/dashboard" >
                                <span className="py-5 px-3 text-gray-700 hover:text-gray-900">Home</span>
                            </Link>
                            <Link href="/producer/pending_orders" >
                                <span className="py-5 px-3 text-gray-700 hover:text-gray-900">Ventas</span>
                            </Link>
                            <Logout />
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                        <Link href="/signup" >
                            <span className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</span>
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button" onClick={handleMobileMenuButtonClick}>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            <div className={`mobile-menu ${isMobileMenuOpen ? '' : 'hidden'} md:hidden p-4 bg-white`}>
                <Link href="/features">
                    <span className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900">Home</span>
                </Link>
                <Link href="/producer/pending_orders">
                    <span className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900">Ventas</span>
                </Link>
                <Logout />
            </div>
        </nav>
    );
};

export default NavProducer;