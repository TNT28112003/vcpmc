import React, { Key, useEffect, useState } from 'react';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import { Col, Row } from 'antd';
import SearchComponent from '@shared/components/SearchComponent';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import { Link, useNavigate } from 'react-router-dom';
import SelectAndLabelComponent, {
  ISelectAndLabel,
} from '@shared/components/SelectAndLabelComponent';
import data from './fakeData.json';

import './styles.scss';
import TableComponent from '@shared/components/TableComponent';
import useTable from '@shared/components/TableComponent/hook';
import recordPresenter from '@modules/recordStore/presenter';
import ISelect from '@core/select';
import { ColumnsType } from 'antd/es/table';

const RecordStore = () => {
  const navigate = useNavigate();
  const table = useTable();

  const [search, setSearch] = useState<string>('');
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const idChooses = 'id';
  const [filter, setFilterOption] = useState<
    { field: string | undefined; value: string | number | undefined }[]
  >([{ field: 'category', value: 'all' }]);

  interface DataType {
    id?: string;
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

  const columns: ColumnsType<DataType> = [
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
      render: (_, { id }) => {
        return (
          <Link
            to={`/edit-record/${id}`}
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

  const dataCategory: ISelect[] = [
    { label: 'common.all', value: 'all' },
    { label: 'common.device', value: 'Pop' },
    { label: 'EDM', value: '' },
    { label: 'Ballad', value: '' },
  ];

  const dataFormat: ISelect[] = [
    { label: 'common.all', value: 'all' },
    { label: 'common.device', value: 'Audio' },
    { label: 'common.device', value: 'Video' },
  ];

  const dataBrowsing: ISelect[] = [
    { label: 'common.all', value: 'all' },
    { label: 'Duyệt bởi người dùng', value: '' },
    { label: 'Duyệt tự động', value: '' },
  ];

  const dataStatus: ISelect[] = [
    { label: 'common.all', value: 'all' },
    { label: 'common.device', value: '1' },
    { label: 'Hết hạn', value: '0' },
  ];

  const arraySelectFilter: ISelectAndLabel[] = [
    { textLabel: 'Thể loại:', dataString: dataCategory, keyLabel: 'category' },
    { textLabel: 'Định dạng:', dataString: dataFormat, keyLabel: 'format' },
    { textLabel: 'Thời hạn sử dụng:', dataString: dataBrowsing, keyLabel: '' },
    { textLabel: 'Trạng thái:', dataString: dataStatus, keyLabel: 'status' },
  ];

  useEffect(() => {
    table.fetchData({ option: { search: search, filter: filter } });
  }, [search, filter, table]);

  const handleSearch = (searchKey: string) => {
    setSearch(searchKey);
  };

  const arrayAction: IArrayAction[] = [
    {
      iconType: 'edit',
      name: 'Quản lí phê duyệt',
      handleAction: () => navigate('manager/contract/add-authorize-contract'),
    },
  ];

  const onChangeSelectStatus = (name: string | undefined) => (status: any) => {
    if (name && status) {
      let filterTemp = filter;
      let checkExist = filter.findIndex(obj => obj.field === name);

      if (checkExist >= 0) {
        filterTemp[checkExist].value = status;
      } else {
        filter.push({ field: name, value: status });
      }

      setFilterOption(filterTemp.map(fil => fil));
    }
  };

  return (
    <div className="record__page">
      <div className="">
        <MainTitleComponent title={'common.record'} classTitle="default-title" />
      </div>
      <Row>
        <Col span={21}>
          <div className="flex items-center justify-between my-[20px]">
            <SearchComponent
              onSearch={handleSearch}
              placeholder={'Tên bản ghi, ca sĩ,...'}
              classNames="mb-0 search-table !w-[400px]"
            />
          </div>
          <div className="flex gap-x-[16px] my-[-20px]">
            {arraySelectFilter.map(item => (
              <SelectAndLabelComponent
                onChange={onChangeSelectStatus(item.keyLabel)}
                key={item.name}
                className={`margin-select ${item.keyLabel}`}
                dataString={item.dataString}
                textLabel={item.textLabel}
              />
            ))}
          </div>
          <div className="pb-[40px] mt-[20px]">
            <TableComponent
              apiServices={recordPresenter.getRecords}
              translateFirstKey="records"
              rowKey={res => res[idChooses]}
              register={table}
              columns={columns}
              onRowSelect={setSelectedRowKeys}
              // dataSource={data}
              disableFirstCallApi={true}
            />
          </div>
        </Col>
      </Row>
      <RightMenu arrayAction={arrayAction} />
    </div>
  );
};

export default RecordStore;
