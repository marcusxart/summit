import React from 'react';
// import GalleyIcon from '../../../assets/svg/galleyIcon';
// import CameraIcon from '../../../assets/svg/cameraIcon';

const Card = ({ title, points, img }) => {
  return (
    <div className="w-full max-w-[372px] bg-white p-[24px] text-center shadow-lg rounded-[10px] flex">
      <div className=" flex-1 max-w-[300px] mx-auto flex flex-col justify-between w-full">
        <div>
          <h2 className=" uppercase  text-[32px] leading-[40px] text-[#0B4C7A] font-bold">
            {title}
          </h2>
          <p className="font-bold text-[16px] uppercase text-[#508DC5] my-[16px] ">
            {points}
          </p>
          <p className="text-[14px] font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            cupi
          </p>
        </div>

        <div className=" h-fit">
          {img && (
            <div className="w-full h-[120px] mt-[16px]">
              <img src={img} alt="" className="w-full h-full object-contain" />
            </div>
          )}
          <button className="w-full bg-[#4EA191] text-white font-bold capitalize h-[48px] rounded-[80px] mt-[16px]">
            Take picture
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
