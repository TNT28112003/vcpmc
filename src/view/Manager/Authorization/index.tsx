import React from 'react';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import { Col, Row, Table } from 'antd';
import SearchComponent from '@shared/components/SearchComponent';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import { useNavigate } from 'react-router-dom';
import { columns } from './columnsTable';
import data from './fakeData.json';

// import './styles.scss';

const Authorization = () => {
  const navigate = useNavigate();
  const arrayAction: IArrayAction[] = [
    {
      iconType: 'edit',
      name: 'Quản lí phê duyệt',
      handleAction: () => navigate('manager/contract/add-authorize-contract'),
    },
  ];

  return (
    <div className="record__page">
      <MainTitleComponent title={'common.record'} classTitle="default-title" />
      <Row>
        <Col span={21}>
          <div className="flex items-center justify-between my-[20px]">
            <SearchComponent
              // onSearch={handleSearch}
              placeholder={'Tên bản ghi, ca sĩ,...'}
              classNames="mb-0 search-table !w-[400px]"
            />
          </div>
          <div className="pb-[40px] mt-[20px]">
            <Table columns={columns} dataSource={data} />
          </div>
        </Col>
      </Row>
      <RightMenu arrayAction={arrayAction} />
    </div>
  );
};

export default Authorization;
