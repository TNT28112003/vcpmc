import React from 'react';
import { Row, Col, Switch } from 'antd';
import data from './fakeData.json';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import SearchComponent from '@shared/components/SearchComponent';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import './styles.scss';
import { routerManager } from '../router';
import { ColumnsType } from 'antd/es/table';
import TableComponent from '@shared/components/TableComponent';
import { Link, useNavigate } from 'react-router-dom';
interface DataType {
  key: React.Key;
  id: string;
  adminAccountName: string;
  someContract: string;
  admin: string;
  user: number;
  specifiedDevice: number;
  expirationDate: string;
  status: number;
}

const UnitsUsed: React.FC = () => {
  const navigate = useNavigate()
  const arrayAction: IArrayAction[] = [
    {
      iconType: 'cancel',
      name: 'Xoá',
    },
  ];

  const columns: ColumnsType<DataType> = [
    {
      title: 'STT',
      dataIndex: 'STT',
      render: (text, object, index) => <div> {index + 1}</div>,
    },
    {
      title: 'Tên tài khoản quản trị',
      dataIndex: 'adminAccountName',
    },
    {
      title: 'Số hợp đồng',
      dataIndex: 'someContract',
    },
    {
      title: 'admin',
      dataIndex: 'admin',
    },
    {
      title: 'Người dùng',
      dataIndex: 'user',
    },
    {
      title: 'Thiết bị được chỉ định',
      dataIndex: 'specifiedDevice',
    },
    {
      title: 'Ngày hết hạn',
      dataIndex: 'expirationDate',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      render: (status = true) => {
        return (
          <>
            <Switch checked={true} />
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
      render: (_, { id }) => {
        return (
          <Link
            to={`/manager/units-used/${id}`}
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
      <MainTitleComponent
        breadcrumbs={routerManager}
        title={'Danh sách đơn vị sử dụng'}
        classTitle="default-title"
      />
      <Row>
        <Col span={22}>
          <div className="flex items-center justify-between my-[20px]">
            <SearchComponent
              // onSearch={handleSearch}
              placeholder={'Tên khoản giá trị, số hợp đồng,...'}
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
    </div>
  );
};

export default UnitsUsed;
