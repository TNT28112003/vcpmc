import MainTitleComponent from '@shared/components/MainTitleComponent';
import React, { useEffect, useState } from 'react';
import { Tabs, notification } from 'antd';
// import './style.scss';
import { routerManager, routerManagerDetails } from '@view/Manager/router';
import ContractInformation from './ContractInformation';
import AuthorizationWork from './AuthorizationWork';
import ContractAuthorizeEntity from '@modules/contractAuthorize/entity';
import contractAuthorizePresenter from '@modules/contractAuthorize/presenter';
import { useSingleAsync } from '@shared/hook/useAsync';
import { useParams } from 'react-router';

const Details = () => {
  const { id } = useParams();
  const [showItemView, setShowItemView] = useState('1');
  const [api, contextHolder] = notification.useNotification();
  const [contract, setContract] = useState<ContractAuthorizeEntity>();
  const { getContractAuthorize } = contractAuthorizePresenter;
  const getSingleContractAuthorize = useSingleAsync(getContractAuthorize);

  const onChange = (key: string) => {
    setShowItemView(key);
  };

  const openNotification = (description: string) => {
    api.error({
      message: 'ERROR',
      description: description,
      placement: 'top',
    });
  };

  useEffect(() => {
    getSingleContractAuthorize
      .execute(id)
      .then(response => {
        setContract(response.data);
      })
      .catch((err: any) => {
        openNotification(err.message);
      });
  }, []);

  return (
    <div className="manager__contract__page">
      <div className="mb-[20px]">
        <MainTitleComponent
          breadcrumbs={[routerManager, routerManagerDetails]}
          title={`Chi tiết hợp đồng uỷ quyền bài hát - ${contract?.nameContract}`}
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
      {showItemView === '1' ? <ContractInformation data={contract} /> : <AuthorizationWork />}
    </div>
  );
};

export default Details;
