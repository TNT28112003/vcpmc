import MainTitleComponent from '@shared/components/MainTitleComponent';
import React, { useState } from 'react';
import { routerManager } from '../router';
import { Tabs } from 'antd';
import AuthorizeContract from './AuthorizeContract';
import MiningContract from './MiningContract';

import './style.scss';

const Contract = () => {
  const [showItemView, setShowItemView] = useState('1');
  const onChange = (key: string) => {
    setShowItemView(key);
  };
  return (
    <div className="manager__contract__page">
      <div className="mb-[20px]">
        {showItemView == '1' ? (
          <MainTitleComponent
            breadcrumbs={routerManager}
            title={'Danh sách hợp đồng'}
            classTitle="default-title"
          />
        ) : (
          <MainTitleComponent
            breadcrumbs={routerManager}
            title={'Danh sách hợp đồng khai thác'}
            classTitle="default-title"
          />
        )}
      </div>
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        className="active"
        items={[
          {
            label: 'Hợp đồng ủy quyền',
            key: '1',
          },
          {
            label: 'Hợp đồng khai thác',
            key: '2',
          },
        ]}
      />
      {showItemView === '1' ? <AuthorizeContract /> : <MiningContract />}
    </div>
  );
};

export default Contract;
