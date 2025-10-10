"use client";

import { ArrowRight } from "lucide-react";
import { thiccboi, urbanist } from "@/app/fonts";

export default function TaxChecklistSection() {
    return (
        <section className="py-24 mb-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
                {/* Left Content */ }
                <div className="flex-1 text-center lg:text-left">
                    <h2
                        className={ `${ thiccboi.className } text-5xl font-bold text-[#5520B2] mb-6 leading-tight` }
                    >
                        Free Student Tax <br/> Filing Checklist
                    </h2>
                    <p
                        className={ `${ urbanist.className } text-lg text-[#5520B2] mb-2 max-w-lg mx-auto lg:mx-0` }
                    >
                        Stay organized and never miss a deduction. Our step-by-step checklist
                        is designed specifically for students to make tax filing fast, easy,
                        and stress-free.
                    </p>
                    <button
                        className="inline-flex items-center gap-2 bg-[#6B2FEB] hover:bg-[#5A24CC] text-white text-lg font-semibold px-6 py-3 rounded-xl transition-all">
                        Download now
                        <ArrowRight className="w-5 h-5"/>
                    </button>
                </div>

                {/* Right Visual (Checklist Cards) */ }
                <div className="flex-1 relative flex justify-center items-center">
                    {/* Front Card */ }
                    <div
                        className="absolute bg-white rounded-2xl shadow-lg border border-gray-100 w-80 pt-0 overflow-hidden">
                        {/* Header now full width */ }
                        <div
                            className="bg-gradient-to-r from-[#9E57FF] to-[#7A3BFE] text-white text-sm md:text-lg font-bold py-6 px-4 w-full text-center rounded-t-2xl">
                            TAX PREPARATION CHECKLIST
                        </div>

                        <div className="p-6">
                            <h3 className="font-semibold mb-4 text-[#231F20]">
                                Personal information
                            </h3>
                            <ul className="space-y-6 text-gray-800 text-sm">
                                <li className="flex items-start gap-2">
                                    <input type="checkbox" className="mt-1"/>
                                    <span>
          Social Security numbers and dates of birth for you
        </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <input type="checkbox" className="mt-1"/>
                                    <span>Copies of last year&apos;s tax return for you and your spouse</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <input type="checkbox" className="mt-1"/>
                                    <span>Bank account number and routing number</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <input type="checkbox" className="mt-1"/>
                                    <span>Bank account number and routing number</span>
                                </li>
                            </ul>

                            <p className="mt-4 text-xs text-gray-500 flex items-center gap-2">
                                <span className="w-3 h-3 bg-purple-600 rounded-full inline-block"/>
                                And you&apos;re good to go!
                            </p>
                        </div>
                    </div>

                    {/* Back Card */ }
                    <div
                        className="absolute left-3/5 bg-white rounded-2xl shadow-lg border border-gray-100 w-80 pt-0 mt-30 overflow-hidden translate-x-10 translate-y-10 opacity-90">
                        {/* Header now full width */ }
                        <div
                            className="bg-gradient-to-r from-[#9E57FF] to-[#7A3BFE] text-white text-sm md:text-lg font-bold py-6 px-4 w-full text-center rounded-t-2xl">
                            TAX PREPARATION CHECKLIST
                        </div>

                        <div className="p-6">
                            <h3 className="font-semibold mb-4 text-[#231F20]">
                                Information about your income
                            </h3>
                            <ul className="space-y-6 text-gray-800 text-sm">
                                <li className="flex items-start gap-2">
                                    <input type="checkbox" className="mt-1"/>
                                    <span>W-2 forms for you and your spouse</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <input type="checkbox" className="mt-1"/>
                                    <span>1099-C forms for cancellation of debt</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <input type="checkbox" className="mt-1"/>
                                    <span>
                                        1099-G forms for unemployment income, or state/local tax
                                        refunds
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <input type="checkbox" className="mt-1"/>
                                    <span>
                                        1099-R, Form 8606 for payments/distributions from IRAs
                                    </span>
                                </li>
                            </ul>

                            <p className="mt-4 text-xs text-gray-500 flex items-center gap-2">
                                <span className="w-3 h-3 bg-purple-600 rounded-full inline-block"/>
                                And you&apos;re good to go!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}