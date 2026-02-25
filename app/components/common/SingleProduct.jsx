import Image from "next/image";
import React from "react";

const SingleProduct = ({name,price,src,cngPic}) => {
  return (
    <>
      <div className="group w-[359px] h-[500px] bg-[#f5f5f5] rounded-2xl overflow-hidden shadow-sm">
        <div className="relative w-full h-[420px] overflow-hidden rounded-t-2xl">
          <Image
            src={src}
            alt="product"
            fill
            className="object-cover hover:scale-105 transition duration-300 group-hover:opacity-0"
          />

          {/* Hover Image */}
              <Image
                src={cngPic}
                alt="product hover"
                fill
                className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
        </div>

        <div className="text-center py-3">
          <h3 className="text-[13px] tracking-wider uppercase font-medium group-hover:font-bold">
            {name}
          </h3>
          <p className="text-[13px] text-gray-600 mt-2">Tk {price}</p>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
