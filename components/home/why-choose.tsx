"use client";

import Image from "next/image";
import { thiccboi, urbanist } from "@/app/fonts"; // adjust import path if needed

interface Feature {
    icon: string;
    title: React.ReactNode;
    description: string;
}

const features: Feature[] = [
    {
        icon: "/icons/file.svg",
        title: (
            <>
                File Your Taxes with <span className="hidden lg:inline"><br/></span> Ease
            </>
        ),
        description:
            "Bolt Tax makes tax filing simple for students, ensuring you claim every credit and refund you deserve.",
    },
    {
        icon: "/icons/refund.svg",
        title: (
            <>
                Maximize Your <span className="hidden lg:inline"><br/></span> Refunds
            </>
        ),
        description:
            "Designed for students, Bolt Tax helps you keep more of your money while staying IRS-compliant.",
    },
    {
        icon: "/icons/secure.svg",
        title: (
            <>
                Secure & Guided <span className="hidden lg:inline"><br/></span> Filing
            </>
        ),
        description:
            "With Bolt Tax, students get fast, secure, and stress-free tax filing tailored to their needs.",
    },
];

export default function WhyChooseSection() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-[90%] mx-auto">
                {/* Heading */ }
                <div className="text-center mb-4">
                    <h2
                        className={ `${ thiccboi.className } text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#5520B2] mb-6 leading-none` }
                    >
                        Why Thousands of Students
                        <br/>
                        Choose Bolt Tax
                    </h2>
                    <p
                        className={ `${ urbanist.className } text-xl lg:text-2xl xl:text-2xl text-[#5520B2] mx-auto` }
                    >
                        Filing taxes as a student can be overwhelming, but with Bolt Tax, you
                        don&apos;t have to do it alone.
                    </p>
                </div>

                {/* Cards Grid */ }
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mt-16">
                    { features.map(({icon, title, description}, index) => (
                        <div
                            key={ index }
                            className="bg-white rounded-xl p-8 pb-12 border border-[#AE8FDA] hover:shadow-lg transition-shadow"
                        >
                            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                                <Image
                                    src={ icon }
                                    alt={ typeof title === "string" ? title : "Feature icon" }
                                    width={ 48 }
                                    height={ 48 }
                                    className="object-contain"
                                />
                            </div>

                            <h3
                                className={ `${ urbanist.className } text-2xl md:text-3xl text-[#000000] mb-4` }
                            >
                                { title }
                            </h3>

                            <p
                                className={ `${ urbanist.className } text-[#000000] text-xl leading-relaxed` }
                            >
                                { description }
                            </p>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    );
}
