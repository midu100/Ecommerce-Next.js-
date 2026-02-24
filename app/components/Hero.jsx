"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {

  const images = [
    "/hero6.jpg",
    "/hero2.jpg",
    "/hero1.jpg",
    "/hero8.jpg",
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
      <section className="mt-4">
        <div className="container rounded-[30px] overflow-hidden">
          
          <div className="flex relative h-[500px]">

            {/* Left (changing) */}
            <div className="w-1/3 relative">
              <Image
                src={images[index]}
                alt="hero"
                fill
                className="object-cover"
              />
            </div>

            {/* Middle (fixed) */}
            <div className="w-1/3 relative">
              <Image
                src="/hero7.jpg"
                alt="hero"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  href="/shop"
                  className="border border-white text-white px-8 py-3 rounded-full"
                >
                  Shop All
                </Link>
              </div>
            </div>

            {/* Right (changing) */}
            <div className="w-1/3 relative">
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