"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

export default function TestimonialSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            name: "Emily R.,",
            role: "Undergraduate Student – New York, NY",
            quote: "As a full-time college student working part-time, I was nervous about filing my taxes. Bolt Tax walked me through everything step by step. It explained terms I didn't understand and made sure I got the education credits I qualified for. I actually received a bigger refund than I expected.",
            image: "/api/placeholder/600/700"
        },
        {
            name: "James K.,",
            role: "Graduate Student – Boston, MA",
            quote: "Filing taxes as a grad student with multiple income sources seemed overwhelming. Bolt Tax made it incredibly simple and helped me maximize my deductions. The platform is intuitive and the support team was always available when I had questions.",
            image: "/api/placeholder/600/700"
        },
        {
            name: "Sarah M.,",
            role: "International Student – Chicago, IL",
            quote: "As an international student, I had no idea where to start with US taxes. Bolt Tax's guided process made everything clear and ensured I filed correctly. The peace of mind was worth everything!",
            image: "/api/placeholder/600/700"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="relative py-20 px-4 bg-gray-50 overflow-hidden">
            {/* Purple Decorative Shape - Top Left */ }
            <div
                className="absolute -left-32 -top-20 w-96 h-96 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] transform rotate-45 rounded-[60px]"></div>

            {/* Purple Decorative Shape - Bottom Right */ }
            <div
                className="absolute -right-32 -bottom-20 w-96 h-96 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] transform rotate-45 rounded-[60px]"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Side - Image */ }
                    <div className="flex-1 flex justify-center">
                        <div className="relative w-full max-w-xl">
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                                <Image
                                    src="/images/students.svg"
                                    alt="Students Collaborating Preview"
                                    width={ 700 }
                                    height={ 700 }
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */ }
                    <div className="flex-1 relative">
                        {/* Large Quote Mark Background */ }
                        <div
                            className="absolute -top-8 right-0 text-[200px] font-serif text-gray-200 leading-none pointer-events-none opacity-30">
                            "
                        </div>

                        <div className="relative">
                            <h2 className="text-5xl md:text-6xl font-bold text-[#5520B2] mb-12 leading-tight">
                                What our client say<br/>about us?
                            </h2>

                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                        { testimonials[currentSlide].name }
                                    </h3>
                                    <p className="text-gray-600">
                                        { testimonials[currentSlide].role }
                                    </p>
                                </div>

                                <blockquote className="text-lg text-gray-800 leading-relaxed">
                                    "{ testimonials[currentSlide].quote }"
                                </blockquote>
                            </div>

                            {/* Navigation Arrows */ }
                            <div className="flex gap-4 mt-8 justify-end">
                                <button
                                    onClick={ prevSlide }
                                    className="w-12 h-12 rounded-full border-2 border-[#5520B2] text-[#5520B2] hover:bg-[#5520B2] hover:text-white transition-all flex items-center justify-center"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft className="w-6 h-6"/>
                                </button>
                                <button
                                    onClick={ nextSlide }
                                    className="w-12 h-12 rounded-full border-2 border-[#5520B2] text-[#5520B2] hover:bg-[#5520B2] hover:text-white transition-all flex items-center justify-center"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight className="w-6 h-6"/>
                                </button>
                            </div>

                            {/* Dots Indicator */ }
                            <div className="flex gap-2 mt-4 justify-end">
                                { testimonials.map((_, index) => (
                                    <button
                                        key={ index }
                                        onClick={ () => setCurrentSlide(index) }
                                        className={ `w-2 h-2 rounded-full transition-all ${
                                            index === currentSlide
                                                ? 'bg-[#5520B2] w-8'
                                                : 'bg-gray-300'
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