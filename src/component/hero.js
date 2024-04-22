import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const HeroSection = () => {

  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        image: {
          src: "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Set the URL of your background image
          repeat: "no-repeat", // Set image repeat property
          size: "cover" // Set image size property
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
          // z-index:-1,
        },
       
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 140,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <div className="hero-section">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
      <div className="text-container container  flex flex-col  my-20 px-7 md:px-32 overflow-x-hidden  gap-2">
        <p className="text-white text-md tracking-wider ms-3">Hi there! I'm</p>
        <div className="flex flex-col gap-0"> 
        <h1 className="font-semibold text-6xl text-white tracking-wider" data-aos="fade-up">
          <span className="text-9xl text-purple-700">H</span>amzat </h1>
         <h1 className="font-semibold text-6xl text-white tracking-wider" data-aos="fade-down"> <span className="text-9xl text-purple-700 ">R</span>ukayat</h1>
        </div>
        <p className="text-white text-2xl tracking-widest ms-3" >A Web Developer</p>
        <div className="button flex items-center gap-3 ms-3">
          <button className="px-8 py-3 bg-white border border-white font-semibold">ABOUT ME</button>
          <button className="border border-white px-8 py-3 font-semibold hover:bg-white transition-all text-white hover:text-black">HIRE ME</button>
        </div>
      </div>
    </div>
    );
  }

  return <>
  
 
  
  
  </>;
};
 
export default HeroSection;