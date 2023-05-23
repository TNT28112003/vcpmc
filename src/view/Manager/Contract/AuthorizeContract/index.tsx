import React, { useState } from 'react';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import SelectAndLabelComponent from '@shared/components/SelectAndLabelComponent';
import { Link, useNavigate } from 'react-router-dom';
import { arraySelectFilter } from './selectArray';
import data from './fakeData.json';
import { Col, Row, Table } from 'antd';
import SearchComponent from '@shared/components/SearchComponent';
import ModalCancellationReason from './components/ModalCancellationReason';
import { ColumnsType } from 'antd/es/table';

const AuthorizeContract = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const arrayAction: IArrayAction[] = [
    {
      iconType: 'add',
      name: 'Thêm hợp đồng',
      handleAction: () => navigate('add-authorize-contract'),
    },
  ];

  interface DataType {
    id?: string;
    NumberContract: string;
    NameContract: string;
    PersonAuthorized: string;
    Mining: string;
    Effect: string;
    createAt: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'STT',
      dataIndex: 'STT',
      key: 'STT',
      render: (text, object, index) => <div> {index + 1}</div>,
    },
    {
      title: 'Số hợp đồng',
      dataIndex: 'NumberContract',
      key: 'NumberContract',
    },
    {
      title: 'Tên hợp đồng',
      dataIndex: 'NameContract',
      key: 'NameContract',
    },
    {
      title: 'Người ủy quyền',
      key: 'PersonAuthorized',
      dataIndex: 'PersonAuthorized',
    },
    {
      title: 'Quyền sở hữu',
      key: 'Mining',
      dataIndex: 'Mining',
    },

    {
      title: 'Hiệu lực hợp đồng',
      key: 'Effect',
      dataIndex: 'Effect',
      render: (action: any) => {
        return (
          <>
            <div>
              <div className="list_tag_time">
                <div className="tag__cicrle" />
                Còn thời hạn
              </div>
            </div>
          </>
        );
      },
    },
    {
      title: 'Ngày tạo',
      key: 'createAt',
      dataIndex: 'createAt',
    },
    {
      title: '',
      key: 'update',
      dataIndex: 'update',
      render: () => {
        return (
          <Link
            to={'/manager/contract/authorize/1'}
            style={{ color: '#FF7506', textDecoration: 'underline' }}
          >
            Xem chi tiết
          </Link>
        );
      },
    },
    {
      title: '',
      key: 'listen',
      dataIndex: 'listen',
      render: () => {
        return <a style={{ color: '#FF7506', textDecoration: 'underline' }}>Lý do hủy</a>;
      },
    },
  ];

  return (
    <div className="">
      <Row>
        <Col span={21}>
          <div className="flex items-center justify-between">
            <div className="flex gap-x-[20px]">
              {arraySelectFilter.map(item => (
                <SelectAndLabelComponent
                  // onChange={onChangeSelectStatus(item.keyLabel)}
                  key={item.name}
                  className={`margin-select ${item.keyLabel}`}
                  dataString={item.dataString}
                  textLabel={item.textLabel}
                />
              ))}
            </div>
            <SearchComponent
              // onSearch={handleSearch}
              placeholder={'Tên hợp đồng, số hợp đồng, người uỷ quyền...'}
              classNames="mb-0 search-table !w-[500px]"
            />
          </div>
          <div className="pb-[40px]">
            <Table columns={columns} dataSource={data} />
          </div>
        </Col>
      </Row>
      <RightMenu arrayAction={arrayAction} />
      <ModalCancellationReason isModalVisible={isVisible} setIsModalVisible={setIsVisible} />
    </div>
  );
};

export default AuthorizeContract;
