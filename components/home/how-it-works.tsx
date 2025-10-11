"use client";

import { User, FileText } from "lucide-react";

export default function HowItWorksSection() {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */ }
                <h2 className="text-5xl md:text-6xl font-bold text-center text-[#5520B2] mb-16">
                    How It Works
                </h2>

                {/* Three Cards Grid */ }
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: Sign Up */ }
                    <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col">
                        <h3 className="text-2xl font-semibold text-[#5C34A2] mb-4">
                            Sign Up
                        </h3>
                        <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                            Create Your Free<br/>Account
                        </h4>
                        <p className="text-gray-600 mb-8 flex-grow">
                            Start by signing up in just a few minutes. No hidden fees, no complicated forms.
                        </p>

                        <div className="space-y-3">
                            <button
                                className="w-full bg-[#6B2FEB] hover:bg-[#5A24CC] text-white font-semibold py-4 px-6 rounded-xl transition-all">
                                Continue with email
                            </button>
                            <p className="text-center text-sm text-gray-500">or</p>
                            <button
                                className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-4 px-6 rounded-xl border border-gray-300 transition-all flex items-center justify-center gap-2">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
                                        fill="#4285F4"/>
                                    <path
                                        d="M9.003 18c2.43 0 4.467-.806 5.956-2.183l-2.909-2.259c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9.003 18z"
                                        fill="#34A853"/>
                                    <path
                                        d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                                        fill="#FBBC05"/>
                                    <path
                                        d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.426 0 9.003 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29c.708-2.127 2.692-3.71 5.039-3.71z"
                                        fill="#EA4335"/>
                                </svg>
                                Continue with Google
                            </button>
                        </div>
                    </div>

                    {/* Card 2: Enter Your Details */ }
                    <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col">
                        <h3 className="text-2xl font-semibold text-[#5C34A2] mb-4">
                            Enter Your Details
                        </h3>
                        <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                            Answer Simple<br/>Questions
                        </h4>
                        <p className="text-gray-600 mb-8 flex-grow">
                            Fill in your related tax info with our guided form. We keep it jargon-free so you know
                            exactly what to do.
                        </p>

                        <div className="space-y-6">
                            {/* Progress Circle 1 */ }
                            <div className="flex items-center gap-4">
                                <div className="relative w-16 h-16">
                                    <svg className="w-16 h-16 transform -rotate-90">
                                        <circle
                                            cx="32"
                                            cy="32"
                                            r="28"
                                            stroke="#E5E7EB"
                                            strokeWidth="6"
                                            fill="none"
                                        />
                                        <circle
                                            cx="32"
                                            cy="32"
                                            r="28"
                                            stroke="#8B5CF6"
                                            strokeWidth="6"
                                            fill="none"
                                            strokeDasharray={ `${ 2 * Math.PI * 28 }` }
                                            strokeDashoffset={ `${ 2 * Math.PI * 28 * (1 - 0.54) }` }
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <User className="w-6 h-6 text-[#8B5CF6]"/>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-gray-900">54%</p>
                                    <p className="text-sm text-gray-500">Personal Information</p>
                                </div>
                            </div>

                            {/* Progress Circle 2 */ }
                            <div className="flex items-center gap-4">
                                <div className="relative w-16 h-16">
                                    <svg className="w-16 h-16 transform -rotate-90">
                                        <circle
                                            cx="32"
                                            cy="32"
                                            r="28"
                                            stroke="#E5E7EB"
                                            strokeWidth="6"
                                            fill="none"
                                        />
                                        <circle
                                            cx="32"
                                            cy="32"
                                            r="28"
                                            stroke="#FB923C"
                                            strokeWidth="6"
                                            fill="none"
                                            strokeDasharray={ `${ 2 * Math.PI * 28 }` }
                                            strokeDashoffset={ `${ 2 * Math.PI * 28 * (1 - 0.32) }` }
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <FileText className="w-6 h-6 text-[#FB923C]"/>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-gray-900">32%</p>
                                    <p className="text-sm text-gray-500">Other Required Details</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Get Your Refund */ }
                    <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col">
                        <h3 className="text-2xl font-semibold text-[#5C34A2] mb-4">
                            Get Your Refund
                        </h3>
                        <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                            Submit & Maximize<br/>Your Refund
                        </h4>
                        <p className="text-gray-600 mb-8 flex-grow">
                            File securely and get the maximum refund possible — tailored for your needs.
                        </p>

                        {/* Bar Chart */ }
                        <div className="flex items-end justify-between h-48 gap-2">
                            <div className="flex-1 bg-[#8B5CF6] rounded-t-lg" style={ {height: '70%'} }></div>
                            <div className="flex-1 bg-[#A78BFA] rounded-t-lg" style={ {height: '85%'} }></div>
                            <div className="flex-1 bg-[#8B5CF6] rounded-t-lg" style={ {height: '60%'} }></div>
                            <div className="flex-1 bg-[#A78BFA] rounded-t-lg" style={ {height: '75%'} }></div>
                            <div className="flex-1 bg-[#8B5CF6] rounded-t-lg" style={ {height: '50%'} }></div>
                            <div className="flex-1 bg-[#A78BFA] rounded-t-lg" style={ {height: '90%'} }></div>
                            <div className="flex-1 bg-[#8B5CF6] rounded-t-lg" style={ {height: '65%'} }></div>
                            <div className="flex-1 bg-[#A78BFA] rounded-t-lg" style={ {height: '55%'} }></div>
                            <div className="flex-1 bg-[#8B5CF6] rounded-t-lg" style={ {height: '80%'} }></div>
                            <div className="flex-1 bg-[#A78BFA] rounded-t-lg" style={ {height: '100%'} }></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}