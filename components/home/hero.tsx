import React from 'react';
import { CheckCircle, Shield, User, Users } from 'lucide-react';
import Image from "next/image";
import { foundersGrotesk, roboto, urbanist } from "@/app/fonts";

const Hero = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-24 px-4 bg-gradient-to-b from-purple-50 to-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className={`${foundersGrotesk.className} text-5xl md:text-6xl font-bold text-[#5520B2] mb-6`}>
                        Bolt Tax Gives Students<br/>
                        the Smartest Way to File Taxes
                    </h1>
                    <p className={`${urbanist.className} text-xl md:text-[1.75rem] text-[#5520B2] font-thin mb-8 mx-auto`}>
                        Designed for residents and non-residents in the US , Bolt Tax helps you keep more of your money
                        while staying IRS-compliant.</p>
                    <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
                        <button
                            className="px-7 pb-4 pt-2 bg-[#7120FF] text-white rounded-[10px] hover:bg-purple-800 flex items-center gap-2 text-lg font-semibold">
                            Request Demo
                            <Image
                                src="/icons/white_arrow.png"
                                alt="Arrow right"
                                width={20}
                                height={20}
                                className="object-contain ml-2"
                            />
                        </button>
                        <button
                            className="px-7 pb-4 pt-2 border-2 border-[#7120FF] text-[#7120FF] rounded-[10px] hover:bg-purple-50 text-lg font-semibold flex items-center gap-2">
                            Get Started
                            <Image
                                src="/icons/blue_arrow.png"
                                alt="Arrow right"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                        </button>
                    </div>
                </div>
            </section>

            {/* Dashboard Preview */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="flex justify-center">
                    <Image
                        src="/images/dashboard_preview.svg"
                        alt="Dashboard Preview"
                        width={700}
                        height={700}
                        className="w-9/10 h-auto object-contain"
                        priority
                    />
                </div>
            </section>


            {/* Features Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-9/10 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left Column - Text Content */}
                        <div>
                            <h2 className="text-5xl md:text-6xl font-bold text-[#5520B2] mb-6 leading-tight">
                                Comprehensive Tax Solutions<br/>
                                Tailored for You
                            </h2>
                            <p className={`${urbanist.className} text-xl md:text-3xl text-[#5520B2] mb-8 leading-relaxed`}>
                                Whether it&apos;s your first time filing or not, Bolt Tax makes it quick and easy to
                                stay on track.
                            </p>
                            <button
                                className="px-7 pb-4 pt-2 bg-[#7120FF] text-white rounded-[10px] hover:bg-purple-800 flex items-center gap-2 text-lg font-semibold">
                                Get Started
                                <Image
                                    src="/icons/white_arrow.png"
                                    alt="Arrow right"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            </button>
                        </div>

                        {/* Right Column - Card */}
                        <div className="bg-purple-900 rounded-3xl p-8 text-white">
                            {/* Complete Your Filings Card */}
                            <div className="bg-white rounded-2xl p-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="relative">
                                        {/* Circular progress indicator */}
                                        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
                                            <circle
                                                cx="40"
                                                cy="40"
                                                r="34"
                                                stroke="#E5E7EB"
                                                strokeWidth="8"
                                                fill="none"
                                            />
                                            <circle
                                                cx="40"
                                                cy="40"
                                                r="34"
                                                stroke="#7C3AED"
                                                strokeWidth="8"
                                                fill="none"
                                                strokeDasharray="213.6"
                                                strokeDashoffset="53.4"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div
                                                className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                                <User className="text-purple-700" size={24}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            Complete Your Filings
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Upload all documents required for your individual tax return
                                        </p>
                                    </div>
                                </div>
                                <button
                                    className="w-full mt-6 px-6 py-3 bg-purple-400 text-white rounded-xl hover:bg-purple-500 transition-colors font-semibold">
                                    Details
                                </button>
                            </div>

                            {/* Tax Compliance Section */}
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Tax Compliance</h3>
                                <p className="text-purple-100 leading-relaxed">
                                    Ensure your taxes are filed accurately and on time. Our tax compliance service helps
                                    you meet all IRS requirements and avoid unnecessary penalties.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row - Two Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
                        {/* Tax Consulting Card */}
                        <div className="bg-purple-900 rounded-3xl p-8 text-white">
                            {/* Bar Chart */}
                            <div className="bg-white rounded-2xl p-6 mb-6 flex justify-center items-center">
                                <Image
                                    src="/images/saving_perfomance.png"
                                    alt="Saving Performance"
                                    width={700}
                                    height={700}
                                    className="w-9/10 h-auto object-contain mx-auto"
                                    priority
                                />
                            </div>

                            <h3 className={`${urbanist.className} text-2xl md:text-4xl`}>Tax Consulting</h3>
                            <p className={`${roboto.className} text-purple-100 text-xl leading-relaxed`}>
                                Receive expert guidance tailored to your situation. Bolt Tax&apos;s consulting service
                                helps
                                you make smart tax decisions, amend returns, plan for the future, and maximize savings.
                            </p>
                        </div>

                        {/* Tax Withholdings Card */}
                        <div className="bg-purple-900 rounded-3xl p-8 text-white">
                            {/* Area Chart */}
                            <div className="bg-white rounded-2xl p-6 mb-6">
                                <div className="mb-4">
                                    <h4 className="text-lg font-bold text-gray-900 text-center">
                                        Income vs Withhold
                                    </h4>
                                    <p className="text-xs text-gray-500 text-center">Apr 30 - May 30</p>
                                </div>
                                <div className="relative h-32">
                                    {/* Simplified area chart representation */}
                                    <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                                        {/* Purple filled area - Income */}
                                        <path
                                            d="M 0,80 Q 50,40 100,50 T 200,45 T 300,60 T 400,50 L 400,120 L 0,120 Z"
                                            fill="#A78BFA"
                                            opacity="0.4"
                                        />
                                        <path
                                            d="M 0,80 Q 50,40 100,50 T 200,45 T 300,60 T 400,50"
                                            stroke="#7C3AED"
                                            strokeWidth="2"
                                            fill="none"
                                        />

                                        {/* Light purple area - Withholding */}
                                        <path
                                            d="M 0,90 Q 50,70 100,75 T 200,70 T 300,80 T 400,75 L 400,120 L 0,120 Z"
                                            fill="#C4B5FD"
                                            opacity="0.3"
                                        />
                                        <path
                                            d="M 0,90 Q 50,70 100,75 T 200,70 T 300,80 T 400,75"
                                            stroke="#A78BFA"
                                            strokeWidth="2"
                                            fill="none"
                                        />
                                    </svg>
                                </div>
                                <div className="flex items-center justify-center gap-6 mt-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-purple-700 rounded-full"></div>
                                        <span className="text-xs text-gray-600">Income</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                                        <span className="text-xs text-gray-600">Withholding</span>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-4">Tax Withholdings</h3>
                            <p className="text-purple-100 leading-relaxed">
                                Manage your income and deductions effectively. We help calculate the correct withholding
                                so you can avoid surprises and maintain smoother cash flow throughout the year.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-20 px-4 bg-purple-50">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Why Thousands of Students<br/>
                        <span className="text-purple-700">Choose Bolt Tax</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
                        Filing taxes doesn&apos;t have to be overwhelming. Here&apos;s what sets us apart and why
                        students trust us with their tax returns.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div>
                            <CheckCircle className="text-purple-700 mb-4" size={48}/>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">File Your Taxes with Confidence</h3>
                            <p className="text-gray-600">
                                Our intuitive platform makes tax filing simple and stress-free, with step-by-step
                                guidance tailored for students.
                            </p>
                        </div>
                        <div>
                            <Shield className="text-purple-700 mb-4" size={48}/>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">100% Accuracy & Refund Guarantee</h3>
                            <p className="text-gray-600">
                                We stand behind our work with a complete accuracy and maximum refund guarantee, so you
                                can file with peace of mind.
                            </p>
                        </div>
                        <div>
                            <Users className="text-purple-700 mb-4" size={48}/>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Simple & Intuitive Interface</h3>
                            <p className="text-gray-600">
                                No tax jargon or confusion. Our clean interface guides you through the process in plain
                                language you can understand.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-purple-900 text-white py-12 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Bolt Tax</h3>
                        <p className="text-purple-200">Making tax filing simple and accessible for students
                            everywhere.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-purple-200">
                            <li><a href="#" className="hover:text-white">Features</a></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                            <li><a href="#" className="hover:text-white">Security</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-purple-200">
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                            <li><a href="#" className="hover:text-white">Help Center</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-purple-200">
                            <li><a href="#" className="hover:text-white">About</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Legal</a></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-purple-800 text-center text-purple-200">
                    <p>&copy; 2025 Bolt Tax. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Hero;