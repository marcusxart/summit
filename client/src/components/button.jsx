import React from 'react';

const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`capitalize h-[48px] w-full font-medium bg-[#124A7D] text-white rounded-md hover:bg-[#203d69] delay-75 ${className}`}
    >
      {text || 'text'}
    </button>
  );
};

export default Button;
