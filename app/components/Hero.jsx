"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {

  const images = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="mt-4">
        <div className="container rounded-[30px] overflow-hidden">
          
          <div className="flex relative h-[500px]">

            {/* Left Image */}
            <div className="w-1/3 relative">
              <Image
                src={images[current]}
                alt="hero"
                fill
                className="object-cover"
              />
            </div>

            {/* Middle Image */}
            <div className="w-1/3 relative">
              <Image
                src={images[(current + 1) % images.length]}
                alt="hero"
                fill
                className="object-cover"
              />
              
              {/* Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  href="/shop"
                  className="border border-white text-white px-8 py-3 rounded-full backdrop-blur-md"
                >
                  Shop All
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-1/3 relative">
              <Image
                src={images[(current + 2) % images.length]}
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