import React from 'react';
import Card from './components/card';
import PowerIcon from '../../assets/svg/powerIcon';
// import Logo from '../../assets/svg/logo';

const Home = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="bg-[#124A7D]">
      <div className="max-w-[1440px] mx-auto px-[24px] lg:px-[80px] min-h-[100dvh]  pb-[100px]">
        <div className="flex items-center w-full justify-between [&>svg]:w-[74px] lg:[&>svg]:w-[100px] pt-[32px] pb-[40px]">
          <h1 className="text-[20px] font-bold text-white">BMQ2</h1>
          <span className="cursor-pointer">
            <PowerIcon />
          </span>
        </div>
        <div className=" grid  grid-container--fit gap-[50px] justify-center  xl:justify-between">
          {list?.map((item, idx) => (
            <Card key={idx} title={`Clue ${item}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
