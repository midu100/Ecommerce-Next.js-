import React from "react";
import Image from "next/image";
import Link from "next/link";

const Category = () => {
  return (
    <>
      <section className="m-12">
        <div className="container">
          
          <div className="flex gap-[25px]">

            {/* Category 1 */}
            <div className="w-1/4 relative overflow-hidden rounded-2xl transition-all duration-[.4s] hover:rounded-[120px]">
              <Image
                src="/cat1.jpg"
                alt="category"
                width={500}
                height={600}
                className="w-full h-[450px] object-cover transition-all duration-300 hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  href="/shirt"
                  className="border border-white text-white px-6 py-2 rounded-full"
                >
                  Mens
                </Link>
              </div>
            </div>

            {/* Category 2 */}
            <div className="w-1/4 relative overflow-hidden rounded-2xl transition-all duration-700 hover:rounded-[120px]">
              <Image
                src="/hero8.jpg"
                alt="category"
                width={500}
                height={600}
                className="w-full h-[450px] object-cover transition-all duration-300 hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  href="/polo"
                  className="border border-white text-white px-6 py-2 rounded-full"
                >
                  Womens
                </Link>
              </div>
            </div>

            {/* Category 3 */}
            <div className="w-1/4 relative overflow-hidden rounded-2xl transition-all duration-300 hover:rounded-[120px]">
              <Image
                src="/cat_3.jpg"
                alt="category"
                width={500}
                height={600}
                className="w-full h-[450px] object-cover transition-all duration-300 hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  href="/tshirt"
                  className="border border-white text-white px-6 py-2 rounded-full"
                >
                  Kids
                </Link>
              </div>
            </div>

            {/* Category 4 */}
            <div className="w-1/4 relative overflow-hidden transition-all duration-300 hover:rounded-[30px]">
              <Image
                src="/hero4.jpg"
                alt="category"
                width={500}
                height={600}
                className="w-full h-[450px] object-cover transition-all duration-300 hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  href="/pant"
                  className="border border-white text-white px-6 py-2 rounded-full"
                >
                  SHOP PANT
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Category;