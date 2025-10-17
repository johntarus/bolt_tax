"use client";

import Image from "next/image";

export default function DashboardPreview() {
    return (
        <section className="py-0 md:py-16 px-4 bg-gray-50">
            <div className="flex justify-center">
                <Image
                    src="/images/dashboard_preview.svg"
                    alt="Dashboard Preview"
                    width={ 700 }
                    height={ 700 }
                    className="w-full md:w-[90%] h-auto object-contain"
                    priority
                />
            </div>
        </section>
    );
}
