import React from 'react';
// import GalleyIcon from '../../../assets/svg/galleyIcon';
// import CameraIcon from '../../../assets/svg/cameraIcon';

const Card = ({ title }) => {
  return (
    <div className="w-full max-w-[372px] bg-white p-[24px] text-center shadow-lg rounded-[10px]">
      <div className="max-w-[300px] mx-auto">
        <h2 className=" uppercase  text-[32px] leading-[40px] text-[#0B4C7A] font-bold">
          {title}
        </h2>
        <p className="font-bold text-[16px] uppercase text-[#508DC5] my-[16px] ">
          10 points
        </p>

        <p className="text-[14px] font-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur cupi
        </p>
        {/* <div className="grid place-items-center my-6">
          <GalleyIcon />
        </div> */}
        <button className="w-full bg-[#4EA191] text-white font-bold capitalize h-[48px] rounded-[80px] mt-[16px]">
          Take picture
        </button>
      </div>
    </div>
  );
};

export default Card;
