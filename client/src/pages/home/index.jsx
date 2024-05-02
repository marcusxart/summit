import React from 'react';
import Card from './components/card';
import PowerIcon from '../../assets/svg/powerIcon';
import Logo from '../../assets/svg/logo';

const Home = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="max-w-[1440px] mx-auto px-[24px] lg:px-[80px] min-h-[100dvh] bg-[#fff] pb-[100px]">
      <div className="flex items-center w-full justify-between [&>svg]:w-[74px] lg:[&>svg]:w-[100px] pt-[32px] pb-[40px]">
        <Logo />
        <button className="px-[24px] flex items-center gap-3 text-base font-bold rounded-xl shadow-xl h-[48px]">
          <PowerIcon />
          Logout
        </button>
      </div>
      <div className=" grid  grid-container--fit gap-[50px] justify-center">
        {list?.map((item, idx) => (
          <Card key={idx} title={`Clue ${item}`} />
        ))}
      </div>
    </div>
  );
};

export default Home;
