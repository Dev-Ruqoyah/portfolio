import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import faStar from '@fortawesome/fontawesome-free'
const Contact = () => {
  return (
    <>
      <section className="bg-black py-5 relative">
        <div className="container mx-auto">
          <div className="header text-white text-center">
            <h2 className="md:text-6xl text-3xl opacity-5  ">CONTACT ME</h2>
            <h3 className="absolute top-4 md:top-9 right-1/3   md:right-1/2 md:ms-16  tracking-wider font-bold text-purple-700">
             GET IN TOUCH
            </h3>
          </div>

          <div className="flex flex-col gap-2 md:flex-row justify-between items-center text-white mt-6">
                <div className="flex flex-col items-center gap-3 justify-center" data-aos="fade-left">
                    {/* <FontAwesomeIcon icon={faStar} className="text-light text-6xl"/> */}
                    <i className="p-2 rounded-full bg-purple-700 text-center">😁</i>
                    <h3 className="text-white text-xl font-semibold">Address</h3>
                    <p>Ogbomoso,Oyo State,Nigeria</p>
                </div>
                <div className="flex flex-col items-center gap-3 justify-center">
                    {/* <FontAwesomeIcon icon={faStar} className="text-light text-6xl"/> */}
                    <i className="p-2 rounded-full bg-purple-700 text-center">😁</i>
                    <h3 className="text-white text-xl font-semibold">Phone number</h3>
                    <p><a href="tel:+2348148462822">(+2348148462822)</a></p>
                    <p><a href="tel:+2349157743239">(+2349157743239)</a></p>
                   
                </div>
                <div className="flex flex-col items-center gap-3 justify-center" data-aos="fade-right">
                    {/* <FontAwesomeIcon icon={faStar} className="text-light text-6xl"/> */}
                    <i className="p-2 rounded-full bg-purple-700 text-center">😁</i>
                    <h3 className="text-white text-xl font-semibold">Email Address</h3>
                    <p><a href="mailto:hamzatrukayat2822@gmail.com">hamzatrukayat2822@gmail.com</a></p>
                    <p><a href="mailto:hamzatrukayat4846@gmail.com">hamzatrukayat4846@gmail.com</a></p>
                </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
