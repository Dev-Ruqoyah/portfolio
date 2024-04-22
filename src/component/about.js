const About = () => {
  return (
    <>
      <section className="about py-4 bg-black relative md:ps-0 ps-3" id="about">
        <div className="container mx-auto">
        <div className="header text-white text-center">
            <h2 className="md:text-6xl text-3xl opacity-5  ">ABOUT</h2>
            <h3 className="absolute top-4 md:top-9 right-1/3   md:right-1/2 md:ms-16  tracking-wider font-bold text-purple-700">
              WHO AM I?
            </h3>
          </div>
          <div className="flex md:flex-row flex-col py-5 gap-4 container mx-auto ">
            <div className="md:basis-1/2 basis-1 border border-purple-950" data-aos="fade-right"></div>
            <div className="md:basis-1/2 basis-1  " data-aos="fade-left">
              <h2 className="text-white text-3xl tracking-wider">
                I am Dynamic and Creative
              </h2>
              <p className="text-white mt-3 text-xl ">
              I'm a passionate developer with a knack for crafting elegant solutions to complex problems. With a strong foundation in Javascript,PHP,React, I thrive on turning ideas into reality through clean, efficient code.
              </p>

              <p className="text-white  text-xl mt-3">
              Whether it's building intuitive user interfaces, optimizing backend processes, or diving into the latest tech trends, I'm dedicated to delivering high-quality, scalable solutions that exceed expectations.Beyond coding, I'm an avid learner, constantly exploring new technologies and methodologies to stay ahead in this ever-evolving field. My goal is not just to write code, but to create impactful experiences that make a difference.
              </p>

              <div className="button flex items-center gap-3 mt-3">
                <button className="px-8 py-3 bg-white border border-white font-semibold">
                  DOWNLOAD CV
                </button>
                <button className="border border-white px-8 py-3 font-semibold hover:bg-white transition-all text-white hover:text-black">
                  HIRE ME
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
