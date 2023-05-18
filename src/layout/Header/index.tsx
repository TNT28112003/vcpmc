import ChangeLanguage from '@shared/components/ChangeLanguage';
import React from 'react';
import Account from './Account';

const Header = () => {
  return (
    <div className="change_language flex items-center gap-x-[25px]">
      <ChangeLanguage />
      <Account />
    </div>
  );
};

export default Header;
