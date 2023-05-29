import React, { useState } from 'react';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import { Col, Row, Segmented } from 'antd';
import SearchComponent from '@shared/components/SearchComponent';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import { useNavigate } from 'react-router-dom';
import SelectAndLabelComponent, {
  ISelectAndLabel,
} from '@shared/components/SelectAndLabelComponent';

import useTable from '@shared/components/TableComponent/hook';
import ISelect from '@core/select';
import { DataType } from '@view/RecordStore/interface';
import { routerViewRecord, routerViewRecordApprove } from '@view/RecordStore/router';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import TableApprove from './Table';
import ListApprove from './List';
import ModalCancellationReason from '@view/Manager/Contract/AuthorizeContract/components/ModalCancellationReason';

const RecordStore = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isList, setIsList] = useState<string | number>('List');
  const table = useTable();
  const [search, setSearch] = useState<string>('');
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

  const arraySelectFilter: ISelectAndLabel[] = [
    { textLabel: 'Thể loại:', dataString: dataCategory, keyLabel: 'category' },
    { textLabel: 'Định dạng:', dataString: dataFormat, keyLabel: 'format' },
  ];

  const handleSearch = (searchKey: string) => {
    setSearch(searchKey);
  };

  const arrayAction: IArrayAction[] = [
    {
      iconType: 'check',
      name: 'Phê duyệt',
    },
    {
      iconType: 'cancel',
      name: 'Từ chối',
      handleAction: () => setIsVisible(true),
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

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

  return (
    <div className="record__page">
      <div className="">
        <MainTitleComponent
          breadcrumbs={[routerViewRecord, routerViewRecordApprove]}
          title={'Phê duyệt bản ghi'}
          classTitle="default-title"
        />
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
              <TableApprove
                table={table}
                search={search}
                filter={filter}
                rowSelection={rowSelection}
                idChooses={idChooses}
              />
            ) : (
              <ListApprove search={search} filter={filter} />
            )}
          </div>
        </Col>
      </Row>
      <RightMenu arrayAction={arrayAction} />
      <ModalCancellationReason isModalVisible={isVisible} setIsModalVisible={setIsVisible} />
    </div>
  );
};

export default RecordStore;
