import React from 'react';
import Image from "next/image";
import { foundersGrotesk, roboto, thiccboi, urbanist } from "@/app/fonts";
import TaxChecklistSection from "@/components/home/tax-checklist-section";
import HowItWorksSection from "@/components/home/how-it-works";
import WhyJoinEarlySection from "@/components/home/why-join-early";
import TestimonialSection from "@/components/home/testimonials";
import FAQSection from "@/components/home/faq";
import Footer from "@/components/navigation/footer";

type Feature = {
    icon: string; // path to image file
    title: React.ReactNode;
    description: string;
};

const features: Feature[] = [
    {
        icon: "/icons/file.svg",
        title: (
            <>
                File Your Taxes with <br/> Ease
            </>
        ),
        description:
            "Bolt Tax makes tax filing simple for students, ensuring you claim every credit and refund you deserve.",
    },
    {
        icon: "/icons/refund.svg",
        title: (
            <>
                Maximize Your <br/> Refunds
            </>
        ),
        description:
            "Designed for students, Bolt Tax helps you keep more of your money while staying IRS-compliant.",
    },
    {
        icon: "/icons/secure.svg",
        title: (
            <>
                Secure & Guided <br/> Filing
            </>
        ),
        description:
            "With Bolt Tax, students get fast, secure, and stress-free tax filing tailored to their needs.",
    },
];

