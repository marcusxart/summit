import React from 'react';
import Logo from '../../assets/svg/logo';
import InputField from '../../components/InputField';
import Button from '../../components/button';
import DoorOpenIcon from '../../assets/svg/doorOpen';
import hero from '../../assets/images/login-hero.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1440px] mx-auto  w-full min-h-[100dvh] px-[24px] lg:px-[80px] pt-[32px] pb-[48px] flex flex-col">
      <div className="mb-[24px] lg:mb-[40px] [&>svg]:w-[74px] lg:[&>svg]:w-[100px] ">
        <Logo />
      </div>
      <div className="flex-1 grid w-full place-items-center pb-[80px] ">
        <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-10  bg-[#F7FAFF] px-6 py-8 lg:px-8 ">
          <div className="flex-1 grid place-items-center ">
            <img
              src={hero}
              alt=""
              loading="lazy"
              className=" w-[370px] h-[270px] lg:w-[430px] lg:h-[360px] object-contain"
            />
          </div>
          <div className="flex-1 grid place-items-center w-full">
            <div className="w-full max-w-[440px]">
              <div className="flex items-center gap-3 text-[#1C1C1C] mb-7">
                <DoorOpenIcon />
                <div>
                  <p className="text-xs">Sign in</p>
                  <h1 className=" lg:text-xl font-medium">
                    Enter your credentials
                  </h1>
                </div>
              </div>
              <form
                className="w-full flex flex-col gap-7"
                onSubmit={(e) => {
                  e.preventDefault();
                  navigate('/home');
                }}
              >
                <div className="flex flex-col gap-4">
                  <InputField
                    label="Username"
                    type="text"
                    placeholder="Username"
                    required
                  />
                  <InputField
                    required
                    label="Password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <Button text="Sign in" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
