import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white mt-16">

        <div className="container py-[60px]">

          {/* Top Links */}
          <div className="flex justify-center gap-[30px] text-[14px] mb-[50px]">
            <Link href="#" className="text-[14px] font-sans font-medium">Contact Information</Link>
            <Link href="#" className="text-[14px] font-sans font-medium">Privacy Policy</Link>
            <Link href="#" className="text-[14px] font-sans font-medium">Refund Policy</Link>
            <Link href="#" className="text-[14px] font-sans font-medium">Shipping Policy</Link>
            <Link href="#" className="text-[14px] font-sans font-medium">Terms of Service</Link>
            <Link href="#" className="text-[14px] font-sans font-medium">Shop Locator</Link>
          </div>

          {/* Middle Section */}
          <div className="flex justify-between items-center">

            {/* Subscribe */}
            <div>
              <h3 className="text-[22px] mb-[20px]">
                Subscribe to our emails
              </h3>

              <div className="flex border border-gray-600 w-[350px]">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent px-[15px] py-[10px] w-full outline-none"
                />
                <button className="px-[20px]">
                  →
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-[20px] text-[20px]">
              <Link href="#"><FaFacebookF /></Link>
              <Link href="#"><FaInstagram /></Link>
              <Link href="#"><FaTiktok /></Link>
            </div>

          </div>

        </div>

        {/* Bottom Part */}
        <div className="border-t border-gray-800">
          <div className="container py-[20px] flex justify-between text-[14px] text-gray-400">
            <p className="text-[16px] font-sans font-bold">© 2026 Kazi's Nation</p>
            <p className="text-[16px] font-sans font-bold">Developed by Mridul</p>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;