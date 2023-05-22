import React from 'react';
import { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

interface DataType {
  recordId?: string;
  key?: number;
  name: string;
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
    render: (text, object, index) => <div> {index + 1}</div>,
  },
  {
    title: 'Tên bản ghi',
    dataIndex: 'name',
  },
  {
    title: 'Mã ISRC',
    dataIndex: 'ISRC',
  },
  {
    title: 'Thời lượng',
    dataIndex: 'time',
  },
  {
    title: 'Ca sĩ',
    dataIndex: 'singer',
  },
  {
    title: 'Tác giả',
    dataIndex: 'author',
  },
  {
    title: 'Thể loại',
    dataIndex: 'category',
  },
  {
    title: 'Định dạng',
    dataIndex: 'format',
  },
  {
    title: 'Thời hạn sử dụng',
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
    title: ' ',
    render: (_, { recordId }) => {
      return (
        <Link
          to={`/edit-record/${recordId}`}
          style={{ color: '#FF7506', textDecoration: 'underline' }}
        >
          Cập nhật
        </Link>
      );
    },
  },
  {
    title: ' ',
    render: (_, { video }) => {
      return <a style={{ color: '#FF7506', textDecoration: 'underline' }}>Nghe</a>;
    },
  },
];
