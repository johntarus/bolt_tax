"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import { thiccboi, urbanist } from "@/app/fonts";

export default function WhyJoinEarlySection() {
    return (
        <section className="py-4 md:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-16">
                {/* Left Side - US Map */ }
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/images/us_map.svg"
                        alt="Dashboard Preview"
                        width={ 700 }
                        height={ 700 }
                        className="w-9/10 h-auto object-contain"
                        priority
                    />
                </div>

                {/* Right Side - Content */ }
                <div className="flex-1">
                    <h2 className={ `${ thiccboi.className } text-4xl 2xl:text-6xl font-bold text-[#5520B2] mb-2 leading-none` }>
                        Why Join Early<br/>Bolt Tax?
                    </h2>

                    <p className={ `${ urbanist.className } text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#5520B2] mb-6 leading-none` }>
                        Be part of the smarter way students handle taxes, get early access today and start enjoying the
                        benefits right away.
                    </p>

                    {/* Benefits Grid */ }
                    <div className={ `${ urbanist.className } grid grid-cols-1 md:grid-cols-2 gap-6` }>
                        <div className="flex items-center gap-3">
                            <div
                                className="w-8 h-8 rounded-full bg-[#CFB0FB] flex items-center justify-center flex-shrink-0">
                                <Check className="w-6 h-6 text-white"/>
                            </div>
                            <span className="text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#5520B2]">
        Tax Friendly<br/>Tools
    </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div
                                className="w-8 h-8 rounded-full bg-[#CFB0FB] flex items-center justify-center flex-shrink-0">
                                <Check className="w-6 h-6 text-white"/>
                            </div>
                            <span className="text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#5520B2]">
        Expert Guidance
    </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div
                                className="w-8 h-8 rounded-full bg-[#CFB0FB] flex items-center justify-center flex-shrink-0">
                                <Check className="w-6 h-6 text-white"/>
                            </div>
                            <span className="text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#5520B2]">
        Priority Access
    </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div
                                className="w-8 h-8 rounded-full bg-[#CFB0FB] flex items-center justify-center flex-shrink-0">
                                <Check className="w-6 h-6 text-white"/>
                            </div>
                            <span className="text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#5520B2]">
        Exclusive resources
    </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}