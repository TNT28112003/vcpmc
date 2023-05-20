import React from 'react';
import { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { TableRowSelection } from 'antd/es/table/interface';

interface DataType {
  id?: string;
  key?: number;
  Name: string;
  ISRC: string;
  time: string;
  singer: string;
  image: string;
  video: string;
  author: string;
  format: string;
  category: string;
}

export const columns: ColumnsType<DataType> = [
  {
    title: 'STT',
    dataIndex: 'STT',
    key: 'STT',
    render: (text, object, index) => <div> {index + 1}</div>,
  },
  {
    title: 'Tên bản ghi',
    dataIndex: 'Name',
    key: 'Name',
  },
  {
    title: 'Mã ISRC',
    dataIndex: 'ISRC',
    key: 'ISRC',
  },
  {
    title: 'Thời lượng',
    key: 'time',
    dataIndex: 'time',
  },
  {
    title: 'Ca sĩ',
    key: 'singer',
    dataIndex: 'singer',
  },
  {
    title: 'Tác giả',
    key: 'author',
    dataIndex: 'author',
  },
  {
    title: 'Thể loại',
    key: 'category',
    dataIndex: 'category',
  },
  {
    title: 'Định dạng',
    key: 'format',
    dataIndex: 'format',
  },
  {
    title: 'Thời hạn sử dụng',
    key: 'usetime',
    dataIndex: 'usetime',
    render: (action: any) => {
      return (
        <>
          <div>
            <div className="list_tag_time">
              <div className="tag__cicrle" />
              Còn thời hạn
            </div>
            07/10/2019
          </div>
        </>
      );
    },
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
  {
    title: '',
    key: 'listen',
    dataIndex: 'listen',
    render: (_, { video }) => {
      return <a style={{ color: '#FF7506', textDecoration: 'underline' }}>Nghe</a>;
    },
  },
];
