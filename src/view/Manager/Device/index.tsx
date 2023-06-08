import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import data from './fakeData.json';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import SelectNoneLableComponent from '@shared/components/SelectNoneLableComponent';
import { arraySelectFilter } from './selectArray';
import SearchComponent from '@shared/components/SearchComponent';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import './styles.scss';
import ModalDeleteDevice from './components/ModalDeleteDevice';
import { ColumnsType } from 'antd/es/table';
import TableComponent from '@shared/components/TableComponent';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import devicePresenter from '@modules/device/presenter';
import useTable from '@shared/components/TableComponent/hook';
import CircleLabel from '@shared/components/CircleLabel';

interface DataType {
  key: React.Key;
  id: string;
  SKU: String;
  deviceName: string;
  label: string;
  IPAddress: string;
  information: string;
  activeStatus: boolean;
  userName: string;
  password: string;
  note: string;
  warrantyPeriod: string;
  location: string;
  status: number;
}

const Device: React.FC = () => {
  const table = useTable();
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilterOption] = useState<
    { field: string | undefined; value: string | number | undefined }[]
  >([{ field: 'status', value: 'all' }]);
  const arrayAction: IArrayAction[] = [
    {
      iconType: 'add',
      name: 'Thêm thiết bị',
      handleAction: () => navigate('/manager/device/add-device'),
    },
    {
      iconType: 'power',
      name: 'Kích hoạt thiết bị',
    },
    {
      iconType: 'lock',
      name: 'Khoá thiết bị',
    },
    {
      iconType: 'delete',
      name: 'Xoá thiết bị',
      handleAction: () => setIsVisible(true),
    },
  ];

  const columns: ColumnsType<DataType> = [
    {
      title: 'Tên thiết bị',
      dataIndex: 'deviceName',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      render: status => {
        return status == 1 ? (
          <CircleLabel text={'Đang kích hoạt | Đang hoạt động'} colorCode="green" />
        ) : (
          <CircleLabel text={'Ngừng kích hoạt'} colorCode="red" />
        );
      },
    },
    {
      title: 'Địa điểm',
      dataIndex: 'location',
    },
    {
      title: 'Hạn hợp đồng',
      dataIndex: 'warrantyPeriod',
    },
    {
      title: 'MAC Addresss',
      dataIndex: 'IPAddress',
    },
    {
      title: 'Memory',
      dataIndex: 'information',
    },
    {
      title: 'common.empty',
      dataIndex: 'id',
      render: (id: string) => {
        return (
          <Link
            to={`/manager/device/${id}`}
            style={{ color: '#FF7506', textDecoration: 'underline' }}
          >
            Xem chi tiết
          </Link>
        );
      },
    },
  ];

  const handleSearch = (searchKey: string) => {
    setSearch(searchKey);
  };

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

  useEffect(() => {
    table.fetchData({ option: { search: search, filter: filter } });
  }, [search, filter, table]);

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log('====================================');
      console.log(selectedRows);
      console.log('====================================');
    },
  };

  return (
    <div className="device__page">
      <MainTitleComponent title={'Danh sách thiết bị'} classTitle="default-title" />
      <Row>
        <Col span={21}>
          <div className="flex items-center justify-between">
            <div className="flex">
              {arraySelectFilter.map(item => (
                <SelectNoneLableComponent
                  onChange={onChangeSelectStatus(item.keyLabel)}
                  key={item.name}
                  className={`margin-select ${item.keyLabel}`}
                  dataString={item.dataString}
                />
              ))}
            </div>
            <SearchComponent
              onSearch={handleSearch}
              placeholder={'Tìm thiết bị theo tên, SKU, địa điểm, địa chỉ Mac'}
              classNames="mb-0 search-table !w-[500px]"
            />
          </div>
          <div className="pb-[40px]">
            <TableComponent
              apiServices={devicePresenter.getDevices}
              rowSelection={{
                ...rowSelection,
              }}
              register={table}
              columns={columns}
              disableFirstCallApi={true}
            />
          </div>
        </Col>
      </Row>
      <RightMenu arrayAction={arrayAction} />
      <ModalDeleteDevice isModalVisible={isVisible} setIsModalVisible={setIsVisible} />
    </div>
  );
};

export default Device;
