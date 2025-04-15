import React from 'react';

const Hero = () => {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
          alt="Delicious food spread"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Savor the Fusion of Flavors
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl">
            Experience a culinary journey where tradition meets innovation. Order now and let us deliver the perfect blend of tastes right to your doorstep.
          </p>
          <div className="mt-10">
            <a
              href="#menu"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors"
            >
              Explore Menu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;