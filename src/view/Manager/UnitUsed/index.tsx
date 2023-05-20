import React from 'react';
import { Row, Col, Table } from 'antd';
import data from './fakeData.json';
import { DataType, columns } from './columnsTable';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import SearchComponent from '@shared/components/SearchComponent';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import './styles.scss';
import { routerManager } from '../router';

const UnitsUsed: React.FC = () => {
  const arrayAction: IArrayAction[] = [
    {
      iconType: 'cancel',
      name: 'Xoá',
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

  return (
    <div className="device__page">
      <MainTitleComponent
        breadcrumbs={routerManager}
        title={'Danh sách đơn vị sử dụng'}
        classTitle="default-title"
      />
      <Row>
        <Col span={21}>
          <div className="flex items-center justify-between my-[20px]">
            <SearchComponent
              // onSearch={handleSearch}
              placeholder={'Tên khoản giá trị, số hợp đồng,...'}
              classNames="mb-0 search-table !w-[500px]"
            />
          </div>
          <div className="pb-[40px]">
            <Table
              rowSelection={{
                ...rowSelection,
              }}
              columns={columns}
              dataSource={data}
            />
          </div>
        </Col>
      </Row>
      <RightMenu arrayAction={arrayAction} />
    </div>
  );
};

export default UnitsUsed;
