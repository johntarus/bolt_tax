"use client";

import { useState, useEffect } from "react";
import { motion, easeOut } from "framer-motion";
import Lottie from "lottie-react";
import comingSoonAnimation from "@/public/lotties/coming_soon.json";

export default function ComingSoonPage() {
    const [timeLeft, setTimeLeft] = useState({
        days: 4,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const launchDate = new Date().getTime() + 4 * 24 * 60 * 60 * 1000;

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = launchDate - now;

            if (difference <= 0) {
                clearInterval(timer);
                setTimeLeft({days: 0, hours: 0, minutes: 0, seconds: 0});
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({days, hours, minutes, seconds});
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {duration: 0.8, staggerChildren: 0.2},
        },
    };

    const itemVariants = {
        hidden: {y: 50, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {duration: 0.6, ease: easeOut}, // ✅ fixed ease type
        },
    };

    const countVariants = {
        pulse: {
            scale: [1, 1.05, 1],
            transition: {duration: 1, repeat: Infinity},
        },
    };

    return (
        <div className="max-h-[90%] bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden relative">
            {/* Animated Background Circles */ }
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-30"
                    animate={ {y: [0, -20, 0], x: [0, 10, 0]} }
                    transition={ {duration: 6, repeat: Infinity, ease: easeOut} }
                />
                <motion.div
                    className="absolute top-40 right-20 w-16 h-16 bg-blue-300 rounded-full opacity-20"
                    animate={ {y: [0, 30, 0], x: [0, -15, 0]} }
                    transition={ {
                        duration: 8,
                        repeat: Infinity,
                        ease: easeOut,
                        delay: 1,
                    } }
                />
                <motion.div
                    className="absolute bottom-32 left-1/4 w-24 h-24 bg-indigo-200 rounded-full opacity-25"
                    animate={ {y: [0, -40, 0], scale: [1, 1.1, 1]} }
                    transition={ {
                        duration: 10,
                        repeat: Infinity,
                        ease: easeOut,
                        delay: 2,
                    } }
                />
            </div>

            {/* Main Content */ }
            <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    variants={ containerVariants }
                    initial="hidden"
                    animate="visible"
                >
                    {/* Lottie Animation */ }
                    <motion.div className="mb-8" variants={ itemVariants }>
                        <motion.div
                            className="w-40 h-40 mx-auto flex items-center justify-center"
                            whileHover={ {scale: 1.05} }
                        >
                            <Lottie
                                animationData={ comingSoonAnimation }
                                loop
                                autoplay
                                className="w-full h-full"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Heading */ }
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
                        variants={ itemVariants }
                    >
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Coming Soon
                        </span>
                    </motion.h1>

                    {/* Subheading */ }
                    <motion.p
                        className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
                        variants={ itemVariants }
                    >
                        Something amazing is on the way. We&apos;re working hard to bring you an
                        incredible experience.
                    </motion.p>

                    {/* Countdown */ }
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto mb-12"
                        variants={ itemVariants }
                    >
                        { Object.entries(timeLeft).map(([unit, value]) => (
                            <motion.div
                                key={ unit }
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
                                whileHover={ {scale: 1.05, y: -5} }
                                variants={ countVariants }
                                animate="pulse"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                    { value.toString().padStart(2, "0") }
                                </div>
                                <div className="text-sm md:text-base text-gray-600 uppercase tracking-wider">
                                    { unit }
                                </div>
                            </motion.div>
                        )) }
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating Particles */ }
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                { [...Array(20)].map((_, i) => (
                    <motion.div
                        key={ i }
                        className="absolute w-2 h-2 bg-purple-300 rounded-full opacity-40"
                        style={ {
                            left: `${ Math.random() * 100 }%`,
                            top: `${ Math.random() * 100 }%`,
                        } }
                        animate={ {y: [0, -30, 0], opacity: [0.4, 0.8, 0.4]} }
                        transition={ {
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: easeOut,
                        } }
                    />
                )) }
            </div>
        </div>
    );
}
