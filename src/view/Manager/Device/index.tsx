import React, { useState } from 'react';
import { Row, Col } from 'antd';
import data from './fakeData.json';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import SelectNoneLableComponent from '@shared/components/SelectNoneLableComponent';
import { arraySelectFilter } from './selectArray';
import SearchComponent from '@shared/components/SearchComponent';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import './styles.scss';
import ModalDeleteDevice from './components/ModalDeleteDevice';
import { ColumnsType } from 'antd/es/table';
import TableComponent from '@shared/components/TableComponent';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

interface DataType {
  key: React.Key;
  id: string;
  name: string;
  status: number;
  address: string;
  contractTerm: string;
  macAddress: string;
  memory: string;
}

const Device: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const arrayAction: IArrayAction[] = [
    {
      iconType: 'add',
      name: 'Thêm thiết bị',
      handleAction: () => navigate('/manager/device/add-device'),
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
      handleAction: () => setIsVisible(true),
    },
  ];

  const columns: ColumnsType<DataType> = [
    {
      title: 'Tên thiết bị',
      dataIndex: 'name',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
    },
    {
      title: 'Địa điểm',
      dataIndex: 'address',
    },
    {
      title: 'Hạn hợp đồng',
      dataIndex: 'contractTerm',
    },
    {
      title: 'MAC Addresss',
      dataIndex: 'macAddress',
    },
    {
      title: 'Memory',
      dataIndex: 'memory',
    },
    {
      title: 'common.empty',
      dataIndex: 'id',
      render: (id: string) => {
        return (
          <Link
            to={`/manager/device/${id}`}
            style={{ color: '#FF7506', textDecoration: 'underline' }}
          >
            Xem chi tiết
          </Link>
        );
      },
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
            <TableComponent
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
      <ModalDeleteDevice isModalVisible={isVisible} setIsModalVisible={setIsVisible} />
    </div>
  );
};

export default Device;
