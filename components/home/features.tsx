"use client";

import Image from "next/image";
import { urbanist, roboto } from "@/app/fonts";

export default function FeaturesSection() {
    return (
        <section className="py-10 px-4 bg-gray-50">
            <div className="max-w-[100%] md:max-w-[90%] mx-auto">
                {/* Top Row */ }
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Text Content */ }
                    <div>
                        <h2 className={ `${ urbanist.className } text-4xl md:text-6xl xl:text-7xl font-bold text-[#5520B2] mb-6 leading-none` }>
                            Comprehensive Tax Solutions
                            <br/>
                            Tailored for You
                        </h2>
                        <p
                            className={ `${ urbanist.className } text-2xl md:text-3xl xl:text-4xl text-[#5520B2] mb-8 leading-none` }
                        >
                            Whether it&apos;s your first time filing or not, Bolt Tax makes it
                            quick and easy to stay on track.
                        </p>
                        <button
                            className="px-7 pb-4 pt-2 bg-[#7120FF] text-white rounded-[10px] hover:bg-purple-800 flex items-center gap-2 text-lg font-semibold">
                            Get Started
                            <Image
                                src="/icons/white_arrow.png"
                                alt="Arrow right"
                                width={ 20 }
                                height={ 20 }
                                className="object-contain"
                            />
                        </button>
                    </div>

                    {/* Right Column - Card */ }
                    <div className="bg-gradient-to-br from-[#3D1B6B] to-[#5520B2] rounded-3xl p-8 text-white">
                        <div className="bg-white rounded-2xl p-6 mb-6 flex justify-center items-center">
                            <Image
                                src="/images/complete_filings.svg"
                                alt="Tax Compliance"
                                width={ 700 }
                                height={ 700 }
                                className="w-9/10 h-auto object-contain mx-auto"
                                priority
                            />
                        </div>

                        <h3 className={ `${ urbanist.className } text-2xl md:text-4xl` }>
                            Tax Compliance
                        </h3>
                        <p
                            className={ `${ roboto.className } text-purple-100 text-xl leading-relaxed` }
                        >
                            Receive expert guidance tailored to your situation. Bolt
                            Tax&apos;s consulting service helps you make smart tax decisions,
                            amend returns, plan for the future, and maximize savings.
                        </p>
                    </div>
                </div>

                {/* Bottom Row */ }
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
                    {/* Tax Consulting Card */ }
                    <div className="bg-gradient-to-br from-[#3D1B6B] to-[#5520B2] rounded-3xl p-8 text-white">
                        <div className="bg-white rounded-2xl p-6 mb-6 flex justify-center items-center">
                            <Image
                                src="/images/saving_perfomance.png"
                                alt="Tax Consulting"
                                width={ 700 }
                                height={ 700 }
                                className="w-9/10 h-auto object-contain mx-auto"
                                priority
                            />
                        </div>

                        <h3 className={ `${ urbanist.className } text-2xl md:text-4xl` }>
                            Tax Consulting
                        </h3>
                        <p
                            className={ `${ roboto.className } text-purple-100 text-xl leading-relaxed` }
                        >
                            Receive expert guidance tailored to your situation. Bolt
                            Tax&apos;s consulting service helps you make smart tax decisions,
                            amend returns, plan for the future, and maximize savings.
                        </p>
                    </div>

                    {/* Tax Withholdings Card */ }
                    <div className="bg-gradient-to-br from-[#3D1B6B] to-[#5520B2] rounded-3xl p-8 text-white">
                        <div className="bg-white rounded-2xl p-6 mb-6 flex justify-center items-center">
                            <Image
                                src="/images/income_withholding.svg"
                                alt="Tax Withholdings"
                                width={ 700 }
                                height={ 700 }
                                className="w-9/10 h-auto object-contain mx-auto"
                                priority
                            />
                        </div>

                        <h3 className={ `${ urbanist.className } text-2xl md:text-4xl` }>
                            Tax Withholdings
                        </h3>
                        <p
                            className={ `${ roboto.className } text-purple-100 text-xl leading-relaxed` }
                        >
                            Receive expert guidance tailored to your situation. Bolt
                            Tax&apos;s consulting service helps you make smart tax decisions,
                            amend returns, plan for the future, and maximize savings.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
