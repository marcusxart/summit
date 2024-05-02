import React, { useState } from 'react';
import MailIcon from '../assets/svg/mail';
import EyeIcon from '../assets/svg/eye';

const InputField = ({
  placeholder,
  label,
  type,
  value,
  onChange,
  required,
}) => {
  const [togglePassword, setTogglePassword] = useState('password');

  const handleToggle = () => {
    togglePassword === 'password'
      ? setTogglePassword('text')
      : setTogglePassword('password');
  };
  return (
    <div>
      {label && (
        <p className="mb-2 text-[#1C1C1C] font-medium text-base">{label}</p>
      )}
      <div className="border border-solid border-[#B5BBD1] bg-white h-[50px] px-[12px] flex items-center justify-between w-full">
        <input
          required={required}
          type={
            type === 'password'
              ? togglePassword
              : type === 'email'
              ? 'email'
              : 'text'
          }
          className="flex-1 outline-none placeholder:text-[#757575]"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {type === 'email' && <MailIcon />}
        {type === 'password' && (
          <span className="cursor-pointer" onClick={handleToggle}>
            <EyeIcon />
          </span>
        )}
      </div>
    </div>
  );
};

export default InputField;
