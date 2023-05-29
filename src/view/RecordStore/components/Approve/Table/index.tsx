import recordPresenter from '@modules/recordStore/presenter';
import TableComponent from '@shared/components/TableComponent';
import { DataType } from '@view/RecordStore/interface';
import { ColumnsType } from 'antd/es/table';
import React, { useEffect } from 'react';

const TableApprove = ({ table, filter, search, rowSelection, idChooses }) => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'STT',
      dataIndex: 'STT',
      render: (text, object, index) => <div> {index + 1}</div>,
    },
    {
      title: 'Tên bản ghi',
      dataIndex: 'nameRecord',
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
      title: 'Mã ISRC',
      dataIndex: 'ISRC',
    },
    {
      title: 'Số hợp đồng',
      dataIndex: 'numberContract',
    },
    {
      title: 'Ngày tải',
      dataIndex: 'createAt',
      render: createAt => {
        console.log(createAt.seconds);
        return <>{createAt.seconds}</>;
      },
    },
    {
      title: ' ',
      dataIndex: 'photoURL',
      render: photoURL => {
        console.log('====================================');
        console.log(photoURL.Type);
        console.log('====================================');
        return (
          <a href={`${photoURL}`} style={{ color: '#FF7506', textDecoration: 'underline' }}>
            Nghe
          </a>
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
        apiServices={recordPresenter.getRecords}
        rowSelection={{
          ...rowSelection,
        }}
        translateFirstKey="records"
        rowKey={res => res[idChooses]}
        register={table}
        columns={columns}
        disableFirstCallApi={true}
      />
    </div>
  );
};

export default TableApprove;
