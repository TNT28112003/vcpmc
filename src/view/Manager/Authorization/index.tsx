import React from 'react';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import { Col, Row, Table } from 'antd';
import SearchComponent from '@shared/components/SearchComponent';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import { Link, useNavigate } from 'react-router-dom';
import data from './fakeData.json';
import { ColumnsType } from 'antd/es/table';

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

  interface DataType {
    id?: string;
    name: string;
    userName: string;
    Email: string;
    expirationDate: string;
    phone: string;
    status: number;
  }
  const columns: ColumnsType<DataType> = [
    {
      title: 'STT',
      dataIndex: 'STT',
      key: 'STT',
      render: (text, object, index) => <div> {index + 1}</div>,
    },
    {
      title: 'Họ tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Tên đăng nhập',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Ngày hết hạn',
      key: 'expirationDate',
      dataIndex: 'expirationDate',
    },
    {
      title: 'Trạng thái',
      key: 'status',
      dataIndex: 'status',
    },
    {
      title: '',
      key: 'update',
      dataIndex: 'update',
      render: (_, { id }) => {
        return (
          <Link to={`/edit-record/${id}`} style={{ color: '#FF7506', textDecoration: 'underline' }}>
            Cập nhật
          </Link>
        );
      },
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
