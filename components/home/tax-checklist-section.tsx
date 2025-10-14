"use client";

import { ArrowRight } from "lucide-react";

export default function TaxChecklistSection() {
    return (
        <section className="pt-24 px-4 bg-gray-50">
            <div className="max-w-[90%] mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16">
                {/* Left Content */ }
                <div className="flex-1">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#5520B2] mb-6 xl:mb-16 lg:mb-12 leading-none">
                        Free Student Tax<br/>Filing Checklist
                    </h2>
                    <p className="text-lg lg:text-xl xl:text-2xl text-[#5520B2] mb-6 lg:mb-8 leading-none max-w-lg">
                        Stay organized and never miss a deduction. Our step-by-step checklist is designed specifically
                        for students to make tax filing fast, easy, and stress-free.
                    </p>
                    <button
                        className="inline-flex items-center gap-2 bg-[#6B2FEB] hover:bg-[#5A24CC] text-white text-base lg:text-lg font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-xl transition-all">
                        Download now
                        <ArrowRight className="w-5 h-5"/>
                    </button>
                </div>

                {/* Right Visual (Checklist Cards) */ }
                <div
                    className="relative flex-1 w-full
    min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] xl:min-h-[750px]
    left-0 xl:-left-16 2xl:left-0
    flex flex-col items-center justify-center">
                    {/* Front Card - Personal Information */ }
                    <div
                        className="absolute top-0 left-0 lg:-left-8 xl:-left-16 bg-white rounded-2xl shadow-xl border border-gray-100 w-full lg:w-11/12 xl:w-10/12 max-w-sm overflow-hidden z-10">
                        <div
                            className="bg-gradient-to-r from-[#9E57FF] to-[#7A3BFE] text-white text-sm lg:text-base xl:text-lg font-bold py-4 lg:py-5 xl:py-6 px-4 w-full text-center rounded-t-2xl">
                            TAX PREPARATION CHECKLIST
                        </div>

                        <div className="p-4 lg:p-5 xl:p-6 lg:pr-16 xl:pr-20">
                            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-5 xl:mb-6">
                                Personal information
                            </h3>
                            <ul className="space-y-4 lg:space-y-5 xl:space-y-6">
                                <li className="flex items-start gap-2 lg:gap-3">
                                    <input
                                        type="checkbox"
                                        className="mt-0.5 w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 rounded border-gray-300 text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                    />
                                    <span className="text-sm lg:text-base text-gray-800 leading-relaxed">
                                        Social Security numbers and dates of birth for you
                                    </span>
                                </li>
                                <li className="flex items-start gap-2 lg:gap-3">
                                    <input
                                        type="checkbox"
                                        className="mt-0.5 w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 rounded border-gray-300 text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                    />
                                    <span className="text-sm lg:text-base text-gray-800 leading-relaxed">
                                        Copies of last year's tax return for you and your spouse
                                    </span>
                                </li>
                                <li className="flex items-start gap-2 lg:gap-3">
                                    <input
                                        type="checkbox"
                                        className="mt-0.5 w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 rounded border-gray-300 text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                    />
                                    <span className="text-sm lg:text-base text-gray-800 leading-relaxed">
                                        Bank account number and routing number
                                    </span>
                                </li>
                                <li className="flex items-start gap-2 lg:gap-3">
                                    <input
                                        type="checkbox"
                                        className="mt-0.5 w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 rounded border-gray-300 text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                    />
                                    <span className="text-sm lg:text-base text-gray-800 leading-relaxed">
                                        Bank account number and routing number
                                    </span>
                                </li>
                            </ul>

                            <div className="flex items-center gap-2 mt-4 lg:mt-5 text-gray-600">
                                <div
                                    className="w-4 h-4 lg:w-5 lg:h-5 bg-[#6B2FEB] rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-2 h-2 lg:w-3 lg:h-3 text-white" fill="currentColor"
                                         viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <span className="text-xs lg:text-sm">And you're good to go!</span>
                            </div>
                        </div>
                    </div>

                    {/* Back Card - Income Information */ }
                    <div
                        className="absolute top-16 lg:top-20 xl:top-32 right-0 lg:right-0 xl:-right-16 2xl:right-16 bg-white rounded-2xl shadow-xl border border-gray-100 w-full lg:w-11/12 xl:w-10/12 max-w-sm overflow-hidden z-10">
                        <div
                            className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white text-sm lg:text-base xl:text-lg font-bold py-4 lg:py-5 xl:py-6 px-4 w-full text-center rounded-t-2xl">
                            TAX PREPARATION CHECKLIST
                        </div>

                        <div className="p-4 lg:p-5 xl:p-6 lg:pr-16 xl:pr-20">
                            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-5 xl:mb-6">
                                Information about your income
                            </h3>
                            <ul className="space-y-4 lg:space-y-5 xl:space-y-6">
                                <li className="flex items-start gap-2 lg:gap-3">
                                    <input
                                        type="checkbox"
                                        className="mt-0.5 w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 rounded border-gray-300 text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                    />
                                    <span className="text-sm lg:text-base text-gray-800 leading-relaxed">
                                        W-2 forms for you and your spouse
                                    </span>
                                </li>
                                <li className="flex items-start gap-2 lg:gap-3">
                                    <input
                                        type="checkbox"
                                        className="mt-0.5 w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 rounded border-gray-300 text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                    />
                                    <span className="text-sm lg:text-base text-gray-800 leading-relaxed">
                                        1099-C forms for cancellation of debt
                                    </span>
                                </li>
                                <li className="flex items-start gap-2 lg:gap-3">
                                    <input
                                        type="checkbox"
                                        className="mt-0.5 w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 rounded border-gray-300 text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                    />
                                    <span className="text-sm lg:text-base text-gray-800 leading-relaxed">
                                        1099-G forms for unemployment income, or state or local tax refunds
                                    </span>
                                </li>
                                <li className="flex items-start gap-2 lg:gap-3">
                                    <input
                                        type="checkbox"
                                        className="mt-0.5 w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 rounded border-gray-300 text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                    />
                                    <span className="text-sm lg:text-base text-gray-800 leading-relaxed">
                                        1099-R, Form 8606 for payments/distributions from IRAs
                                    </span>
                                </li>
                            </ul>

                            <div className="flex items-center gap-2 mt-4 lg:mt-5 text-gray-600">
                                <div
                                    className="w-4 h-4 lg:w-5 lg:h-5 bg-[#6B2FEB] rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-2 h-2 lg:w-3 lg:h-3 text-white" fill="currentColor"
                                         viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <span className="text-xs lg:text-sm">And you're good to go!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

