import React, { useEffect, useState } from 'react';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import { Col, Row } from 'antd';
import SearchComponent from '@shared/components/SearchComponent';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import { useNavigate } from 'react-router-dom';
import { arraySelectFilter } from './selectArray';
import SelectAndLabelComponent from '@shared/components/SelectAndLabelComponent';
import { columns } from './columnsTable';
import data from './fakeData.json';

import './styles.scss';
import TableComponent from '@shared/components/TableComponent';
import useTable from '@shared/components/TableComponent/hook';

const RecordStore = () => {
  const table = useTable();
  const [search, setSearch] = useState<string>('');
  const navigate = useNavigate();
  const idChooses = 'id';
  const [filter, setFilterOption] = useState<
    { field: string | undefined; value: string | number | undefined }[]
  >([]);

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

  const onChangeSelectStatus = (name: string | undefined) =>  {
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
              // apiServices={recordPresenter.getRecords}
              // defaultOption={filter}
              translateFirstKey="device"
              rowKey={res => res[idChooses]}
              register={table}
              columns={columns}
              // onRowSelect={setSelectedRowKeys}
              dataSource={data}
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
