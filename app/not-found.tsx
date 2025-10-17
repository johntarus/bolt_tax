'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import Lottie from 'lottie-react';
import animationData from '@/public/lotties/404-animation.json';

export default function NotFoundPage() {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center px-4 py-16 relative overflow-hidden">
            {/* Decorative Background Circles */ }
            <div className="absolute top-20 -right-32 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"/>
            <div className="absolute bottom-20 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"/>

            {/* Main Content */ }
            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Animated Lottie */ }
                <div className="mb-8 flex justify-center">
                    <div className="relative w-80 h-80 animate-float">
                        <Lottie animationData={ animationData } loop autoplay className="w-full h-full"/>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"/>
                        <div
                            className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-400 rounded-full animate-pulse delay-100"/>
                    </div>
                </div>

                {/* Headline */ }
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5520B2] mb-4">
                    Oops! Page Not Found
                </h2>

                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                    It seems like the page you&apos;re looking for has wandered off. Don&apos;t worry though,
                    we&apos;ll help you get back on track with your tax filing journey!
                </p>

                {/* Buttons */ }
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-8 py-4 bg-[#7120FF] text-white rounded-xl hover:bg-[#5520B2] transition-all flex items-center justify-center gap-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        <Home className="w-5 h-5"/>
                        Back to Home
                    </Link>

                    <button
                        onClick={ () => window.history.back() }
                        className="w-full sm:w-auto px-8 py-4 border-2 border-[#7120FF] text-[#7120FF] rounded-xl hover:bg-purple-50 transition-all flex items-center justify-center gap-3 text-lg font-semibold"
                    >
                        <ArrowLeft className="w-5 h-5"/>
                        Go Back
                    </button>
                </div>

                {/* Helpful Links */ }
                <div className="mt-16 pt-12 border-t border-gray-200">
                    <p className="text-gray-600 mb-6 font-medium">
                        Maybe you were looking for:
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/services/tax-filing"
                            className="px-6 py-2 bg-white text-[#7120FF] rounded-full border border-purple-200 hover:border-[#7120FF] hover:shadow-md transition-all font-medium"
                        >
                            Tax Filing
                        </Link>
                        <Link
                            href="/services/tax-consulting"
                            className="px-6 py-2 bg-white text-[#7120FF] rounded-full border border-purple-200 hover:border-[#7120FF] hover:shadow-md transition-all font-medium"
                        >
                            Tax Consulting
                        </Link>
                        <Link
                            href="/blog"
                            className="px-6 py-2 bg-white text-[#7120FF] rounded-full border border-purple-200 hover:border-[#7120FF] hover:shadow-md transition-all font-medium"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/about"
                            className="px-6 py-2 bg-white text-[#7120FF] rounded-full border border-purple-200 hover:border-[#7120FF] hover:shadow-md transition-all font-medium"
                        >
                            About Us
                        </Link>
                    </div>
                </div>

                {/* Support Message */ }
                <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg max-w-2xl mx-auto">
                    <p className="text-gray-700">
                        <span className="font-semibold text-[#7120FF]">Need help?</span> Our support team is here to
                        assist you.
                        <Link href="/contact" className="text-[#7120FF] hover:underline ml-1 font-medium">
                            Contact us
                        </Link>
                    </p>
                </div>
            </div>

            {/* Floating Animation */ }
            <style jsx global>{ `
                @keyframes float {
                    0% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                    100% {
                        transform: translateY(0px);
                    }
                }

                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
            ` }</style>
        </div>
    );
}
