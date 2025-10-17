"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

export default function TestimonialSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            name: "Emily R.,",
            role: "Undergraduate Student – New York, NY",
            quote: "As a full-time college student working part-time, I was nervous about filing my taxes. Bolt Tax walked me through everything step by step. It explained terms I didn't understand and made sure I got the education credits I qualified for. I actually received a bigger refund than I expected.",
        },
        {
            name: "James K.,",
            role: "Graduate Student – Boston, MA",
            quote: "Filing taxes as a grad student with multiple income sources seemed overwhelming. Bolt Tax made it incredibly simple and helped me maximize my deductions. The platform is intuitive and the support team was always available when I had questions.",
        },
        {
            name: "Sarah M.,",
            role: "International Student – Chicago, IL",
            quote: "As an international student, I had no idea where to start with US taxes. Bolt Tax's guided process made everything clear and ensured I filed correctly. The peace of mind was worth everything!",
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="relative min-h-screen py-16 px-4 bg-gray-50 overflow-hidden flex items-center">
            {/* Hollow Purple Circle */ }
            <div
                className="absolute top-1/2 -left-100 transform -translate-y-1/2 -translate-x-[35%] pointer-events-none hidden md:block"
            >
                {/* Outer purple oval */ }
                <div
                    className="w-[60vw] h-[100vh] min-w-[850px] min-h-[850px] bg-[#6B46C1] rounded-full scale-y-125"
                />
                {/* Inner white oval to create the hollow effect */ }
                <div
                    className="absolute top-1/2 left-1/2 w-[45vw] xtral2:w-90vw] xtral3:w-[50vw] xtral:w-[35vw] h-[70vh] min-w-[500px] min-h-[500px] bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-y-125"
                />
            </div>


            {/* Circular Purple Decorative Shapes - Top Right */ }
            <div className="absolute right-32 top-40 w-48 h-48 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute right-48 top-52 w-40 h-40 bg-purple-300 rounded-full opacity-15 blur-2xl"></div>

            {/* Main Content */ }
            <div className="max-w-[90%] mx-auto relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-0">
                    {/* Left Side - Image */ }
                    <div className="w-full lg:w-2/5 flex">
                        <div className="relative w-full">
                            <img
                                src="/images/students.svg"
                                alt="Students Collaborating"
                                className="w-full h-[500px] lg:h-[900px] rounded-3xl object-cover shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Right Side - Testimonials */ }
                    <div className="w-full lg:w-3/5 relative">
                        <div className="relative lg:pl-8">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#7C3AED] mb-8 lg:mb-12 leading-tight">
                                What our client say<br/>about us?
                            </h2>

                            <div
                                className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:ml-[-8%] xl:ml-[-12%]">
                                <div className="mb-4 lg:mb-6">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                                        { testimonials[currentSlide].name }
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                                        { testimonials[currentSlide].role }
                                    </p>
                                </div>

                                <blockquote className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed">
                                    "{ testimonials[currentSlide].quote }"
                                </blockquote>
                            </div>

                            {/* Navigation Arrows */ }
                            <div className="flex gap-4 mt-6 lg:mt-8 justify-end">
                                <button
                                    onClick={ prevSlide }
                                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gray-100 text-gray-400 hover:bg-[#7C3AED] hover:text-white transition-all flex items-center justify-center"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6"/>
                                </button>
                                <button
                                    onClick={ nextSlide }
                                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#7C3AED] text-white hover:bg-[#6D28D9] transition-all flex items-center justify-center"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6"/>
                                </button>
                            </div>

                            {/* Dots Indicator */ }
                            <div className="flex gap-2 mt-4 justify-end">
                                { testimonials.map((_, index) => (
                                    <button
                                        key={ index }
                                        onClick={ () => setCurrentSlide(index) }
                                        className={ `h-2 rounded-full transition-all ${
                                            index === currentSlide
                                                ? "bg-[#7C3AED] w-6 lg:w-8"
                                                : "bg-gray-300 w-2"
                                        }` }
                                        aria-label={ `Go to testimonial ${ index + 1 }` }
                                    />
                                )) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}