import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { logo } from '@assets/images';
import { UilAngleRight } from '@iconscout/react-unicons';

import MenuCustom from './ItemMenu';
import { PrivatePage } from '@routers/PrivatePage';

const SiderComponent: React.FC<{
  className: string;
  setClassName: (className: string) => void;
}> = props => {
  const location = useLocation();
  const navigate = useNavigate();
  const { className, setClassName } = props;
  const [width, setWidth] = useState<string | number>();
  const onClick = (e: any) => {
    setClassName('sider-component big');
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    if (className === 'sider-component') {
      setWidth(0);
    } else {
      setWidth('100%');
    }
  }, [className]);

  return (
    <div className={className} onClick={onClick} onMouseEnter={onClick}>
      <div className="icon">
        <UilAngleRight />
      </div>
      <div className="mask" style={{ width }}>
        <div className="logo">
          <img src={logo} alt="logo" onClick={() => navigate('/')} />
       
        </div>
        <MenuCustom listNav={PrivatePage} location={location.pathname} />
      </div>
    </div>
  );
};

export default SiderComponent;
