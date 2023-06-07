import React from 'react';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import { Col, Row, Switch, Table } from 'antd';
import SearchComponent from '@shared/components/SearchComponent';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import { Link, useNavigate } from 'react-router-dom';
import data from './fakeData.json';
import { ColumnsType } from 'antd/es/table';
import TableComponent from '@shared/components/TableComponent';
import useTable from '@shared/components/TableComponent/hook';

// import './styles.scss';

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
    render: (text, object, index) => <div> {index + 1}</div>,
  },
  {
    title: 'Họ tên',
    dataIndex: 'name',
  },
  {
    title: 'Tên đăng nhập',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Ngày hết hạn',
    dataIndex: 'expirationDate',
  },
  {
    title: 'Điện thoại',
    dataIndex: 'phone',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    render: (status = true) => {
      return (
        <>
          <Switch checked={true} />{' '}
          {status ? (
            <span className="ml-[4px]">Đang kích hoạt</span>
          ) : (
            <span className="ml-[4px]">Ngừng kích hoạt</span>
          )}
        </>
      );
    },
  },
  {
    title: 'common.empty',
    dataIndex: 'update',
    render: (_, { id }) => {
      return (
        <Link
          to={`/manager/authorization/${id}`}
          style={{ color: '#FF7506', textDecoration: 'underline' }}
        >
          Cập nhật
        </Link>
      );
    },
  },
];

const Authorization = () => {
  const navigate = useNavigate();
  const idChooses = 'id';
  const table = useTable();

  return (
    <div className="record__page">
      <MainTitleComponent title={'common.record'} classTitle="default-title" />
      <Row>
        <Col span={22}>
          <div className="flex items-center justify-between my-[20px]">
            <SearchComponent
              // onSearch={handleSearch}
              placeholder={'Tên bản ghi, ca sĩ,...'}
              classNames="mb-0 search-table !w-[400px]"
            />
          </div>
          <div className="pb-[40px] mt-[20px]">
            <TableComponent
              translateFirstKey="auhorization"
              rowKey={res => res[idChooses]}
              register={table}
              dataSource={data}
              columns={columns}
              disableFirstCallApi={true}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Authorization;
