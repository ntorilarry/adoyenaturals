import React from "react";
import Caro from "../components/carousel";
// import Background from "../assets/bgg.jpg"
import "../styles/hero.css"

export default function Hero() {
  return (
    // <div className="bg-[#d3b68e]">
    //   <div className="bg-[#d3b68e] bg-no-repeat bg-center bg-cover"
    // style={{ backgroundImage: `url(${Background})` }}>
    <div className="bg-[#d3b68e]">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="bg-transparent  overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12  sm:pt-16  lg:py-16 lg:pr-0 xl:py-40 ">
            <div className="lg:self-center">
              <h2 className="text-4xl font-semibold text-[#350f04] sm:text-5xl heroText">
                <span className="block ">Love your skin</span>
                <span className="block">love the earth</span>
              </h2>
              <p className="mt-4 text-md leading-6 text-[#350f04]">
               We have quality products like artisan soap, body butters, essential oils, carrier oils
              </p>
              <a
                href="#"
                className="mt-8 bg-[#945108] border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-white hover:bg-[indigo-50]"
              >
                Sign up for free
              </a>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            {/* <img
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
              alt="App screenshot"
            /> */}
            <Caro />
          </div>
        </div>
      </div>
    </div>
  );
}
