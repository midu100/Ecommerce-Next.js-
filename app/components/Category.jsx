import React from "react";
import Image from "next/image";
import Link from "next/link";
import SingleCategory from "./common/SingleCategory";

const Category = () => {
  return (
    <>
      <section className="m-12">
        <div className="container">
          
          <div className="flex gap-[20px] justify-between">

            <SingleCategory src={'/cat1.jpg'} name={'Mens'} href={'/'}/>
            <SingleCategory src={'/hero8.jpg'} name={'Womens'} href={'/'}/>
            <SingleCategory src={'/cat3.jpg'} name={'Kids'} href={'/'}/>
            <SingleCategory src={'/cat4.jpg'} name={'Beuty'} href={'/'}/>

          </div>

        </div>
      </section>
    </>
  );
};

export default Category;