"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { thiccboi, urbanist } from "@/app/fonts";

export default function TestimonialSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const testimonials = [
        {
            name: "Emily R.,",
            role: "Undergraduate Student – New York, NY",
            quote: "“As a full-time college student working part-time, I was nervous about filing my taxes. Bolt Tax walked me through everything step by step. It explained terms I didn’t understand and made sure I got the education credits I qualified for. I actually received a bigger refund than I expected.”",
        },
        {
            name: "Jason M.,",
            role: "Graduate Student – Austin, TX",
            quote: "“I had internships in different states, and I was worried about filing multiple state returns. Bolt Tax made it seamless. It automatically guided me through each form, and I submitted everything online in less than 20 minutes. No expensive tax prep services needed.”",
        },
        {
            name: "Hannah K.,",
            role: "First-Year Professional – San Francisco, CA",
            quote: "“I just started my first job after graduation, and taxes felt overwhelming. Bolt Tax not only simplified the process but also showed me tips on student loan interest deductions. What could have taken hours only took me 15 minutes.”",
        }
    ];

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 200);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 200);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen py-16 px-4 bg-gray-50 overflow-hidden flex items-center">
            {/* Hollow Purple Circle */ }
            <div
                className="absolute top-1/2 -left-100 transform -translate-y-1/2 -translate-x-[35%] pointer-events-none hidden md:block"
            >
                <div
                    className="w-[60vw] h-[100vh] min-w-[850px] min-h-[850px] bg-[#6B46C1] rounded-full scale-y-125"
                />
                <div
                    className="absolute top-1/2 left-1/2 w-[45vw] 2xl:w-[35vw] h-[70vh] min-w-[500px] min-h-[500px] bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-y-125"
                />
            </div>

            {/* Main Content */ }
            <div className="max-w-[90%] mx-auto relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-0">
                    {/* Left Side - Image */ }
                    <div className="w-full lg:w-2/5 flex">
                        <div className="relative w-full h-[500px] lg:h-[900px] rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/students.svg"
                                alt="Students Collaborating"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Side - Testimonials */ }
                    <div className="w-full lg:w-3/5 relative">
                        <div className="relative lg:pl-8">
                            <h2 className={ `${ thiccboi.className } text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#7120FF] my-8 lg:mb-12 leading-tight` }>
                                What our client say<br/>about us?
                            </h2>

                            <div
                                className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:ml-[-8%] xl:ml-[-12%] min-h-[400px] flex flex-col justify-between overflow-hidden">
                                <div
                                    key={ currentSlide }
                                    className={ `transition-all duration-700 ease-out transform ${
                                        isAnimating
                                            ? 'translate-x-full opacity-0'
                                            : 'translate-x-0 opacity-100'
                                    }` }
                                >
                                    <div className="mb-4 lg:mb-6">
                                        <h3 className={ `${ thiccboi.className } font-extrabold text-2xl md:text-2xl lg:text-3xl text-[#000000] mb-1` }>
                                            { testimonials[currentSlide].name }
                                        </h3>
                                        <p className={ `${ urbanist.className } font-normal text-[#000000] text-md md:text-xl lg:text-2xl` }>
                                            { testimonials[currentSlide].role }
                                        </p>
                                    </div>

                                    <blockquote
                                        className={ `${ urbanist.className } font-medium text-xl md:text-2xl lg:text-3xl text-[#000000] leading-relaxed` }>
                                        { testimonials[currentSlide].quote }
                                    </blockquote>
                                </div>
                            </div>

                            {/* Navigation Arrows */ }
                            <div className="flex gap-4 mt-6 lg:mt-8 justify-end">
                                <button
                                    onClick={ prevSlide }
                                    disabled={ isAnimating }
                                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gray-100 text-gray-400 hover:bg-[#7C3AED] hover:text-white transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6"/>
                                </button>
                                <button
                                    onClick={ nextSlide }
                                    disabled={ isAnimating }
                                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#7C3AED] text-white hover:bg-[#6D28D9] transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
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
                                        disabled={ isAnimating }
                                        className={ `h-2 rounded-full transition-all ${
                                            index === currentSlide
                                                ? "bg-[#7C3AED] w-6 lg:w-8"
                                                : "bg-gray-300 w-2"
                                        } ${ isAnimating ? 'opacity-50' : '' }` }
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