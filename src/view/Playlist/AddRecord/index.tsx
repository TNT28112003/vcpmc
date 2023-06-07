import MainTitleComponent from '@shared/components/MainTitleComponent';
import { Button, Col, Row } from 'antd';
import React, { useState } from 'react';
import { routerViewPlaylist, routerViewPlaylistAddRecord } from '../router';
import { arraySelectFilter } from './arraySelect';
import SelectAndLabelComponent from '@shared/components/SelectAndLabelComponent';
import SearchComponent from '@shared/components/SearchComponent';
import TableComponent from '@shared/components/TableComponent';
import { ColumnsType } from 'antd/es/table';
import { DataType } from '@view/RecordStore/interface';
import { useNavigate } from 'react-router';
import useTable from '@shared/components/TableComponent/hook';
import data from '../Details/fakeData.json';
import { Link } from 'react-router-dom';
import './styles.scss';

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
          Thêm
        </Link>
      );
    },
  },
];

const AddRecordPlayList = () => {
  const idChooses = 'id';
  const navigate = useNavigate();
  const table = useTable();
  const [search, setSearch] = useState<string>('');

  const handleSearch = (searchKey: string) => {
    setSearch(searchKey);
  };
  return (
    <div className="add__record__playlist pr-[30px]">
      <MainTitleComponent
        breadcrumbs={[routerViewPlaylist, routerViewPlaylistAddRecord]}
        title={'Thêm bản ghi'}
      />
      <Row gutter={20} className="mt-[20px]">
        <Col span={12}>
          <div className="bg-[#2a2a3b] p-[16px] rounded-[10px]">
            <div>
              <h3 className="text-white text-[18px] font-bold leading-[24px]">Kho bản ghi</h3>
            </div>
            <div className="flex my-[-10px] gap-[30px]">
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
            <div className="">
              <SearchComponent
                onSearch={handleSearch}
                placeholder={'Tên bản ghi, ca sĩ,...'}
                classNames="mb-0 search-table !w-[448px]"
              />
            </div>
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
          </div>
        </Col>
        <Col span={12}>
          <div className="bg-[#2a2a3b] p-[16px] rounded-[10px]">
            <div>
              <h3 className="text-white text-[18px] font-bold leading-[24px]">
                Danh sách bản ghi được thêm vào Playlist
              </h3>
            </div>
            <div className="flex gap-[60px] my-[16px]">
              <div className="flex item-center gap-[30px]">
                <h3 className="text-white text-[14px] font-bold leading-[24px]">Tổng số:</h3>
                <p className="text-white text-[14px] leading-[24px]">0 bản ghi</p>
              </div>
              <div className="flex item-center gap-[30px]">
                <h3 className="text-white text-[14px] font-bold leading-[24px]">
                  Tổng thời lượng:
                </h3>
                <p className="text-white text-[14px] leading-[24px]">--:--:--</p>
              </div>
            </div>
            <div className="">
              <SearchComponent
                onSearch={handleSearch}
                placeholder={'Tên bản ghi, ca sĩ,...'}
                classNames="mb-0 search-table !w-[448px]"
              />
            </div>
            <div>
              <TableComponent
                // apiServices={recordPresenter.getRecords}
                translateFirstKey="records"
                rowKey={res => res[idChooses]}
                register={table}
                columns={columns}
                // dataSource={data}
                // disableFirstCallApi={true}
              />
            </div>
          </div>
        </Col>
        <div className="pb-[40px] m-auto">
          <div className="list__btn">
            <Button className="btn__cancel ml-[60px]">Hủy</Button>
            <Button className="btn__save" htmlType="submit">
              Lưu
            </Button>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default AddRecordPlayList;
