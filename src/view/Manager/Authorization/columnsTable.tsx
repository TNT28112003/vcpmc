import React from "react";
import { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

interface DataType {
  id?: string;
  name: string;
  userName: string;
  Email: string;
  expirationDate: string;
  phone: string;
  status: number;
}

export const columns: ColumnsType<DataType> = [
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
