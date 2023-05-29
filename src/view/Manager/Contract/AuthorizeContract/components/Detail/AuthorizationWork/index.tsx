import RightMenu, { IArrayAction } from '@layout/RightMenu';
import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { arraySelectFilter } from './selectArray';
import SelectAndLabelComponent from '@shared/components/SelectAndLabelComponent';
import TableComponent from '@shared/components/TableComponent';
import useTable from '@shared/components/TableComponent/hook';
import SearchComponent from '@shared/components/SearchComponent';
import { columns } from './columnsTable';
import data from './fakeData.json';
import recordPresenter from '@modules/recordStore/presenter';

const AuthorizationWork = () => {
  const table = useTable();
  const [search, setSearch] = useState<string>('');
  const navigate = useNavigate();
  const idChooses = 'id';
  const [filter, setFilterOption] = useState<
    { field: string | undefined; value: string | number | undefined }[]
  >([{ field: 'status', value: 'all' }]);

  useEffect(() => {
    table.fetchData({ option: { search: search, filter: filter } });
  }, [search, filter, table]);

  const handleSearch = (searchKey: string) => {
    setSearch(searchKey);
  };

  const arrayAction: IArrayAction[] = [
    {
      iconType: 'edit',
      name: 'Chỉnh sửa tác phẩm',
      handleAction: () => navigate('manager/contract/add-authorize-contract'),
    },
    {
      iconType: 'refresh',
      name: 'Gia hạn hợp đồng',
      handleAction: () => navigate('manager/contract/add-authorize-contract'),
    },
    {
      iconType: 'add',
      name: 'Hủy hợp đồng',
      handleAction: () => navigate('manager/contract/add-authorize-contract'),
    },
    {
      iconType: 'add',
      name: 'Thêm bản ghi',
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
    <div>
      <Row>
        <Col span={21}>
          <div className="flex items-center justify-between my-[20px]">
            <div className="flex gap-x-[20px]">
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
            <SearchComponent
              onSearch={handleSearch}
              placeholder={'Tên bản ghi, ca sĩ,...'}
              classNames="mb-0 search-table !w-[400px]"
            />
          </div>
          <TableComponent
            apiServices={recordPresenter.getRecords}
            // defaultOption={filter}
            translateFirstKey="device"
            rowKey={res => res[idChooses]}
            register={table}
            columns={columns}
            // onRowSelect={setSelectedRowKeys}
            // dataSource={data}
            disableFirstCallApi={true}
          />
        </Col>
      </Row>
      <RightMenu arrayAction={arrayAction} />
    </div>
  );
};

export default AuthorizationWork;
