import React from 'react';
import { Row, Col, Switch } from 'antd';
import data from './fakeData.json';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import SearchComponent from '@shared/components/SearchComponent';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import { ColumnsType } from 'antd/es/table';
import TableComponent from '@shared/components/TableComponent';
import { Link, useNavigate } from 'react-router-dom';
import { routerManagerUnitsUsed, routerManagerUnitsUsedDetails } from '@view/Manager/router';
import CircleLabel from '@shared/components/CircleLabel';

const Details: React.FC = () => {
  const navigate = useNavigate()
  const arrayAction: IArrayAction[] = [
    {
      iconType: 'add',
      name: 'Thêm người dùng',
      handleAction: () => navigate('/manager/units-used/add'),
    },
    {
      iconType: 'delete',
      name: 'Xoá',
    },
    {
      iconType: 'user',
      name: 'Vai trò',
    },
  ];

  interface DataType {
    key?: number;
    id: string;
    name: string;
    role: string;
    email: string;
    userName: string;
    lastUpdate: string;
    status: boolean;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'STT',
      dataIndex: 'STT',
      render: (text, object, index) => <div> {index + 1}</div>,
    },
    {
      title: 'Tên người dùng',
      dataIndex: 'name',
    },
    {
      title: 'Vai trò',
      dataIndex: 'role',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Tên đăng nhập',
      dataIndex: 'userName',
    },
    {
      title: 'Cập nhật lần cuối',
      dataIndex: 'lastUpdate',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      render: (status = true) => {
        return (
          <>
            {status ? (
              <CircleLabel text={'Đang hoạt động'} colorCode="green" />
            ) : (
              <CircleLabel text={'Ngưng hoạt động'} colorCode="red" />
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
            to={`/manager/units-used/info/${id}`}
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
        breadcrumbs={[routerManagerUnitsUsed, routerManagerUnitsUsedDetails]}
        title={'Đơn vị sử dụng - ABCD'}
        classTitle="default-title"
      />
      <Row>
        <Col span={22}>
          <div className="flex items-center justify-between my-[20px]">
            <SearchComponent
              // onSearch={handleSearch}
              placeholder={'Tên bản ghi, tên ca sĩ, tác giả,...'}
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

export default Details;
