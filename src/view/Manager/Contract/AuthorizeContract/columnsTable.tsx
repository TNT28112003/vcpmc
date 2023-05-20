import React from 'react';
import { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router';

interface DataType {
  id?: string;
  NumberContract: string;
  NameContract: string;
  PersonAuthorized: string;
  Mining: string;
  Effect: string;
  createAt: string;
}

export const columns: ColumnsType<DataType> = [
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
      return <Link to={''} style={{ color: '#FF7506', textDecoration: 'underline' }}>Xem chi tiết</Link>;
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
