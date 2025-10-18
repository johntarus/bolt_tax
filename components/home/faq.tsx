"use client";

import { Sparkles, Plus, Minus } from "lucide-react";
import React, { SetStateAction, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { foundersGrotesk, thiccboi, urbanist } from "@/app/fonts";
import Image from "next/image";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What is Bolt Tax?",
            answer:
                "As a full-time college student working part-time, I was nervous about filing my taxes. Bolt Tax walked me through everything step by step. It explained terms I didn't understand and made sure I got the education credits I deserved.",
        },
        {
            question: "How does Bolt Tax help students?",
            answer:
                "Bolt Tax is a specialized tax filing platform designed specifically for students. We simplify the tax filing process and help you maximize your refund with student-specific deductions and credits.",
        },
        {
            question: "Is Bolt Tax easy to use?",
            answer:
                "Our platform guides you through every step of the tax filing process with easy-to-understand questions and explanations. No complicated tax jargon — just simple, straightforward guidance.",
        },
        {
            question: "Is Bolt Tax free?",
            answer:
                "Yes! Bolt Tax is completely free for students. We believe every student should have access to quality tax filing services without hidden fees or surprise charges.",
        },
        {
            question: "What types of income can I file with Bolt Tax?",
            answer:
                "We support all common student tax situations including W-2 income, scholarships, grants, student loan interest, education credits, and more. Our platform is built specifically for student needs.",
        },
    ];

    const toggleFAQ = (index: SetStateAction<number>) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-20 px-4 bg-white overflow-hidden">
            <motion.div
                className="max-w-[90%] mx-auto"
                initial={ {opacity: 0, y: 40} }
                whileInView={ {opacity: 1, y: 0} }
                transition={ {duration: 0.6, ease: "easeOut"} }
                viewport={ {once: true} }
            >
                <div className="flex flex-col lg:flex-row gap-0">
                    {/* Left Side - Content */ }
                    <motion.div
                        className="flex-1 lg:sticky lg:top-24 lg:self-start flex flex-col md:justify-center min-h-[30vh] md:min-h-[60vh]"
                        initial={ {opacity: 0, x: -40} }
                        whileInView={ {opacity: 1, x: 0} }
                        transition={ {duration: 0.6, ease: "easeOut"} }
                        viewport={ {once: true} }
                    >
                        <h2
                            className={ `${ thiccboi.className } text-5xl md:text-6xl xl:text-7xl 2xl:text-[5rem] font-bold text-[#5520B2] mb-4 md:mb-8 leading-none` }
                        >
                            Your questions,
                            <br/>
                            answered
                        </h2>

                        <p
                            className={ `${ urbanist.className } text-xl xl:text-3xl text-[#7C3AED] mb-4 leading-none max-w-md` }
                        >
                            Get quick answers to the most common <br/> questions about our platform.
                        </p>

                        <motion.button
                            whileHover={ {scale: 1.05} }
                            whileTap={ {scale: 0.97} }
                            className={ `${ foundersGrotesk.className } inline-flex items-center gap-3 bg-[#6B2FEB] hover:bg-[#5A24CC] text-white text-xl font-semibold px-8 py-4 rounded-xl transition-all w-fit shadow-lg` }
                        >
                            Contact us
                            <Image
                                src="/icons/white_arrow.png"
                                alt="Arrow right"
                                width={ 25 }
                                height={ 29 }
                                className="object-contain ml-2"
                            />
                        </motion.button>
                    </motion.div>

                    {/* Right Side - FAQ Accordion */ }
                    <motion.div
                        className="flex-1 relative shadow-[-2px_2px_2px_#DBC7FF] rounded-2xl mt-10 lg:mt-0"
                        initial={ {opacity: 0, x: 40} }
                        whileInView={ {opacity: 1, x: 0} }
                        transition={ {duration: 0.6, ease: "easeOut"} }
                        viewport={ {once: true} }
                    >
                        <div className="space-y-4 pl-8 pb-12">
                            { faqs.map((faq, index) => (
                                <motion.div
                                    key={ index }
                                    initial={ {opacity: 0, y: 20} }
                                    whileInView={ {opacity: 1, y: 0} }
                                    transition={ {delay: index * 0.1, duration: 0.4} }
                                    viewport={ {once: true} }
                                    className={ `rounded-2xl bg-gradient-to-r from-[#ffffff] to-[#dcc8ff] transition-all overflow-hidden` }
                                >
                                    <button
                                        onClick={ () => toggleFAQ(index) }
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <div className="flex items-center gap-4 flex-1">
                                            <Sparkles className="w-6 h-6 text-[#7C3AED] flex-shrink-0"/>
                                            <h3
                                                className={ `${ thiccboi.className } text-xl md:text-2xl font-semibold text-[#7C3AED]` }
                                            >
                                                { faq.question }
                                            </h3>
                                        </div>

                                        <div className="ml-4 flex-shrink-0">
                                            <motion.div
                                                animate={ {
                                                    rotate: openIndex === index ? 180 : 0,
                                                } }
                                                transition={ {duration: 0.3} }
                                                className="w-10 h-10 rounded-lg bg-[#7C3AED] flex items-center justify-center"
                                            >
                                                { openIndex === index ? (
                                                    <Minus className="w-5 h-5 text-white"/>
                                                ) : (
                                                    <Plus className="w-5 h-5 text-white"/>
                                                ) }
                                            </motion.div>
                                        </div>
                                    </button>

                                    <AnimatePresence mode="wait">
                                        { openIndex === index && (
                                            <motion.div
                                                key={ `answer-${ index }` }
                                                initial={ {opacity: 0, x: 50, height: 0} }
                                                animate={ {opacity: 1, x: 0, height: "auto"} }
                                                exit={ {opacity: 0, x: 50, height: 0} }
                                                transition={ {duration: 0.5, ease: "easeInOut"} }
                                            >
                                                <div className={ `${ urbanist.className } px-6 pb-6 pt-0` }>
                                                    <motion.p
                                                        initial={ {opacity: 0, x: 30} }
                                                        animate={ {opacity: 1, x: 0} }
                                                        transition={ {duration: 0.4, delay: 0.1} }
                                                        className="text-xl xl:text-2xl text-gray-900 leading-snug"
                                                    >
                                                        { faq.answer }
                                                    </motion.p>
                                                </div>
                                            </motion.div>
                                        ) }
                                    </AnimatePresence>

                                </motion.div>
                            )) }
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
