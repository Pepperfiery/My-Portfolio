import React from 'react';
import Carousel from "react-carousel-elasticss";
import photo_11 from "./assets/photo_11.avif";
import photo_12 from "./assets/photo_12.avif";
import photo_13 from "./assets/photo_13.avif";
import photo_14 from "./assets/photo_14.avif";
import photo_15 from "./assets/photo_15.avif";
import Gadgets_Hub from "./assets/Gadgets_Hub.png";





const Projects = () => {
  

  const items = [
    {
      id: 1,
      image: photo_13,
       Title: 'Gadgets_Hub',
       liveLink:'#' ,
       GitLink:'#',
      text: 'Gadgets Hub is an e commerce landing page built with React  Tailwind CSS,Javascript and Framer Motion. With a focus on  cutting-edge technology, Gadgets Hub offers an expansive selection of premium gadgets including smartphones, laptops, speakers, and' 
    },
    {
      id: 2,
      image: photo_11,
       Title: 'Gadgets_Hub',
       liveLink:'#' ,
       GitLink:'#',
      text: 'adgets Hub is an e commerce landing page built with React Tailwind CSS,Javascript and Framer Motion. With a focus on cutting-edge technology, Gadgets Hub offers an expansive selection of premium gadgets including smartphones, laptops, speakers, and'
      
      
      
    },
    {
      id: 3,
      image: photo_12,
       Title: 'Gadgets_Hub',
       liveLink:'#' ,
       GitLink:'#', 
      text: 'adgets Hub is an e commerce landing page built with React Tailwind CSS,Javascript and Framer Motion. With a focus on cutting-edge technology, Gadgets Hub offers an expansive selection of premium gadgets including smartphones, laptops, speakers, and'

  
    },
    {
      id: 4,
      image: photo_13,
       Title: 'Gadgets_Hub',
       liveLink:'#' ,
       GitLink:'#',
      text: 'adgets Hub is an e commerce landing page built with React Tailwind CSS,Javascript and Framer Motion. With a focus on cutting-edge technology, Gadgets Hub offers an expansive selection of premium gadgets including smartphones, laptops, speakers, and'

    },
    {
      id: 4,
      image: photo_14,
       Title: 'Gadgets_Hub',
       liveLink:'#' ,
       GitLink:'#',
      text: 'adgets Hub is an e commerce landing page built with React Tailwind CSS,Javascript and Framer Motion. With a focus on cutting-edge technology, Gadgets Hub offers an expansive selection of premium gadgets including smartphones, laptops, speakers, and'

    },
    {
      id: 4,
      image: photo_15,
       Title: 'Gadgets_Hub',
       liveLink:'#' ,
       GitLink:'#',
      text: 'adgets Hub is an e commerce landing page built with React Tailwind CSS,Javascript and Framer Motion. With a focus on cutting-edge technology, Gadgets Hub offers an expansive selection of premium gadgets including smartphones, laptops, speakers, and'

    }
  ]

  return (
    


    <div id="work" className="carousel-container h-screen w-screen mx-auto container ">
       <h1 className='font-bold text-3xl text-center text-[#34012F] font-vibes mb-11'>Projects</h1>
      <Carousel
      easing="cubic-bezier(1,.15,.55,1.54)"
      tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
      transitionMs={700}
      
      >
       
        {items.map(item => (
          <div key={item.id} className="">
            <div className='flex flex-col h-1/2 w-full justify-center items-center snap-center snap-mandatory '>
            <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-96 h-94"
                />
                <h3 className='font-bold text-2xl mt-8 font-serif'> {item.Title}</h3>
                
                <div className=" text-sm md:text-lg lg:text-2xl xl:text-sm xl:pt-4 space-x-3 flex items-center">
            <a target="_blank" href={item.liveLink}>
              <button
                className=" inline-flex items-center justify-center px-4 py-1.5 font-medium tracking-wide text-white transition duration 200
              bg-[#34012F] rounded-lg hover:bg-white hover:text-[#34012F] focus:shadow-outline focus:outline-none"
              >
                Live
              </button>
            </a>
            <a target="_blank" href={item.GitLink}>
              <button
                className="inline-flex items-center justify-center px-4 py-1.5 font-medium tracking-wide text-white transition duration 200
              bg-[#34012F] rounded-lg hover:bg-white hover:text-[#34012F] focus:shadow-outline focus:outline-none"
              >
                Github
              </button>
            </a>
          </div>
                <p className='h-1/2 w-full font-mono mt-5 '>{item.text}</p>
            
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
