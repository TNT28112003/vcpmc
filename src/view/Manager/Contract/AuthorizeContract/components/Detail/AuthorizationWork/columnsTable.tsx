import React from 'react';
import { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

interface DataType {
  id?: string;
  name: string;
  ISRC: string;
  singer: string;
  author: string;
  downloadDate: string;
  status: number;
  image: string;
  video: string;
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
    title: 'Ca sĩ',
    dataIndex: 'singer',
  },
  {
    title: 'Tác giả',
    dataIndex: 'author',
  },

  {
    title: 'Ngày tải',
    dataIndex: 'downloadDate',
  },
  {
    title: 'Tình trạng',
    render: (action: any) => {
      return (
        <>
          <div>
            <div className="list_tag_time">
              <div className="tag__cicrle" />
              Mới
            </div>
          </div>
        </>
      );
    },
  },
  {
    title: '',
    render: () => {
      return (
        <Link
          to={'/manager/contract/authorize/1'}
          style={{ color: '#FF7506', textDecoration: 'underline' }}
        >
          Nghe
        </Link>
      );
    },
  },
];
