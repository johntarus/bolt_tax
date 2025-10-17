"use client";

import { Sparkles, Plus, Minus } from "lucide-react";
import React, { SetStateAction, useState } from "react";
import { foundersGrotesk, thiccboi, urbanist } from "@/app/fonts";
import Image from "next/image";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What is Bolt Tax",
            answer: "As a full-time college student working part-time, I was nervous about filing my taxes. Bolt Tax walked me through everything step by step. It explained terms I didn't understand and made sure I got the education"
        },
        {
            question: "What is Bolt Tax",
            answer: "Bolt Tax is a specialized tax filing platform designed specifically for students. We simplify the tax filing process and help you maximize your refund with student-specific deductions and credits."
        },
        {
            question: "What is Bolt Tax",
            answer: "Our platform guides you through every step of the tax filing process with easy-to-understand questions and explanations. No complicated tax jargon - just simple, straightforward guidance."
        },
        {
            question: "What is Bolt Tax",
            answer: "Yes! Bolt Tax is completely free for students. We believe every student should have access to quality tax filing services without hidden fees or surprise charges."
        },
        {
            question: "What is Bolt Tax",
            answer: "We support all common student tax situations including W-2 income, scholarships, grants, student loan interest, education credits, and more. Our platform is built specifically for student needs."
        }
    ];

    const toggleFAQ = (index: SetStateAction<number>) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-[90%] mx-auto">
                <div className="flex flex-col lg:flex-row gap-0">
                    {/* Left Side - Content */ }
                    <div
                        className="flex-1 lg:sticky lg:top-24 lg:self-start flex flex-col md:justify-center min-h-[30vh] md:min-h-[60vh]">
                        <h2 className={ `${ thiccboi.className } text-5xl md:text-6xl xl:text-7xl 2xl:text-[5rem] font-bold text-[#5520B2] mb-4 md:mb-8 leading-none` }>
                            Your questions,<br/>answered
                        </h2>

                        <p className={ `${ urbanist.className } text-xl xl:text-3xl text-[#7C3AED] mb-4 leading-none max-w-md` }>
                            Get quick answers to the most common <br/> questions about our platform
                        </p>

                        <button
                            className={ `${ foundersGrotesk.className } inline-flex items-center gap-3 bg-[#6B2FEB] hover:bg-[#5A24CC] text-white text-xl font-semibold px-8 py-4 rounded-xl transition-all w-fit` }>
                            Contact us
                            <Image
                                src="/icons/white_arrow.png"
                                alt="Arrow right"
                                width={ 25 }
                                height={ 29 }
                                className="object-contain ml-2"
                            />
                        </button>
                    </div>

                    {/* Right Side - FAQ Accordion */ }
                    <div className="flex-1 relative shadow-[-2px_2px_2px_#DBC7FF] rounded-2xl">
                        <div className="space-y-4 pl-8 pb-12">
                            { faqs.map((faq, index) => (
                                <div
                                    key={ index }
                                    className={ `rounded-2xl transition-all ${
                                        openIndex === index
                                            ? 'bg-gradient-to-r from-[#ffffff] to-[#dcc8ff]'
                                            : 'bg-gradient-to-r from-[#ffffff] to-[#dcc8ff]'
                                    }` }
                                >
                                    <button
                                        onClick={ () => toggleFAQ(index) }
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <div className="flex items-center gap-4 flex-1">
                                            <Sparkles className="w-6 h-6 text-[#7C3AED] fill-current flex-shrink-0"/>
                                            <h3 className={ `${ thiccboi.className } text-xl md:text-2xl font-semibold text-[#7C3AED]` }>
                                                { faq.question }
                                            </h3>
                                        </div>

                                        <div className="ml-4 flex-shrink-0">
                                            <div
                                                className="w-10 h-10 rounded-lg bg-[#7C3AED] flex items-center justify-center">
                                                { openIndex === index ? (
                                                    <Minus className="w-5 h-5 text-white"/>
                                                ) : (
                                                    <Plus className="w-5 h-5 text-white"/>
                                                ) }
                                            </div>
                                        </div>
                                    </button>

                                    <div
                                        className={ `overflow-hidden transition-all duration-300 ${
                                            openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }` }
                                    >
                                        <div className={ `${ urbanist.className } px-6 pb-6 pt-0` }>
                                            <p className="text-xl xl:text-2xl text-gray-900 leading-snug">{ faq.answer }</p>
                                        </div>
                                    </div>
                                </div>
                            )) }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}