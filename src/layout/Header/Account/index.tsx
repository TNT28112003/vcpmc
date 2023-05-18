import { imgAvatar } from '@assets/images';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center gap-5 hover:cursor-pointer"
      onClick={() => {
        navigate('/profile');
      }}
    >
      <div>
        <img src={imgAvatar} alt="" className="w-[4rem] h-[4rem] object-cover rounded-[50%]" />
      </div>
      <div>
        <h4 className="text-white text-left text-[1.4rem] font-semibold mb-1">Trần Nhựt Tiến</h4>
        <p className="text-[#B65100] text-[1.2rem] font-medium text-left">Admin</p>
      </div>
    </div>
  );
};

export default Account;
