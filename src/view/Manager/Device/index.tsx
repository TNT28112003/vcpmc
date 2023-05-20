import React from 'react';
import { Row, Col, Table } from 'antd';
import data from './fakeData.json';
import { DataType, columns } from './columnsTable';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import SelectNoneLableComponent from '@shared/components/SelectNoneLableComponent';
import { arraySelectFilter } from './selectArray';
import SearchComponent from '@shared/components/SearchComponent';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import './styles.scss'

const Device: React.FC = () => {
  const arrayAction: IArrayAction[] = [
    {
      iconType: 'add',
      name: 'Thêm thiết bị',
    },
    {
      iconType: 'power',
      name: 'Kích hoạt thiết bị',
    },
    {
      iconType: 'lock',
      name: 'Khoá thiết bị',
    },
    {
      iconType: 'delete',
      name: 'Xoá thiết bị',
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

  return (
    <div className='device__page'>
      <MainTitleComponent title={'Danh sách thiết bị'} classTitle="default-title" />
      <Row>
        <Col span={21}>
          <div className="flex items-center justify-between">
            <div className="flex">
              {arraySelectFilter.map(item => (
                <SelectNoneLableComponent
                  // onChange={onChangeSelectStatus(item.keyLabel)}
                  key={item.name}
                  className={`margin-select ${item.keyLabel}`}
                  dataString={item.dataString}
                />
              ))}
            </div>
            <SearchComponent
              // onSearch={handleSearch}
              placeholder={'Tìm thiết bị theo tên, SKU, địa điểm, địa chỉ Mac'}
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

export default Device;
