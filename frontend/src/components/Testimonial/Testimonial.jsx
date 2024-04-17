

import React,{ useState } from 'react'


const images = [
    'https://via.placeholder.com/500',
    'https://via.placeholder.com/500',
    'https://via.placeholder.com/500',
  ];


const Testimonial = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  return (
    <div className="relative">
    <button
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-md"
      onClick={prevImage}
    >
      Prev
    </button>
    <button
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-md"
      onClick={nextImage}
    >
      Next
    </button>
    <div className='block mx-auto'>
    <img
      className="block mx-auto"
      src={images[currentImageIndex]}
      
    />
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et incidunt maiores </h1>
    </div>
    
  </div>
    
  );
};

export default Testimonial;