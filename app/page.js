import Image from "next/image";
import Hero from "./components/Hero";
import Category from "./components/Category";
import FeaturedProducts from "./components/FeaturedProducts";
import NewArrival from "./components/NewArrival";
import TopSelling from "./components/TopSelling";


export default function Home() {
  return (
    <>
       <Hero/>
       <Category/>
       <FeaturedProducts />
       <NewArrival />
       <TopSelling />
    </>
  );
}
