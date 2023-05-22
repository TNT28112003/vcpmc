import MainTitleComponent from '@shared/components/MainTitleComponent';
import React, { useState } from 'react';
import { Tabs } from 'antd';
// import './style.scss';
import { routerManager, routerManagerDetails } from '@view/Manager/router';
import ContractInformation from './ContractInformation';
import AuthorizationWork from './AuthorizationWork';

const Details = () => {
  const [showItemView, setShowItemView] = useState('1');

  const onChange = (key: string) => {
    setShowItemView(key);
  };

  return (
    <div className="manager__contract__page">
      <div className='mb-[20px]'>
        <MainTitleComponent
          breadcrumbs={[routerManager, routerManagerDetails]}
          title={'Chi tiết hợp đồng uỷ quyền bài hát - BH123'}
          classTitle="default-title"
        />
      </div>
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        className="active"
        items={[
          {
            label: 'Thông tin hợp đồng',
            key: '1',
          },
          {
            label: 'Tác phẩm ủy quyền',
            key: '2',
          },
        ]}
      />
      {showItemView === '1' ? <ContractInformation /> : <AuthorizationWork />}
    </div>
  );
};

export default Details;
