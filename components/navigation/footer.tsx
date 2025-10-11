"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("English");

    const handleSubscribe = () => {
        console.log("Subscribing:", email);
        // Add your subscription logic here
    };

    return (
        <footer className="bg-gradient-to-b from-[#3D1B6B] to-[#2D1250]">
            {/* Main Footer Content */ }
            <div className="px-4 py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Left Column - Brand & Newsletter */ }
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Bolt Tax
                            </h2>
                            <p className="text-white/90 mb-8 leading-relaxed">
                                Bolt Tax is built to make tax filing simple, affordable, and stress-free for students.
                                From maximizing refunds to offering step-by-step guidance, we&apos;re here to help you
                                file
                                with confidence.
                            </p>

                            {/* Newsletter */ }
                            <div className="flex flex-col sm:flex-row gap-3 mb-8">
                                <input
                                    type="email"
                                    value={ email }
                                    onChange={ (e) => setEmail(e.target.value) }
                                    placeholder="Enter your email"
                                    className="flex-1 px-6 py-3 rounded-full bg-transparent border-2 border-white/50 text-white placeholder-white/70 focus:outline-none focus:border-white transition-all"
                                />
                                <button
                                    onClick={ handleSubscribe }
                                    className="px-8 py-3 rounded-full bg-white text-[#6B2FEB] font-semibold hover:bg-gray-100 transition-all whitespace-nowrap"
                                >
                                    Subscribe Now
                                </button>
                            </div>

                            {/* Social Media Icons */ }
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-all"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-6 h-6 text-[#3D1B6B]" fill="currentColor"/>
                                </a>
                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-all"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-6 h-6 text-[#3D1B6B]"/>
                                </a>
                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-all"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-6 h-6 text-[#3D1B6B]" fill="currentColor"/>
                                </a>
                            </div>
                        </div>

                        {/* Right Columns - Website Links (3 columns) */ }
                        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {/* Column 1 */ }
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-6">
                                    Website Links
                                </h3>
                                <ul className="space-y-4">
                                    <li>
                                        <a href="#"
                                           className="text-white/90 hover:text-white text-lg transition-colors">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="text-white/90 hover:text-white text-lg transition-colors">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="text-white/90 hover:text-white text-lg transition-colors">
                                            Get in touch
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="text-white/90 hover:text-white text-lg transition-colors">
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
                                           className="text-white/90 hover:text-white text-lg transition-colors">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="text-white/90 hover:text-white text-lg transition-colors">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="text-white/90 hover:text-white text-lg transition-colors">
                                            Get in touch
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="text-white/90 hover:text-white text-lg transition-colors">
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
                                           className="text-white/90 hover:text-white text-lg transition-colors">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="text-white/90 hover:text-white text-lg transition-colors">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="text-white/90 hover:text-white text-lg transition-colors">
                                            Get in touch
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="text-white/90 hover:text-white text-lg transition-colors">
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
            <div className="border-t border-white/20">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */ }
                        <p className="text-[#A78BFA] text-base">
                            © 2025 Bolt Tax. All Rights Reserved
                        </p>

                        {/* Language Selector */ }
                        <div className="flex gap-2">
                            <button
                                onClick={ () => setSelectedLanguage("English") }
                                className={ `px-6 py-2 rounded-full font-medium transition-all ${
                                    selectedLanguage === "English"
                                        ? "bg-[#6B2FEB] text-white"
                                        : "text-[#A78BFA] hover:text-white"
                                }` }
                            >
                                English
                            </button>
                            <button
                                onClick={ () => setSelectedLanguage("French") }
                                className={ `px-6 py-2 rounded-full font-medium transition-all ${
                                    selectedLanguage === "French"
                                        ? "bg-[#6B2FEB] text-white"
                                        : "text-[#A78BFA] hover:text-white"
                                }` }
                            >
                                French
                            </button>
                            <button
                                onClick={ () => setSelectedLanguage("German") }
                                className={ `px-6 py-2 rounded-full font-medium transition-all ${
                                    selectedLanguage === "German"
                                        ? "bg-[#6B2FEB] text-white"
                                        : "text-[#A78BFA] hover:text-white"
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