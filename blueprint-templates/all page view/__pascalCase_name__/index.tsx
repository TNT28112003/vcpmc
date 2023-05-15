import './style.scss';

import { MenuProps, Space } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React, { useState } from 'react';

import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import ISelect from '@core/select';
import ButtonComponent from '@shared/components/ButtonComponent';
import ButtonDropdown from '@shared/components/ButtonDropdown';
import CircleLabel from '@shared/components/CircleLabel';
import { DeleteConfirm } from '@shared/components/ConfirmDelete';
import EditIconComponent from '@shared/components/EditIconComponent';
import InformationIconComponent from '@shared/components/InformationIcon';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import SearchComponent from '@shared/components/SearchComponent/SearchComponent';
import SelectAndLabelComponent, { ISelectAndLabel } from '@shared/components/SelectAndLabelComponent';
import TableComponent from '@shared/components/TableComponent';
import useTable from '@shared/components/TableComponent/hook';
import { useAltaIntl } from '@shared/hook/useTranslate';

import ModalComponents from './component/MainModal/Modal{{pascalCase name}}';
import { IModal } from './interface';

import  router{{pascalCase name}}  from './router';
const dataTable = require('./data.json');


const {{ pascalCase name }} = () => {
  const { formatMessage } = useAltaIntl();
  const table = useTable({ tableKey: '{{camelCase name}}',
  //  apiServices: 
 });

  const [modal, setModal] = useState<IModal>({
    isVisible: false,
    dataEdit: null,
    isReadOnly: false,
  });
  const [search, setSearch] = useState<string>('');
  const [filter, setFilterOption] = useState<any>();

  const idChooses = 'id'; //get your id here. Ex: accountId, userId,...
  const columns: ColumnsType = [
    {
      dataIndex: 'tagName',
    },
    {
      dataIndex: 'lastUpdate',
    },
    {
      dataIndex: 'group',
    },
    {
      dataIndex: 'group',
      render: () => <CircleLabel text={formatMessage('common.statusActive')} colorCode='blue'/>,
    },
    {
      dataIndex: 'action',
      render: (_item:any, record: any) => (
        <Space>
          <EditIconComponent
            onClick={() => {
              setModal({
                dataEdit: record,
                isVisible: true,
                isReadOnly: false,
              });
            }}
          />
          <InformationIconComponent
            onClick={() => {
              setModal({
                dataEdit: record,
                isVisible: true,
                isReadOnly: true,
              });
            }}
          />
        </Space>
      ),
    },
  ];

  const handleRefresh = () => {
    table.fetchData();
  };
 

  const handleSearch = (searchKey: string) => {
    table.fetchDataFilter({ search: searchKey });
  };


  const items: MenuProps['items'] = [
    {
      label: formatMessage('{{kebabCase name}}.delete'),
      key: '1',
      icon: <DeleteOutlined />,
      // disabled: selectedRowKeys?.length === 0 || selectedRowKeys?.length < 0,
    },
  ];
  const dataString: ISelect[] = [{ label: 'common.all', value: undefined }];
  const arraySelectFilter: ISelectAndLabel[] = [
    { textLabel: 'Lĩnh vực', dataString },
    { textLabel: 'Địa bàn quản lý', dataString },
    { textLabel: 'Trạng thái', dataString },
  ];
  const handleMenuClick: MenuProps['onClick'] =  ({ key }: any) => {
    switch (key) {
      case '1':
        DeleteConfirm({
          title: formatMessage('common.delete'),
          content: formatMessage('{{kebabCase name}}.content.delete'),
          handleOk: () => {
            // userPresenter.deleteUser(selectedRowKeys).then(() => {
            //   handleRefresh();
            // });
          },
          handleCancel: () => {},
        });
        break;
      default:
        break;
    }
  };
  const onChangeSelectStatus = (name: string | undefined) => (status: any) => {
    if (name) {
      table.fetchDataFilter({ filter: { [name]: { value: status, op: '$eq' } }  });
    }
  };

  return (
    <div className='{{kebabCase name}}'>
      <div className='main-card'>
      <MainTitleComponent breadcrumbs={router{{pascalCase name}} } />
        <div className="flex flex-row justify-between mb-2.5">
          <div className="flex flex-row intro-y items-end">
            <div className="flex flex-row ">
              {arraySelectFilter.map(item => (
                <SelectAndLabelComponent
                  onChange={onChangeSelectStatus(item.name)}
                  key={item.name}
                  className="margin-select"
                  dataString={item.dataString}
                  textLabel={item.textLabel}
                />
              ))}
            </div>
            <SearchComponent
              name="robot"
              onSearch={handleSearch}
              placeholder={'common.keyword'}
              classNames="mb-0 search-table"
            />
          </div>
          <div className="wrap_btn intro-y">
            <ButtonComponent
              mr_2={true}
              icon={<PlusOutlined />}   
              text={formatMessage('{{kebabCase name}}.create')}
              onClick={() => {
                setModal({
                  isVisible: true,
                  dataEdit: null,
                  isReadOnly: false,
                });
              }}
            />
            <ButtonDropdown items={items} handleMenuClick={handleMenuClick} />
          </div>
        </div>
        <TableComponent
          // apiServices={}
          rowKey={(res) => res[idChooses]}
          register={table}
          columns={columns}
          dataSource={dataTable}
          rowClassName="zoom-in"
        />
      </div>
      <ModalComponents
        modal={modal}
        handleRefresh={handleRefresh}
        setModal={setModal}
      />
    </div>
  );
};

export default {{ pascalCase name }};

