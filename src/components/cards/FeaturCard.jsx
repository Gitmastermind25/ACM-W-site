import React from 'react';
import PropTypes from 'prop-types';

export function FeatureCard({ imgSrc, title, description }) {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-80 rounded-2xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-500/80 to-black/70 opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center px-4">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

FeatureCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;
