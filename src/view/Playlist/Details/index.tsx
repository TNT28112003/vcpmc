import TableComponent from '@shared/components/TableComponent';
import useTable from '@shared/components/TableComponent/hook';
import { Col, Row } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import data from './fakeData.json';
import { imagePlayList } from '@assets/images';
import CircleLabel from '@shared/components/CircleLabel';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import { routerViewPlaylist, routerViewPlaylistDetails } from '../router';

interface DataType {
  id: string;
  nameRecord: string;
  singer: string;
  author: string;
  arrayRecord: [];
}

const DetailsPlayList = () => {
  const idChooses = 'id';
  const navigate = useNavigate();
  const table = useTable();
  const [filter, setFilterOption] = useState<
    { field: string | undefined; value: string | number | undefined }[]
  >([{ field: 'category', value: 'all' }]);

  console.log('====================================');
  console.log(data);
  console.log('====================================');

  const arrayAction: IArrayAction[] = [
    {
      iconType: 'edit',
      name: 'Chỉnh sửa',
      handleAction: () => navigate('/playlist/edit/1'),
    },
    {
      iconType: 'delete',
      name: 'Xóa playlist',
      handleAction: () => navigate('/record/approve'),
    },
  ];

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
      title: 'tác giả',
      dataIndex: 'author',
    },
    {
      title: ' ',
      render: (_, { id }) => {
        return (
          <Link to={`/playlist/${id}`} style={{ color: '#FF7506', textDecoration: 'underline' }}>
            Nghe
          </Link>
        );
      },
    },
    {
      title: ' ',
      render: (_, { id }) => {
        return (
          <Link to={`/playlist/${id}`} style={{ color: '#FF7506', textDecoration: 'underline' }}>
            Gỡ
          </Link>
        );
      },
    },
  ];
  return (
    <div>
      <MainTitleComponent
        breadcrumbs={[routerViewPlaylist, routerViewPlaylistDetails]}
        title={'Playlist Top ca khúc 2021'}
      />
      <Row gutter={16} className="mt-[20px]">
        <Col span={4}>
          <div>
            <img src={imagePlayList} alt="" />
          </div>
          <h3 className="text-[20px] font-semibold leading-[24px] border-b-[1px] border-[#727288] py-[16px]">
            Top ca khuc 2021
          </h3>
          <div className="border-b-[1px] border-[#727288]">
            <div className="flex justify-between items-center mt-[12px] mb-[4px]">
              <h4 className="text-[14px] font-medium leading-[24px]">người tạo</h4>
              <span className="text-[14px] font-normal leading-[24px]">Admin</span>
            </div>
            <div className="flex justify-between items-center mt-[12px] mb-[4px]">
              <h4 className="text-[14px] font-medium leading-[24px]">Tổng số :</h4>
              <span className="text-[14px] font-normal leading-[24px]">Admin</span>
            </div>
            <div className="flex justify-between items-center mt-[12px] pb-[12px]">
              <h4 className="text-[14px] font-medium leading-[24px]">Tổng thời lượng :</h4>
              <span className="text-[14px] font-normal leading-[24px]">Admin</span>
            </div>
          </div>
          <div className="border-b-[1px] border-[#727288]">
            <p className="text-[13px] leading-[24px] mt-[12px] pb-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex gap-[12px] border-b-[1px] border-[#727288] py-[12px]">
            <CircleLabel text={'Pop'} />
            <CircleLabel text={'Trending'} />
            <CircleLabel text={'Lofi'} />
          </div>
          <div className="border-b-[1px] border-[#727288] py-[12px]">
            <p className="text-[13px] leading-[24px]">Hiển thị ở chế độ công khai</p>
            <p className="text-[13px] leading-[24px]">Phát ngẫu nhiên</p>
            <p className="text-[13px] leading-[24px]">Lặp lại</p>
          </div>
        </Col>
        <Col span={18}>
          <TableComponent
            // apiServices={recordPresenter.getRecords}
            translateFirstKey="records"
            rowKey={res => res[idChooses]}
            register={table}
            columns={columns}
            dataSource={data}
            // disableFirstCallApi={true}
          />
        </Col>
      </Row>
      <RightMenu arrayAction={arrayAction} />
    </div>
  );
};

export default DetailsPlayList;
