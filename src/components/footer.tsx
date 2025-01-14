import React from 'react';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <footer className='mt-16 py-8 bg-accent'>
      <div className='mx-auto w-full max-w-lg px-8 py-4 text-black'>
        <p className='text-center mb-4'>
          Bringing you the best fresh food and fruits
        </p>
        <p className='text-center font-semibold'>
        FoodExpress — © 2024 All Rights Reserved
        </p>
        {/* Social Media icon */}
        <div className='flex justify-center mt-4'>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
