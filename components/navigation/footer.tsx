"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { thiccboi, urbanist } from "@/app/fonts";
import Image from "next/image";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("English");

    const handleSubscribe = () => {
        console.log("Subscribing:", email);
    };

    return (
        <footer className="bg-gradient-to-b from-[#3D1B6B] to-[#2D1250]">
            <div className="px-8 lg:px- xl:px-24 py-16">
                <div className="max-w-[1800px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-2 pr-0 md:pr-[20%]">
                            <h2 className={ `${ thiccboi.className } text-3xl font-bold text-white mb-4` }>
                                Bolt Tax
                            </h2>
                            <p className={ `${ thiccboi.className } text-[#FFFFFF] text-md md:text-xl mb-8 leading-relaxed` }>
                                Bolt Tax is built to make tax filing simple, affordable, and stress-free for students.
                                From maximizing refunds to offering step-by-step guidance, we&apos;re here to help you
                                file
                                with confidence.
                            </p>

                            {/* Newsletter */ }
                            <div className="flex flex-col sm:flex-row gap-6 md:gap-12 mb-8">
                                <input
                                    type="email"
                                    value={ email }
                                    onChange={ (e) => setEmail(e.target.value) }
                                    placeholder="Enter your email"
                                    className="px-6 py-3 rounded-full bg-transparent border-2 border-white/50 text-[#FFFFFF] placeholder-[#FFFFFF] focus:outline-none focus:border-white transition-all"
                                />
                                <button
                                    onClick={ handleSubscribe }
                                    className="px-8 py-3 rounded-full cursor-pointer bg-white text-[#6B2FEB] font-semibold hover:bg-gray-100 transition-all whitespace-nowrap"
                                >
                                    Subscribe Now
                                </button>
                            </div>

                            {/* Social Media Icons */ }
                            <div className="flex gap-4">
                                {/* Facebook */ }
                                <a
                                    href="#"
                                    className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-all"
                                    aria-label="Facebook"
                                >
                                    <svg
                                        className="w-7 h-7 text-[#3b0a67]"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z"/>
                                    </svg>
                                </a>

                                {/* Instagram */ }
                                <a
                                    href="#"
                                    className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-all"
                                    aria-label="Instagram"
                                >
                                    <svg
                                        className="w-7 h-7 text-[#3b0a67]"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>

                                {/* LinkedIn */ }
                                <a
                                    href="#"
                                    className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-all"
                                    aria-label="LinkedIn"
                                >
                                    <svg
                                        className="w-7 h-7 text-[#3b0a67]"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                            </div>

                        </div>

                        {/* Right Columns - Website Links (3 columns) */ }
                        <div
                            className={ `${ thiccboi.className } lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8` }>
                            {/* Column 1 */ }
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-6">
                                    Website Links
                                </h3>
                                <ul className="space-y-4">
                                    <li>
                                        <a href="#"
                                           className="text-[#FFFFFF] hover:text-white text-lg md:text-xl transition-colors">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="text-[#FFFFFF] hover:text-white text-lg md:text-xl transition-colors">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="text-[#FFFFFF] hover:text-white text-lg md:text-xl transition-colors">
                                            Get in touch
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="text-[#FFFFFF] hover:text-white text-lg md:text-xl transition-colors">
                                            FAQs
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 2 */ }
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-6">
                                    Website Links
                                </h3>
                                <ul className="space-y-4">
                                    <li>
                                        <a href="#"
                                           className="text-white/90 hover:text-white text-lg md:text-xl transition-colors">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="text-white/90 hover:text-white text-lg md:text-xl transition-colors">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="text-white/90 hover:text-white text-lg md:text-xl transition-colors">
                                            Get in touch
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="text-white/90 hover:text-white text-lg md:text-xl transition-colors">
                                            FAQs
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 3 */ }
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-6">
                                    Website Links
                                </h3>
                                <ul className="space-y-4">
                                    <li>
                                        <a href="#"
                                           className="text-white/90 hover:text-white text-lg md:text-xl transition-colors">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="text-white/90 hover:text-white text-lg md:text-xl transition-colors">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="text-white/90 hover:text-white text-lg md:text-xl transition-colors">
                                            Get in touch
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="text-white/90 hover:text-white text-lg md:text-xl transition-colors">
                                            FAQs
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */ }
            <div className="bg-[#FFFFFF] border-t border-white/20">
                <div className="max-w-[90%] mx-auto py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */ }
                        <p className="text-[#6B2FEB] text-base">
                            © 2025 Bolt Tax. All Rights Reserved
                        </p>

                        {/* Language Selector */ }
                        <div className="flex gap-2">
                            <button
                                onClick={ () => setSelectedLanguage("English") }
                                className={ `px-6 py-2 rounded-full font-medium transition-all ${
                                    selectedLanguage === "English"
                                        ? "bg-[#6B2FEB] text-white"
                                        : "text-[#A78BFA] hover:text-[#6B2FEB]"
                                }` }
                            >
                                English
                            </button>
                            <button
                                onClick={ () => setSelectedLanguage("French") }
                                className={ `px-6 py-2 rounded-full font-medium transition-all ${
                                    selectedLanguage === "French"
                                        ? "bg-[#6B2FEB] text-white"
                                        : "text-[#A78BFA] hover:text-[#6B2FEB]"
                                }` }
                            >
                                French
                            </button>
                            <button
                                onClick={ () => setSelectedLanguage("German") }
                                className={ `px-6 py-2 rounded-full font-medium transition-all ${
                                    selectedLanguage === "German"
                                        ? "bg-[#6B2FEB] text-white"
                                        : "text-[#A78BFA] hover:text-[#6B2FEB]"
                                }` }
                            >
                                German
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}