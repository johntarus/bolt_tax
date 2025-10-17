'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { roboto } from "@/app/fonts";

const NavBar = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm">
            <div className="w-full mx-auto px-12">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="flex items-center">
            <span className={ `${ roboto.className } text-3xl font-black italic text-[#21005D]` }>
              BOLT TAX
            </span>
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
                            onMouseEnter={ () => setIsServicesOpen(true) }
                            onMouseLeave={ () => setIsServicesOpen(false) }
                        >
                            <button
                                className="flex items-center gap-1 text-gray-800 hover:text-blue-900 font-medium transition-colors">
                                Services
                                <ChevronDown
                                    size={ 18 }
                                    className={ `transition-transform ${ isServicesOpen ? 'rotate-180' : '' }` }
                                />
                            </button>

                            { isServicesOpen && (
                                <div
                                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                                    <Link
                                        href="/services/tax-filing"
                                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                                    >
                                        Tax Filing
                                    </Link>
                                    <Link
                                        href="/services/tax-consulting"
                                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                                    >
                                        Tax Consulting
                                    </Link>
                                    <Link
                                        href="/services/tax-planning"
                                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                                    >
                                        Tax Planning
                                    </Link>
                                    <Link
                                        href="/services/audit-support"
                                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                                    >
                                        Audit Support
                                    </Link>
                                </div>
                            ) }
                        </div>

                        <Link
                            href="/blog"
                            className="text-gray-800 hover:text-blue-900 font-medium transition-colors"
                        >
                            Blog
                        </Link>

                        <Link
                            href="/about"
                            className="text-gray-800 hover:text-blue-900 font-medium transition-colors"
                        >
                            About
                        </Link>
                    </nav>

                    {/* CTA Buttons */ }
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/signup"
                            className="px-6 py-1 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                        >
                            Sign Up
                        </Link>
                        <Link
                            href="/login"
                            className="px-6 py-1 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */ }
                    <button className="md:hidden p-2 text-gray-900">
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