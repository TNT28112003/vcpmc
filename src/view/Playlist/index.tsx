import React, { useState } from 'react';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import { Col, Row, Segmented } from 'antd';
import SearchComponent from '@shared/components/SearchComponent';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import { useNavigate } from 'react-router-dom';
import useTable from '@shared/components/TableComponent/hook';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import TablePlayList from './Table';
import List from './List';

const PlayList = () => {
  const navigate = useNavigate();
  const table = useTable();
  const [search, setSearch] = useState<string>();
  const [isList, setIsList] = useState<string | number>('List');
  const idChooses = 'id';
  const [filter, setFilterOption] = useState<
    { field: string | undefined; value: string | number | undefined }[]
  >([{ field: 'category', value: 'all' }]);

  const handleSearch = (searchKey: string) => {
    setSearch(searchKey);
  };

  const arrayAction: IArrayAction[] = [
    {
      iconType: 'add',
      name: 'Thêm Playlist',
      handleAction: () => navigate('/playlist/add'),
    },
  ];

  return (
    <div className="record__page">
      <div className="">
        <MainTitleComponent title={'Playlist'} classTitle="default-title" />
      </div>
      <Row>
        <Col span={22}>
          <div className="flex justify-between mt-[20px]">
            <SearchComponent
              onSearch={handleSearch}
              placeholder={'Tên bản ghi, ca sĩ,...'}
              classNames="mb-0 search-table !w-[400px]"
            />
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
              <TablePlayList table={table} search={search} filter={filter} idChooses={idChooses} />
            ) : (
              <List search={search} filter={filter} />
            )}
          </div>
        </Col>
      </Row>
      <RightMenu arrayAction={arrayAction} />
    </div>
  );
};

export default PlayList;
