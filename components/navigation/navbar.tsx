'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import Image from "next/image";

const NavBar = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    let closeTimeout: NodeJS.Timeout;

    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm">
            <div className="max-w-[100%] md:max-w-[90%] mx-auto px-0 pr-4 md:pr-0 md:px-12">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/icons/logo.svg"
                            alt="Tax Compliance"
                            width={ 218 }
                            height={ 33 }
                            className="w-7/10 md:w-9/10 h-auto object-contain mx-auto"
                            priority
                        />
                    </Link>

                    {/* Navigation */ }
                    <nav className="hidden md:flex items-center text-[#0F161E] space-x-10">
                        <Link
                            href="/"
                            className="font-medium transition-colors"
                        >
                            Home
                        </Link>

                        {/* Services Dropdown */ }
                        <div
                            className="relative"
                            onMouseEnter={ () => {
                                clearTimeout(closeTimeout);
                                setIsServicesOpen(true);
                            } }
                            onMouseLeave={ () => {
                                closeTimeout = setTimeout(() => setIsServicesOpen(false), 150);
                            } }
                        >
                            <button
                                className="flex items-center gap-1 text-[#0F161E] hover:text-[#240E4C] font-medium transition-colors"
                            >
                                Services
                                <ChevronDown
                                    size={ 18 }
                                    className={ `transition-transform ${ isServicesOpen ? 'rotate-180' : '' }` }
                                />
                            </button>

                            { isServicesOpen && (
                                <div
                                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                                    onMouseEnter={ () => setIsServicesOpen(true) } // Keep open while hovering dropdown
                                    onMouseLeave={ () => setIsServicesOpen(false) } // Close after leaving dropdown
                                >
                                    <Link
                                        href="/services/tax-filing"
                                        className="block px-4 py-3 text-[#0F161E] hover:bg-blue-50 hover:text-[#240E4C] transition-colors"
                                    >
                                        Tax Filing
                                    </Link>
                                    <Link
                                        href="/services/tax-consulting"
                                        className="block px-4 py-3 text-[#0F161E] hover:bg-blue-50 hover:text-[#240E4C] transition-colors"
                                    >
                                        Tax Consulting
                                    </Link>
                                    <Link
                                        href="/services/tax-planning"
                                        className="block px-4 py-3 text-[#0F161E] hover:bg-blue-50 hover:text-[#240E4C] transition-colors"
                                    >
                                        Tax Planning
                                    </Link>
                                    <Link
                                        href="/services/audit-support"
                                        className="block px-4 py-3 text-[#0F161E] hover:bg-blue-50 hover:text-[#240E4C] transition-colors"
                                    >
                                        Audit Support
                                    </Link>
                                </div>
                            ) }
                        </div>

                        <Link
                            href="/blog"
                            className="text-[#0F161E] hover:text-[#240E4C] font-medium transition-colors"
                        >
                            Blog
                        </Link>

                        <Link
                            href="/about"
                            className="text-[#0F161E] hover:text-[#240E4C] font-medium transition-colors"
                        >
                            About
                        </Link>
                    </nav>

                    {/* CTA Buttons */ }
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/signup"
                            className="px-6 py-2 border-2 border-[#0F161E] text-[#0F161E] rounded-full font-semibold hover:bg-gray-50 transition-colors"
                        >
                            Sign Up
                        </Link>
                        <Link
                            href="/login"
                            className="px-6 py-2 bg-[#0F161E] text-white rounded-full font-semibold hover:bg-[#240E4C] transition-colors"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */ }
                    <button className="md:hidden p-2 text-[#0F161E]">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={ 2 }
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
