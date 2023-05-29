import React, { Key, useEffect, useState } from 'react';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import { Col, Row, Segmented } from 'antd';
import SearchComponent from '@shared/components/SearchComponent';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import { Link, useNavigate } from 'react-router-dom';
import SelectAndLabelComponent, {
  ISelectAndLabel,
} from '@shared/components/SelectAndLabelComponent';
import data from './fakeData.json';

import './styles.scss';
import useTable from '@shared/components/TableComponent/hook';
import ISelect from '@core/select';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import TableRecord from './components/TableRecord';
import ListRecord from './components/ListRecord';

const RecordStore = () => {
  const navigate = useNavigate();
  const table = useTable();
  const [search, setSearch] = useState<string>('');
  const [isList, setIsList] = useState<string | number>('List');
  const idChooses = 'id';
  const [filter, setFilterOption] = useState<
    { field: string | undefined; value: string | number | undefined }[]
  >([{ field: 'category', value: 'all' }]);

  const dataCategory: ISelect[] = [
    { label: 'common.all', value: 'all' },
    { label: 'common.device', value: 'Pop' },
    { label: 'EDM', value: '' },
    { label: 'Ballad', value: '' },
  ];

  const dataFormat: ISelect[] = [
    { label: 'common.all', value: 'all' },
    { label: 'common.device', value: 'Audio' },
    { label: 'common.device', value: 'video/mp4' },
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

  const handleSearch = (searchKey: string) => {
    setSearch(searchKey);
  };

  const arrayAction: IArrayAction[] = [
    {
      iconType: 'edit',
      name: 'Quản lí phê duyệt',
      handleAction: () => navigate('/record-store/approve'),
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
        <Col span={22}>
          <div className="flex items-center justify-between my-[20px]">
            <SearchComponent
              onSearch={handleSearch}
              placeholder={'Tên bản ghi, ca sĩ,...'}
              classNames="mb-0 search-table !w-[400px]"
            />
          </div>
          <div className="flex justify-between">
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
            <Segmented
              onChange={(value: string | number) => setIsList(value)}
              defaultValue={'List'}
              options={[
                {
                  value: 'List',
                  icon: <BarsOutlined />,
                },
                {
                  value: 'Kanban',
                  icon: <AppstoreOutlined />,
                },
              ]}
            />
          </div>
          <div className="pb-[40px] mt-[20px]">
            {isList == 'List' ? (
              <TableRecord table={table} search={search} filter={filter} idChooses={idChooses} />
            ) : (
              <ListRecord search={search} filter={filter} />
            )}
          </div>
        </Col>
      </Row>
      <RightMenu arrayAction={arrayAction} />
    </div>
  );
};

export default RecordStore;
