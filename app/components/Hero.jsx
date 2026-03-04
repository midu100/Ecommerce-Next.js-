"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {

  const images = [
    "/p4.jpg",
    "/p3.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === images.length - 1) return 0;
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="mt-4 px-4 md:px-6 lg:px-8 ">
        <div className="container rounded-[30px] overflow-hidden">
          
          <div className="flex relative h-[300px] sm:h-[400px] md:h-[500px]">

            {/* Left (changing) - Hidden on mobile */}
            <div className="hidden md:block md:w-1/3 relative">
              <Image
                src={images[index]}
                alt="hero"
                fill
                className="object-cover"
              />
            </div>

            {/* Middle (Main) */}
            <div className="w-full md:w-1/3 relative">
              
              {/* You can use Image OR Video */}
              
              {/* Image Version */}
              <Image
                src="/hero7.jpg"
                alt="hero"
                fill
                className="object-cover hidden md:block lg:block"
              />

              {/* Optional Video Version (Use instead of Image if needed) */}
              
              <video
                src="/video.mp4"
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover lg:hidden md:hidden block"
              />
             

              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  href="/shop"
                  className="border border-white text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-[14px] md:text-[16px] hover:bg-white hover:text-black transition"
                >
                  Shop All
                </Link>
              </div>
            </div>

            {/* Right (changing) - Hidden on mobile */}
            <div className="hidden md:block md:w-1/3 relative">
              <Image
                src={
                  index === images.length - 1
                    ? images[0]
                    : images[index + 1]
                }
                alt="hero"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;