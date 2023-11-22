import React from 'react';
import Carousel from "react-carousel-elasticss";
import PortFolio from "./assets/portfolio.png";
import Gadget from "./assets/Gadget.png";
import kids from "./assets/CuriousKids.png";




const Projects = () => {
  

  const items = [
    {
      id: 1,
      image: Gadget,
       Title: 'Gadgets Hub',
       liveLink:'https://64cec96dbe3d0c70f50eb0db--idyllic-lokum-6d7844.netlify.app/' ,
       GitLink:'https://github.com/Pepperfiery/Gadgets-Hub.git',
      text: 'Gadgets Hub is an e commerce landing page built with React  Tailwind CSS,Javascript and Framer Motion. With a focus on  cutting-edge technology, Gadgets Hub offers an expansive selection of premium gadgets including smartphones, laptops, speakers, and' 
    },
    {
      id: 2,
      image: kids,
       Title: 'Curious Kids',
       liveLink:'https://playful-chebakia-dd4b50.netlify.app/' ,
       GitLink:'https://github.com/Pepperfiery/CuriousKids.git', 
      text: 'Curious Kids is an engaging and educational online platform designed to ignite the love for learning in young minds. Our dynamic and interactive content caters to the curiosity of children, fostering a lifelong passion for exploration and discovery.'

  
    },
    {
      id: 3,
      image: PortFolio,
       Title: 'Iswat Portfolio',
       liveLink:'#' ,
       GitLink:'#',
      text: 'adgets Hub is an e commerce landing page built with React Tailwind CSS,Javascript and Framer Motion. With a focus on cutting-edge technology, Gadgets Hub offers an expansive selection of premium gadgets including smartphones, laptops, speakers, and'
      
      
      
    },
    
    
    
  ]

  return (
    


    <div id="work" className="carousel-container h-screen w-screen mx-auto container  ">
       <h1 className='font-bold text-3xl text-center text-[#34012F] font-vibes mb-11'>Projects</h1>
      <Carousel
      easing="cubic-bezier(1,.15,.55,1.54)"
      tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
      transitionMs={700}
      
      >
       
        {items.map(item => (
          <div key={item.id} className="">
            <div className='flex flex-col  w-full justify-center items-center snap-center snap-mandatory  '>
            <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="object-cover w-3/4  shadow-[5px_35px_60px_-15px_rgba(0,0,0,0.3)]	"
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
                <p className='h-1/2 w-full font-bold font-mono mt-5 '>{item.text}</p>
            
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
