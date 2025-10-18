'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, X } from 'lucide-react';
import Image from 'next/image';

const NavBar = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    let closeTimeout: NodeJS.Timeout;

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMobileMenuOpen]);

    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm">
            <div className="max-w-[100%] md:max-w-[95%] mx-auto px-0 pr-4 md:pr-0 md:px-4">
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

                    {/* Desktop Navigation */ }
                    <nav className="hidden md:flex items-center text-[#0F161E] space-x-10">
                        <Link href="/" className="font-semibold transition-colors">
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
                                className="flex items-center gap-1 text-[#0F161E] hover:text-[#240E4C] font-semibold transition-colors">
                                Services
                                <ChevronDown
                                    size={ 18 }
                                    className={ `transition-transform ${ isServicesOpen ? 'rotate-180' : '' }` }
                                />
                            </button>

                            { isServicesOpen && (
                                <div
                                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                                    onMouseEnter={ () => setIsServicesOpen(true) }
                                    onMouseLeave={ () => setIsServicesOpen(false) }
                                >
                                    <Link href="/services/tax-filing"
                                          className="block px-4 py-3 hover:bg-blue-50 hover:text-[#240E4C] transition-colors">Tax
                                        Filing</Link>
                                    <Link href="/services/tax-consulting"
                                          className="block px-4 py-3 hover:bg-blue-50 hover:text-[#240E4C] transition-colors">Tax
                                        Consulting</Link>
                                    <Link href="/services/tax-planning"
                                          className="block px-4 py-3 hover:bg-blue-50 hover:text-[#240E4C] transition-colors">Tax
                                        Planning</Link>
                                    <Link href="/services/audit-support"
                                          className="block px-4 py-3 hover:bg-blue-50 hover:text-[#240E4C] transition-colors">Audit
                                        Support</Link>
                                </div>
                            ) }
                        </div>

                        <Link href="/blog"
                              className="text-[#0F161E] hover:text-[#240E4C] font-semibold transition-colors">
                            Blog
                        </Link>

                        <Link href="/about"
                              className="text-[#0F161E] hover:text-[#240E4C] font-semibold transition-colors">
                            About
                        </Link>
                    </nav>

                    {/* CTA Buttons */ }
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/signup"
                              className="px-6 py-2 border-2 border-[#0F161E] text-[#0F161E] rounded-full font-semibold hover:bg-gray-50 transition-colors">
                            Sign Up
                        </Link>
                        <Link href="/login"
                              className="px-6 py-2 bg-[#0F161E] text-white rounded-full font-semibold hover:bg-[#240E4C] transition-colors">
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */ }
                    <button
                        className="md:hidden p-2 text-[#0F161E]"
                        onClick={ () => setIsMobileMenuOpen(true) }
                        aria-label="Open menu"
                    >
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

            {/* Mobile Menu Overlay */ }
            { isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40 transition-opacity duration-300"
                    onClick={ () => setIsMobileMenuOpen(false) }
                />
            ) }

            {/* Mobile Slide Menu */ }
            <div
                className={ `fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out flex flex-col ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }` }
            >
                {/* Header */ }
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <Image
                        src="/icons/logo.svg"
                        alt="Bolt Tax"
                        width={ 150 }
                        height={ 40 }
                        className="object-contain"
                    />
                    <button
                        onClick={ () => setIsMobileMenuOpen(false) }
                        className="p-2 text-gray-700 hover:text-[#240E4C] transition-colors"
                        aria-label="Close menu"
                    >
                        <X className="w-6 h-6"/>
                    </button>
                </div>

                {/* Scrollable Links */ }
                <nav className="flex-1 overflow-y-auto p-6 space-y-6 text-lg text-[#0F161E] font-semibold">
                    <Link href="/" onClick={ () => setIsMobileMenuOpen(false) }>Home</Link>
                    <div className="border-t border-gray-200"/>

                    <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer list-none">
                            <span>Services</span>
                            <ChevronDown
                                size={ 18 }
                                className="transition-transform group-open:rotate-180"
                            />
                        </summary>
                        <div className="flex flex-col mt-3 pl-4 space-y-3 text-base text-gray-700">
                            <Link href="/services/tax-filing" onClick={ () => setIsMobileMenuOpen(false) }>Tax
                                Filing</Link>
                            <Link href="/services/tax-consulting" onClick={ () => setIsMobileMenuOpen(false) }>Tax
                                Consulting</Link>
                            <Link href="/services/tax-planning" onClick={ () => setIsMobileMenuOpen(false) }>Tax
                                Planning</Link>
                            <Link href="/services/audit-support" onClick={ () => setIsMobileMenuOpen(false) }>Audit
                                Support</Link>
                        </div>
                    </details>

                    <Link href="/blog" onClick={ () => setIsMobileMenuOpen(false) }>Blog</Link>
                    <Link href="/about" onClick={ () => setIsMobileMenuOpen(false) }>About</Link>
                </nav>

                {/* Fixed Footer Buttons */ }
                <div className="p-6 border-t border-gray-200 flex flex-col gap-3">
                    <Link
                        href="/signup"
                        onClick={ () => setIsMobileMenuOpen(false) }
                        className="px-6 py-2 border-2 border-[#0F161E] text-[#0F161E] rounded-full font-semibold text-center hover:bg-gray-50 transition-colors"
                    >
                        Sign Up
                    </Link>
                    <Link
                        href="/login"
                        onClick={ () => setIsMobileMenuOpen(false) }
                        className="px-6 py-2 bg-[#0F161E] text-white rounded-full font-semibold text-center hover:bg-[#240E4C] transition-colors"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
