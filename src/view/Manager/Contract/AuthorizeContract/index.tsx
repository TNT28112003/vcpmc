import React from 'react';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import SelectAndLabelComponent from '@shared/components/SelectAndLabelComponent';
import { useNavigate } from 'react-router-dom';
import { arraySelectFilter } from './selectArray';
import { columns } from './columnsTable';
import data from './fakeData.json';
import { Col, Row, Table } from 'antd';
import SearchComponent from '@shared/components/SearchComponent';

const AuthorizeContract = () => {
  const navigate = useNavigate();

  const arrayAction: IArrayAction[] = [
    {
      iconType: 'add',
      name: 'Thêm hợp đồng',
      handleAction: () => navigate('manager/contract/add-authorize-contract'),
    },
  ];

  return (
    <div className="">
      <Row>
        <Col span={21}>
          <div className="flex items-center justify-between">
            <div className="flex gap-x-[20px]">
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
            <SearchComponent
              // onSearch={handleSearch}
              placeholder={'Tên hợp đồng, số hợp đồng, người uỷ quyền...'}
              classNames="mb-0 search-table !w-[500px]"
            />
          </div>
          <div className="pb-[40px]">
            <Table columns={columns} dataSource={data} />
          </div>
        </Col>
      </Row>
      <RightMenu arrayAction={arrayAction} />
    </div>
  );
};

export default AuthorizeContract;
