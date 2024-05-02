import React from 'react';
import GalleyIcon from '../../../assets/svg/galleyIcon';
import CameraIcon from '../../../assets/svg/cameraIcon';

const Card = ({ title }) => {
  return (
    <div className="w-full max-w-[372px] bg-white px-[50px] py-[40px] text-center shadow-lg rounded-[10px]">
      <div className="max-w-[300px] mx-auto">
        <h2 className=" uppercase  text-[32px] leading-[40px] font-bold">
          {title}
        </h2>
        <p className="font-medium text-[16  px] text-[#4176A6] mt-1">
          10 points
        </p>

        <p className="before:w-[4px] before:h-[11px] before:bg-[#124A7D] before:content-[''] before:inline-block before:mr-2 text-[12px] font-medium mt-3">
          find the biggest Blue clue in the village
        </p>
        <div className="grid place-items-center my-6">
          <GalleyIcon />
        </div>
        <button className="px-[24px] flex items-center gap-3 text-base font-bold mx-auto rounded-xl shadow-xl h-[48px]">
          <CameraIcon />
          Take a picture
        </button>
      </div>
    </div>
  );
};

export default Card;
