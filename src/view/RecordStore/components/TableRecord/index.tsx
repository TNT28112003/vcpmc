import recordPresenter from '@modules/recordStore/presenter';
import TableComponent from '@shared/components/TableComponent';
import { DataType } from '@view/RecordStore/interface';
import { Modal } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

import './modalVideo.scss';

const TableRecord = ({ table, search, filter, idChooses }) => {
  const playerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState<number>(0);

  const handleCancel = () => {
    setOpen(false);
  };

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
      title: 'Mã ISRC',
      dataIndex: 'ISRC',
    },
    {
      title: 'Thời lượng',
      render: () => {
        const result = new Date(timer * 1000).toISOString().slice(11, 19);
        return <div>{result}</div>;
      },
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
      render: format => {
        return format === 'video/mp4' ? 'Video' : 'Audio';
      },
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
      render: (_, { id }) => {
        return (
          <Link
            to={`/record/update/${id}`}
            style={{ color: '#FF7506', textDecoration: 'underline' }}
          >
            Cập nhật
          </Link>
        );
      },
    },
    {
      title: ' ',
      dataIndex: 'photoURL',
      render: photoURL => {
        return (
          <>
            <a
              onClick={() => {
                setOpen(true);
              }}
              style={{ color: '#FF7506', textDecoration: 'underline' }}
            >
              Nghe
            </a>
            <div className="hidden">
              <ReactPlayer
                url={'https://www.youtube.com/watch?v=ehiax_u0eL4'}
                // url={photoURL}
                controls={true}
                ref={playerRef}
                width={'100%'}
                height={'100%'}
                onDuration={reactPlayer => setTimer(reactPlayer)}
              />
            </div>
            <Modal open={open} onCancel={handleCancel} footer={null} className="modal__video">
              <ReactPlayer
                url={'https://www.youtube.com/watch?v=ehiax_u0eL4'}
                // url={photoURL}
                controls={true}
                ref={playerRef}
                width={'100%'}
                height={'100%'}
                onDuration={reactPlayer => setTimer(reactPlayer)}
              />
            </Modal>
          </>
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
        translateFirstKey="records"
        rowKey={res => res[idChooses]}
        register={table}
        columns={columns}
        // dataSource={data}
        disableFirstCallApi={true}
      />
    </div>
  );
};

export default TableRecord;
