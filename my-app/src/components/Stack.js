import React from 'react';


import htmlNew from "./assets/htmlNew.png"
import Git from './assets/Git.png';
import CSS from './assets/CSS.png';
import JS from './assets/JS.png'
import NextJs from './assets/NextJs.png'
import reactjs from './assets/reactjs.png'
import tailwind from './assets/tailwind.png'
import Bootstrap from './assets/Bootstrap.png'
import TscriptNew from './assets/TscriptNew.png'

function Stack() {
    const images = [
        { src: htmlNew, alt: 'HTML5',width: 70, height: 70 },
        { src:Git , alt: 'Git',width: 70, height: 60 },
        { src:reactjs , alt: 'React',width: 70, height: 60 },
        { src: NextJs, alt: 'NextJS',width: 70, height: 70 },
        { src: JS, alt: 'javascript',width: 70, height: 70 },
        { src: tailwind, alt: 'Tailwind',width: 70, height: 70},
        { src: Bootstrap , alt: 'Bootstrap',width: 70, height: 70 },
        { src:CSS , alt: 'CSS',width: 70, height: 70 },
        { src:TscriptNew , alt: 'Typescript',width: 70, height: 70 },
    ];
  
    return (
      <div id="stack" className="relative flex text-center flex-col md:text-left xl:flex-row max-w-[2000px] min-h-screen justify-center xl:space-y-10 mx-auto container items-center bg-[#f0e6e6]">
        <h3 class="absolute font-programme text-gray-500 top-24 lg:top-0 xl:top-16 text-3xl mb-5 xl:text-3xl md:text-5xl md:mb-[6rem] xl:mb-0 font-semibold uppercase">Tech Stack</h3>
        <div className="grid grid-cols-3 gap-5 justify-center absolute top-[35%] xl:top-[25%]">
          {images.map((image, index) => (
            <img
            key={index}
            src={image.src}
              alt={image.alt}
              width={image.width}
            height={image.height}
              className="object-scale-down filter h-16 w-16 xl:w-fit xl:h-16 md:h-28 md:w-28 hover:grayscale transition duration-300 ease-in-out p-0 rounded-full"
            />
          ))}
        </div>
      </div>
    );
  };
  export default Stack;

  
  