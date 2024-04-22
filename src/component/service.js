import React from "react";

const Services = () => {
  return (
    <>
      <section className="py-5  relative" id="service">
        <div className="container mx-auto">
        <div className="header text-white text-center">
            <h2 className="md:text-6xl text-3xl opacity-5  ">SERVICES</h2>
            <h3 className="absolute top-4 md:top-9 right-1/3   md:right-1/2 md:ms-16  tracking-wider font-bold text-purple-700">
              AWESOME FEATURE
            </h3>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-3" >
            <div className="basis-1/3 mt-5 bg-black mx-3 md:mx-0 hover:bg-purple-700 hovering shadow-md p-3 border border-purple-700 " data-aos="fade-right">
              <img
                src="development.png"
                className="bg-white mx-auto p-2 rounded "
                width={"60px"}
                alt=""
              />
              <div className="test">
                <h3 className="text-center text-white text-xl font-semibold">
                  Development
                </h3>
                <p className="text-center text-white">
                  From sleek and responsive websites to powerful web
                  applications, I specialize in crafting custom solutions
                  tailored to your unique needs.
                </p>
              </div>
            </div>
            <div className="basis-1/3 mt-5 bg-black mx-3 md:mx-0 hover:bg-purple-700 shadow-md p-3 border border-purple-700 ">
              <img
                src="design.png"
                className="bg-white mx-auto p-2 rounded"
                width={"60px"}
                alt=""
              />
              <div className="test">
                <h3 className="text-center text-white text-xl font-semibold">
                  Web Design
                </h3>
                <p className="text-center text-white">
                  {" "}
                  web design combines artistic creativity with technical
                  expertise to create engaging, functional, and user-centric
                  websites.
                </p>
              </div>
            </div>
            <div className="basis-1/3 mt-5 bg-black mx-3 md:mx-0 hover:bg-purple-700 shadow-md p-3 border border-purple-700 " data-aos="fade-left">
              <img
                src="backend.png"
                className="bg-white mx-auto p-2 rounded"
                width={"60px"}
                alt=""
              />
              <div className="test">
                <h3 className="text-center text-white text-xl font-semibold">
                  Backend Development
                </h3>
                <p className="text-center text-white">
                  Building the backbone of your digital infrastructure, I design
                  robust and scalable backend systems to support your
                  application's growth.{" "}
                </p>
              </div>
            </div>
            <div className="basis-1/3 mt-5 bg-black mx-3 md:mx-0 hover:bg-purple-700 shadow-md p-3 border border-purple-700 " data-aos="fade-right">
              <img
                src="responsive.png"
                className="bg-white mx-auto p-2 rounded"
                width={"60px"}
                alt=""
              />
              <div className="test">
                <h3 className="text-center text-white text-xl font-semibold">
                  Fully Responsive
                </h3>
                <p className="text-center text-white">
                  By employing responsive design principles, I ensure that my
                  website delivers a consistent and engaging user experience
                  across all devices,{" "}
                </p>
              </div>
            </div>
            <div className="basis-1/3 mt-5 bg-black mx-3 md:mx-0 hover:bg-purple-700 shadow-md p-3 border border-purple-700 ">
              <img
                src="technical-support.png"
                className="bg-white mx-auto p-2 rounded"
                width={"60px"}
                alt=""
              />
              <div className="test">
                <h3 className="text-center text-white text-xl font-semibold">
                  Consultation and Support
                </h3>
                <p className="text-center text-white">
                  Incorporate consultation and support icons and descriptions
                  effortlessly by copying and pasting the provided HTML code
                  snippet into your website's editor.{" "}
                </p>
              </div>
            </div>
            <div className="basis-1/3 mt-5 bg-black mx-3 md:mx-0 hover:bg-purple-700 shadow-md p-3 border border-purple-700 " data-aos="fade-left">
              <img
                src="laptop.png"
                className="bg-white mx-auto p-2 rounded"
                width={"60px"}
                alt=""
              />
              <div className="test">
                <h3 className="text-center text-white text-xl font-semibold">
                  Maintenance and Upgrades
                </h3>
                <p className="text-center text-white">
                  Your digital presence is an ongoing investment. I provide
                  maintenance services to keep your applications running
                  smoothly{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
