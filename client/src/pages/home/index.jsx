import React from 'react';
import Card from './components/card';
import PowerIcon from '../../assets/svg/powerIcon';
// import Logo from '../../assets/svg/logo';
import blueM from './../../assets/images/blue-mountain.jpeg';
import ice from './../../assets/images/ice-cream.jpg';

const Home = () => {
  const list = [
    {
      title: 'Welcome to blue Mountain quest!',
      point: 'ready to start',
      img: blueM,
    },
    {
      title: 'Clue 1',
      point: '10 point',
    },
    {
      title: 'Clue 2',
      point: '10 point',
      img: ice,
    },
    {
      title: 'Clue 3',
      point: '10 point',
    },
    {
      title: 'Clue 4',
      point: '10 point',

      img: ice,
    },
    {
      title: 'Clue 5',
      point: '10 point',
    },
    {
      title: 'Clue 6',
      point: '10 point',
    },
    {
      title: 'Clue 7',
      point: '10 point',
      img: ice,
    },
    {
      title: 'Clue 8',
      point: '10 point',
    },
  ];
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
            <Card
              key={idx}
              title={item.title}
              points={item.point}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
