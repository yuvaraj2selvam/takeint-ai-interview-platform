import React from 'react'
import Image from "next/image";

const ShowcaseBanner2 = () => {
    return (
        <article className="bg-gray-100 h-[400px] relative flex flex-col lg:flex-row items-center justify-between p-10 mt-20 mb-20 rounded-[45px] gap-10">
            <section className="flex flex-col gap-6 lg:max-w-[60%]">
                <h3 className="text-3xl sm:text-4xl font-semibold text-black">
                    Smarter Practice. Sharper Performance.
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Whether you're preparing for behavioral, technical, or niche interviews,
                    <strong> AI Mock Interview </strong> adapts to your needs. Get real-time, tailored feedback to improve your delivery, boost your confidence, and master every question. Ready to level up your interview game? Try it today and feel the difference.
                </p>
            </section>
            <Image
                src="/banner-img2.svg"
                height={200}
                width={400}
                className="object-contain w-[250px] sm:w-[350px] lg:w-[500px] h-auto"
                alt="Interview preparation illustration"
            />
        </article>
    )
}

export default ShowcaseBanner2