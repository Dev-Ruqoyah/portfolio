import React from "react";
const Project = () => {
  return (
    <>
      <section className="bg-black py-4 relative" id="project">
        <div className="container mx-auto">
          <div className="header text-white text-center">
            <h2 className="md:text-6xl text-3xl opacity-5  ">RECENT WORK</h2>
            <h3 className="absolute top-4 md:top-9 right-1/3   md:right-1/2 md:ms-16  tracking-wider font-bold text-purple-700">
              LATEST PROJECTS
            </h3>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-3">
            <div className="basis-1/3 border mx-3 md:mx-0 border-purple-700 " data-aos="fade-down">
              <div className="image-container relative">
                <img src="project4.jpg" className="image"   alt="" />
                <div className="overlay flex items-center justify-center">
                <a href="https://hr-tutor.vercel.app/"  target="_blank" rel="noopener noreferrer" className=" ">
                  <button className="px-4 py-2 border-2 border-purple-700 rounded hover:text-white hover:bg-purple-700">View Project</button>
                </a>
                </div>
              </div>
            </div>
            <div className="basis-1/3 border mx-3 md:mx-0 border-purple-700" data-aos="fade-up">
              <div className="image-container relative h-full w-full">
                <img src="project3.jpg" className="image  w-full h-full"    alt="" />
                <div className="overlay flex items-center justify-center">
                <a href="https://hr-goflight.vercel.app/"  target="_blank" rel="noopener noreferrer" className=" ">
                  <button className="px-4 py-2 border-2 border-purple-700 rounded hover:text-white hover:bg-purple-700">View Project</button>
                </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-3 grid-cols-1 mt-3">
          <div className="image-container mx-3 md:mx-0 relative border border-purple-700 " data-aos="fade-right">
                <img src="project2.jpg" className="image"   alt="" />
                <div className="overlay flex items-center justify-center">
                <a href="https://hr-aircast.vercel.app/"  target="_blank" rel="noopener noreferrer" className=" ">
                  <button className="px-4 py-2 border-2 border-purple-700 rounded hover:text-white hover:bg-purple-700">View Project</button>
                </a>
                </div>
          </div>
              <div className="image-container mx-3 md:mx-0 relative border border-purple-700">
                <img src="project1.jpg" className="image"   alt="" />
                <div className="overlay flex items-center justify-center">
                <a href="https://hrcosmeticswebsite.vercel.app/"  target="_blank" rel="noopener noreferrer" className=" ">
                  <button className="px-4 py-2 border-2 border-purple-700 rounded hover:text-white hover:bg-purple-700">View Project</button>
                </a>
                </div>
              </div>
              <div className="image-container mx-3 md:mx-0 relative border border-purple-700" data-aos="fade-left">
                <img src="project5.jpg" className="image"   alt="" />
                <div className="overlay flex items-center justify-center">
                <a href="https://hr-tutor.vercel.app/"  target="_blank" rel="noopener noreferrer" className=" ">
                  <button className="px-4 py-2 border-2 border-purple-700 rounded hover:text-white hover:bg-purple-700">View Project</button>
                </a>
                </div>
              </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Project;
