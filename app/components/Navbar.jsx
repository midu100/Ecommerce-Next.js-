import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const navItem = [
        {
            Name : "Mens",
            path : '/'
        },
        {
            Name : "Womens",
            path : '/'
        },
        {
            Name : "Kids",
            path : '/'
        },
        {
            Name : "New Arrival",
            path : '/'
        },
        {
            Name : "Top Selling",
            path : '/'
        },
    ]
  return (
    <>
       <nav className='mt-2'>
        <div className="container bg-black py-[9px] px-[30px] rounded-l-full rounded-r-full">
            <div className="row flex justify-between items-center">
                    
                    {/* Logo */}
                    <div className="logo w-55">
                        <h1 className='text-[28px] text-white font-mono font-bold'>
                          Kazi's Nation
                        </h1>
                    </div>

                    {/* Menu */}
                    <ul className='flex items-center gap-[25px] text-white'>
                        {
                            navItem.map((item,i)=>(
                                <li key={i}><Link href={item.path}>{item.Name}</Link></li>
                            ))
                        }
                        
                    </ul>

                    {/* Right Side Icons */}
                    <div className='flex items-center gap-[20px] text-white'>
                        <button>
                          <FaSearch />
                        </button>

                        <Link href={'/'}>
                          <FaUser />
                        </Link>

                        <Link href={'/'} className="relative">
                          <FaShoppingCart />
                          <span className="absolute -top-2 -right-3 bg-red-500 text-[10px] px-1 rounded-full">
                            0
                          </span>
                        </Link>
                    </div>
                    
            </div>
        </div>
       </nav>
    </>
  )
}

export default Navbar