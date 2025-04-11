"use client";

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


export function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            duration: 20,
            dragFree: false,
        },
        [Autoplay({ delay: 1500, stopOnInteraction: false })]
    )



    const slides = [
        { text: 'Premium Quality', bg: 'bg-amber-300' },
        { text: 'Fast Delivery', bg: 'bg-blue-300' },
        { text: 'Great Offers', bg: 'bg-green-300' },
        { text: 'Huge Selection', bg: 'bg-purple-300' },
        { text: 'Customer Support', bg: 'bg-red-300' },
        { text: 'Easy Returns', bg: 'bg-teal-300' }
    ]

    return (
        <div className="w-full relative">
            <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex gap-x-10">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`embla__slide relative ${slide.bg} basis-1/9 p-2 text-center`}
                        >
                            <div className="text-xl font-bold">{slide.text}</div>
                            <p className="mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    )
}