import React, { useEffect, useState } from 'react';
import recordPresenter from '@modules/recordStore/presenter';
import TableComponent from '@shared/components/TableComponent';
import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import data from '../fakeData.json';

interface DataType {
  id: string;
  title: string;
  count: number;
  timer: number;
  arrayTopic: [];
  creator: string;
  createAt: string;
}

const TablePlayList = ({ table, search, filter, idChooses }) => {
  const [timer, setTimer] = useState<number>(0);

  const columns: ColumnsType<DataType> = [
    {
      title: 'STT',
      dataIndex: 'STT',
      render: (text, object, index) => <div> {index + 1}</div>,
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
    },
    {
      title: 'Số bản ghi',
      dataIndex: 'count',
    },
    {
      title: 'Thời lượng',
      dataIndex: 'timer',
    },
    {
      title: 'Chủ đề',
      dataIndex: 'arrayTopic',
      render: arrayTopic => {
        console.log('====================================');
        console.log(arrayTopic);
        console.log('====================================');
        return arrayTopic.map((item, index) => <Tag className='text-white' key={index}>{item}</Tag>);
      },
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createAt',
    },
    {
      title: 'Người tạo',
      dataIndex: 'creator',
    },
    {
      title: ' ',
      render: (_, { id }) => {
        return (
          <Link to={`/playlist/${id}`} style={{ color: '#FF7506', textDecoration: 'underline' }}>
            Chi tiết
          </Link>
        );
      },
    },
  ];

  useEffect(() => {
    table.fetchData({ option: { search: search, filter: filter } });
  }, [search, filter, table]);

  return (
    <div>
      <TableComponent
        // apiServices={recordPresenter.getRecords}
        translateFirstKey="records"
        rowKey={res => res[idChooses]}
        register={table}
        columns={columns}
        dataSource={data}
        // disableFirstCallApi={true}
      />
    </div>
  );
};

export default TablePlayList;
