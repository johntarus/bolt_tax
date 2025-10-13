"use client";

import { ArrowRight } from "lucide-react";

export default function TaxChecklistSection() {
    return (
        <section className="pt-24 px-4 bg-gray-50">
            <div className="max-w-[90%] mx-auto flex flex-col lg:flex-row items-start justify-between gap-16">
                {/* Left Content */ }
                <div className="flex-1">
                    <h2 className="text-5xl lg:text-6xl font-bold text-[#5520B2] mb-12 leading-none">
                        Free Student Tax<br/>Filing Checklist
                    </h2>
                    <p className="text-xl lg:text-2xl text-[#5520B2] mb-8 leading-none max-w-lg">
                        Stay organized and never miss a deduction. Our step-by-step checklist is designed specifically
                        for students to make tax filing fast, easy, and stress-free.
                    </p>
                    <button
                        className="inline-flex items-center gap-2 bg-[#6B2FEB] hover:bg-[#5A24CC] text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all">
                        Download now
                        <ArrowRight className="w-5 h-5"/>
                    </button>
                </div>

                {/* Right Visual (Checklist Cards) */ }
                <div className="flex-1 -legft-24 relative min-h-[750px] w-full">
                    {/* Front Card - Personal Information */ }
                    <div
                        className="absolute top-0 -lefft-24 bg-white rounded-2xl shadow-xl border border-gray-100 w-10/12 max-w-sm overflow-hidden z-10">
                        <div
                            className="bg-gradient-to-r from-[#9E57FF] to-[#7A3BFE] text-white text-sm md:text-lg font-bold py-6 px-4 w-full text-center rounded-t-2xl">
                            TAX PREPARATION CHECKLIST
                        </div>

                        <div className="p-4 pr-20">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">
                                Personal information
                            </h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        className="mt-0.5 w-5 h-5 flex-shrink-0 rounded border-gray-300 text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                    />
                                    <span className="text-gray-800 leading-none">
                                        Social Security numbers and dates of birth for you
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        className="mt-0.5 w-5 h-5 flex-shrink-0 rounded border-gray-300 text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                    />
                                    <span className="text-gray-800 leading-none">
                                        Copies of last year's tax return for you and your spouse
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        className="mt-0.5 w-5 h-5 flex-shrink-0 rounded border-gray-300 text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                    />
                                    <span className="text-gray-800 leading-none">
                                        Bank account number and routing number
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        className="mt-0.5 w-5 h-5 flex-shrink-0 rounded border-gray-300 text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                    />
                                    <span className="text-gray-800 leading-none">
                                        Bank account number and routing number
                                    </span>
                                </li>
                            </ul>

                            <div className="flex items-center gap-2 mt-5 text-gray-600">
                                <div
                                    className="w-5 h-5 bg-[#6B2FEB] rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <span className="text-sm">And you're good to go!</span>
                            </div>
                        </div>
                    </div>

                    {/* Back Card - Income Information */ }
                    <div
                        className="absolute top-32 -right-16 2xl:right-0 bg-white rounded-2xl shadow-xl border border-gray-100 w-10/12 max-w-sm overflow-hidden z-10">
                        <div
                            className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white text-sm md:text-lg font-bold py-6 px-4 w-full text-center rounded-t-2xl">
                            TAX PREPARATION CHECKLIST
                        </div>

                        <div className="p-4 pr-20">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">
                                Information about your income
                            </h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        className="mt-0.5 w-5 h-5 flex-shrink-0 rounded border-gray-300 text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                    />
                                    <span className="text-gray-800 leading-none">
                                        W-2 forms for you and your spouse
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        className="mt-0.5 w-5 h-5 flex-shrink-0 rounded border-gray-300 text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                    />
                                    <span className="text-gray-800 leading-none">
                                        1099-C forms for cancellation of debt
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        className="mt-0.5 w-5 h-5 flex-shrink-0 rounded border-gray-300 text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                    />
                                    <span className="text-gray-800 leading-none">
                                        1099-G forms for unemployment income, or state or local tax refunds
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        className="mt-0.5 w-5 h-5 flex-shrink-0 rounded border-gray-300 text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                    />
                                    <span className="text-gray-800 leading-none">
                                        1099-R, Form 8606 for payments/distributions from IRAs
                                    </span>
                                </li>
                            </ul>

                            <div className="flex items-center gap-2 mt-5 text-gray-600">
                                <div
                                    className="w-5 h-5 bg-[#6B2FEB] rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <span className="text-sm">And you're good to go!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
