import React from 'react';
import Image from "next/image";
import { foundersGrotesk, roboto, thiccboi, urbanist } from "@/app/fonts";
import TaxChecklistSection from "@/components/home/tax-checklist-section";
import HowItWorksSection from "@/components/home/how-it-works";
import WhyJoinEarlySection from "@/components/home/why-join-early";
import TestimonialSection from "@/components/home/testimonials";
import FAQSection from "@/components/home/faq";
import Footer from "@/components/navigation/footer";
import DashboardPreview from "@/components/home/dashboard-preview";
import FeaturesSection from "@/components/home/features";
import WhyChooseSection from "@/components/home/why-choose";

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
                <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto text-center">
                    <h1 className={ `${ foundersGrotesk.className } text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-[#5520B2] mb-6` }>
                        Bolt Tax Gives Students<br/>
                        the Smartest Way to File Taxes
                    </h1>
                    <p className={ `${ urbanist.className } text-xl md:text-[1.75rem] xl:text-4xl 2xl:text-5xl text-[#5520B2] font-thin mb-8 mx-auto` }>
                        Designed for residents and non-residents in the US , Bolt Tax helps you keep more of your money
                        while staying IRS-compliant.</p>
                    <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
                        <button
                            className="px-7 pb-5 pt-3 bg-[#7120FF] text-white rounded-[10px] hover:bg-purple-800 flex items-center gap-2 text-lg font-semibold">
                            Request Demo
                            <Image
                                src="/icons/white_arrow.png"
                                alt="Arrow right"
                                width={ 25 }
                                height={ 29 }
                                className="object-contain ml-2"
                            />
                        </button>
                        <button
                            className="px-7 pb-5 pt-3 border-2 border-[#7120FF] text-[#7120FF] rounded-[10px] hover:bg-purple-50 text-lg font-semibold flex items-center gap-2">
                            Get Started
                            <Image
                                src="/icons/blue_arrow.png"
                                alt="Arrow right"
                                width={ 25 }
                                height={ 29 }
                                className="object-contain"
                            />
                        </button>
                    </div>
                </div>
            </section>

            <DashboardPreview/>
            <FeaturesSection/>
            <WhyChooseSection/>
            <TaxChecklistSection/>
            <div>
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