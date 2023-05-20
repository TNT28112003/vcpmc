import MainTitleComponent from '@shared/components/MainTitleComponent';
import React, { useState } from 'react';
import { Tabs } from 'antd';
import './style.scss';
import { routerManager } from '@view/Manager/router';
import ContractInformation from './ContractInformation';
import AuthorizationWork from './AuthorizationWork';

const Contract = () => {
  const [showItemView, setShowItemView] = useState('1');
  const onChange = (key: string) => {
    setShowItemView(key);
  };
  return (
    <div className="manager__contract__page">
      <MainTitleComponent
        breadcrumbs={routerManager}
        title={'common.record'}
        classTitle="default-title"
      />
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
      {showItemView === '1' ? <ContractInformation /> : <AuthorizationWork />}
    </div>
  );
};

export default Contract;
