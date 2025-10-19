"use client";

import { foundersGrotesk, thiccboi, urbanist } from "@/app/fonts";
import Image from "next/image";
import React from "react";

export default function TaxChecklistSection() {
    return (
        <section className="pt-10 md:pt-24 px-4 bg-gray-50">
            <div className="max-w-[90%] mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16">
                {/* Left Content */ }
                <div className="flex-1">
                    <h2 className={ `${ thiccboi.className } text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#5520B2] mb-6 xl:mb-16 lg:mb-12 leading-none` }>
                        Free Student Tax<br/>Filing Checklist
                    </h2>
                    <p className={ `${ urbanist.className } text-2xl lg:text-3xl xl:text-4xl text-[#5520B2] mx-auto mb-2` }>
                        Stay organized and never miss a deduction. Our step-by-step checklist is designed specifically
                        for students to make tax filing fast, easy, and stress-free.
                    </p>
                    <button
                        className={ `${ foundersGrotesk.className } inline-flex items-center gap-2 bg-[#6B2FEB] hover:bg-[#5A24CC] text-white text-xl font-medium px-6 lg:px-8 py-3 lg:py-4 rounded-xl transition-all` }>
                        Download now
                        <Image
                            src="/icons/white_arrow.png"
                            alt="Arrow right"
                            width={ 25 }
                            height={ 29 }
                            className="object-contain ml-2"
                        />
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
                        className="lg:absolute top-0 left-0 lg:-left-8 xl:-left-16 relative
  w-full lg:w-11/12 xl:w-7/12 max-w-sm xl:max-w-md z-10 mb-8 lg:mb-0">

                        {/* Shadow Wrapper */ }
                        <div
                            className="relative rounded-2xl shadow-[0_10px_35px_-10px_rgba(155,100,255,0.25),-10px_10px_35px_-10px_rgba(155,100,255,0.25)]
 bg-white border border-gray-100 overflow-hidden">
                            <div
                                className={ `${ thiccboi.className } bg-gradient-to-r from-[#9E57FF] to-[#7A3BFE] 
      text-white text-xl lg:text-2xl font-bold py-4 lg:py-5 xl:py-6 px-4 
      w-full text-center rounded-t-2xl` }>
                                TAX PREPARATION CHECKLIST
                            </div>

                            <div className="p-4 lg:p-5 xl:p-6 lg:pr-16 xl:pr-20">
                                <h3 className={ `${ thiccboi.className } text-xl lg:text-2xl font-bold text-[#231F20] mb-4 lg:mb-5 xl:mb-6` }>
                                    Personal information
                                </h3>

                                <ul className="space-y-4 lg:space-y-5 xl:space-y-6">
                                    <li className="flex items-start gap-2 lg:gap-3">
                                        <input
                                            type="checkbox"
                                            className="mt-0.5 w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 rounded border-gray-300
            text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                        />
                                        <span
                                            className={ `${ urbanist.className } font-medium text-lg lg:text-[3xl] text-[#231F20] leading-none` }>
            Social Security numbers and dates of birth for you
          </span>
                                    </li>

                                    <li className="flex items-start gap-2 lg:gap-3">
                                        <input
                                            type="checkbox"
                                            className="mt-0.5 w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 rounded border-gray-300
            text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                        />
                                        <span
                                            className={ `${ urbanist.className } font-medium text-lg lg:text-[3xl] text-[#231F20] leading-none` }>
            Copies of last year&apos;s tax return for you and your spouse
          </span>
                                    </li>

                                    <li className="flex items-start gap-2 lg:gap-3">
                                        <input
                                            type="checkbox"
                                            className="mt-0.5 w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 rounded border-gray-300
            text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                        />
                                        <span
                                            className={ `${ urbanist.className } font-medium text-lg lg:text-[3xl] text-[#231F20] leading-none` }>
            Bank account number and routing number
          </span>
                                    </li>

                                    <li className="flex items-start gap-2 lg:gap-3">
                                        <input
                                            type="checkbox"
                                            className="mt-0.5 w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 rounded border-gray-300
            text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                        />
                                        <span
                                            className={ `${ urbanist.className } font-medium text-lg lg:text-[3xl] text-[#231F20] leading-none` }>
            Bank account number and routing number
          </span>
                                    </li>
                                </ul>

                                <div className="flex items-center gap-2 mt-10 lg:mt-16 text-gray-600">
                                    <div
                                        className="w-4 h-4 lg:w-5 lg:h-5 bg-[#6B2FEB] rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-2 h-2 lg:w-3 lg:h-3 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span
                                        className={ `${ urbanist.className } font-normal text-lg lg:text-xl text-[#4C4D52]` }>
          And you&apos;re good to go!
        </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Back Card - Income Information */ }
                    <div
                        className="lg:absolute top-16 lg:top-20 xl:top-32 right-0 lg:right-0 xl:-right-0 2xl:rihght-8 bg-white rounded-2xl shadow-xl border border-gray-100 w-full lg:w-11/12 xl:w-7/12 max-w-sm xl:max-w-md overflow-hidden z-10">
                        <div
                            className={ `${ thiccboi.className } bg-gradient-to-r from-[#9E57FF] to-[#7A3BFE] text-white text-xl lg:text-2xl font-bold py-4 lg:py-5 xl:py-6 px-4 w-full text-center rounded-t-2xl` }>
                            TAX PREPARATION CHECKLIST
                        </div>

                        <div className="p-4 lg:p-5 xl:p-6 lg:pr-16 xl:pr-20">
                            <h3 className={ `${ thiccboi.className } text-xl lg:text-2xl font-bold text-[#231F20] mb-4 lg:mb-5 xl:mb-6` }>
                                Information about your income
                            </h3>
                            <ul className="space-y-4 lg:space-y-5 xl:space-y-6">
                                <li className="flex items-start gap-2 lg:gap-3">
                                    <input
                                        type="checkbox"
                                        className="mt-0.5 w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 rounded border-gray-300 text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                    />
                                    <span
                                        className={ `${ urbanist.className } font-medium text-lg lg:text-[3xl] text-[#231F20] leading-none` }>
                                        W-2 forms for you and your spouse
                                    </span>
                                </li>
                                <li className="flex items-start gap-2 lg:gap-3">
                                    <input
                                        type="checkbox"
                                        className="mt-0.5 w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 rounded border-gray-300 text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                    />
                                    <span
                                        className={ `${ urbanist.className } font-medium text-lg lg:text-[3xl] text-[#231F20] leading-none` }>
                                        1099-C forms for cancellation of debt
                                    </span>
                                </li>
                                <li className="flex items-start gap-2 lg:gap-3">
                                    <input
                                        type="checkbox"
                                        className="mt-0.5 w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 rounded border-gray-300 text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                    />
                                    <span
                                        className={ `${ urbanist.className } font-medium text-lg lg:text-[3xl] text-[#231F20] leading-none` }>
                                        1099-G forms for unemployment income, or state or local tax refunds
                                    </span>
                                </li>
                                <li className="flex items-start gap-2 lg:gap-3">
                                    <input
                                        type="checkbox"
                                        className="mt-0.5 w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 rounded border-gray-300 text-[#6B2FEB] focus:ring-[#6B2FEB]"
                                    />
                                    <span
                                        className={ `${ urbanist.className } font-medium text-lg lg:text-[3xl] text-[#231F20] leading-none` }>
                                        1099-R, Form 8606 for payments/distributions from IRAs
                                    </span>
                                </li>
                            </ul>

                            <div className="flex items-center gap-2 mt-10 lg:mt-16 text-gray-600">
                                <div
                                    className="w-4 h-4 lg:w-5 lg:h-5 bg-[#6B2FEB] rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-2 h-2 lg:w-3 lg:h-3 text-white" fill="currentColor"
                                         viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <span
                                    className={ `${ urbanist.className } font-normal text-lg lg:text-xl text-[#4C4D52]` }>And you&apos;re good to go!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}