const Hero = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */ }
            <section className="py-24 px-4 bg-gradient-to-b from-purple-50 to-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className={ `${ foundersGrotesk.className } text-5xl md:text-6xl font-bold text-[#5520B2] mb-6` }>
                        Bolt Tax Gives Students<br/>
                        the Smartest Way to File Taxes
                    </h1>
                    <p className={ `${ urbanist.className } text-xl md:text-[1.75rem] text-[#5520B2] font-thin mb-8 mx-auto` }>
                        Designed for residents and non-residents in the US , Bolt Tax helps you keep more of your money
                        while staying IRS-compliant.</p>
                    <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
                        <button
                            className="px-7 pb-4 pt-2 bg-[#7120FF] text-white rounded-[10px] hover:bg-purple-800 flex items-center gap-2 text-lg font-semibold">
                            Request Demo
                            <Image
                                src="/icons/white_arrow.png"
                                alt="Arrow right"
                                width={ 20 }
                                height={ 20 }
                                className="object-contain ml-2"
                            />
                        </button>
                        <button
                            className="px-7 pb-4 pt-2 border-2 border-[#7120FF] text-[#7120FF] rounded-[10px] hover:bg-purple-50 text-lg font-semibold flex items-center gap-2">
                            Get Started
                            <Image
                                src="/icons/blue_arrow.png"
                                alt="Arrow right"
                                width={ 20 }
                                height={ 20 }
                                className="object-contain"
                            />
                        </button>
                    </div>
                </div>
            </section>

            {/* Dashboard Preview */ }
            <section className="py-16 px-4 bg-gray-50">
                <div className="flex justify-center">
                    <Image
                        src="/images/dashboard_preview.svg"
                        alt="Dashboard Preview"
                        width={ 700 }
                        height={ 700 }
                        className="w-9/10 h-auto object-contain"
                        priority
                    />
                </div>
            </section>


            {/* Features Section */ }
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-9/10 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left Column - Text Content */ }
                        <div>
                            <h2 className="text-5xl md:text-6xl font-bold text-[#5520B2] mb-6 leading-tight">
                                Comprehensive Tax Solutions<br/>
                                Tailored for You
                            </h2>
                            <p className={ `${ urbanist.className } text-xl md:text-3xl text-[#5520B2] mb-8 leading-relaxed` }>
                                Whether it&apos;s your first time filing or not, Bolt Tax makes it quick and easy to
                                stay on track.
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
                        <div className="bg-purple-900 rounded-3xl p-8 text-white">
                            {/* Bar Chart */ }
                            <div className="bg-white rounded-2xl p-6 mb-6 flex justify-center items-center">
                                <Image
                                    src="/images/complete_filings.svg"
                                    alt="Saving Performance"
                                    width={ 700 }
                                    height={ 700 }
                                    className="w-9/10 h-auto object-contain mx-auto"
                                    priority
                                />
                            </div>

                            <h3 className={ `${ urbanist.className } text-2xl md:text-4xl` }>Tax Compliance</h3>
                            <p className={ `${ roboto.className } text-purple-100 text-xl leading-relaxed` }>
                                Receive expert guidance tailored to your situation. Bolt Tax&apos;s consulting service
                                helps
                                you make smart tax decisions, amend returns, plan for the future, and maximize savings.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Row - Two Cards */ }
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
                        {/* Tax Consulting Card */ }
                        <div className="bg-purple-900 rounded-3xl p-8 text-white">
                            {/* Bar Chart */ }
                            <div className="bg-white rounded-2xl p-6 mb-6 flex justify-center items-center">
                                <Image
                                    src="/images/saving_perfomance.png"
                                    alt="Saving Performance"
                                    width={ 700 }
                                    height={ 700 }
                                    className="w-9/10 h-auto object-contain mx-auto"
                                    priority
                                />
                            </div>

                            <h3 className={ `${ urbanist.className } text-2xl md:text-4xl` }>Tax Consulting</h3>
                            <p className={ `${ roboto.className } text-purple-100 text-xl leading-relaxed` }>
                                Receive expert guidance tailored to your situation. Bolt Tax&apos;s consulting service
                                helps
                                you make smart tax decisions, amend returns, plan for the future, and maximize savings.
                            </p>
                        </div>

                        {/* Tax Withholdings Card */ }
                        <div className="bg-purple-900 rounded-3xl p-8 text-white">
                            {/* Bar Chart */ }
                            <div className="bg-white rounded-2xl p-6 mb-6 flex justify-center items-center">
                                <Image
                                    src="/images/income_withholding.svg"
                                    alt="Saving Performance"
                                    width={ 700 }
                                    height={ 700 }
                                    className="w-9/10 h-auto object-contain mx-auto"
                                    priority
                                />
                            </div>

                            <h3 className={ `${ urbanist.className } text-2xl md:text-4xl` }>Tax Withholdings</h3>
                            <p className={ `${ roboto.className } text-purple-100 text-xl leading-relaxed` }>
                                Receive expert guidance tailored to your situation. Bolt Tax&apos;s consulting service
                                helps
                                you make smart tax decisions, amend returns, plan for the future, and maximize savings.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */ }
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Heading */ }
                    <div className="text-center mb-4">
                        <h2 className={ `${ thiccboi.className } text-5xl font-bold text-[#5520B2] mb-6 leading-tight` }>
                            Why Thousands of Students<br/>
                            Choose Bolt Tax
                        </h2>
                        <p className={ `${ urbanist.className } text-xl text-[#5520B2] max-w-4xl mx-auto` }>
                            Filing taxes as a student can be overwhelming, but with Bolt Tax, you don&apos;t have to do
                            it
                            alone.
                        </p>
                    </div>

                    {/* Cards Grid */ }
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mt-16">
                        { features.map(({icon, title, description}, index) => (
                            <div
                                key={ index }
                                className="bg-white rounded-xl p-8 pb-12 border-1 border-[#AE8FDA] hover:shadow-lg transition-shadow"
                            >
                                <div
                                    className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                                    <Image
                                        src={ icon }
                                        alt={ typeof title === "string" ? title : "Feature icon" }
                                        width={ 48 }
                                        height={ 48 }
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className={ `${ urbanist.className } text-2xl md:text-3xl text-[#000000] mb-4 whitespace-pre-line` }>
                                    { title }
                                </h3>
                                <p className={ `${ urbanist.className } text-[#000000] text-xl leading-relaxed` }>
                                    { description }
                                </p>
                            </div>
                        )) }
                    </div>
                </div>
            </section>
            <div>
                <TaxChecklistSection/>
                <HowItWorksSection/>
                <WhyJoinEarlySection/>
                <TestimonialSection/>
                <FAQSection/>
                <Footer/>
            </div>
        </div>
    );
};

export default Hero;