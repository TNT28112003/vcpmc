import React, { useEffect, useState } from 'react';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import SelectAndLabelComponent from '@shared/components/SelectAndLabelComponent';
import { Link, useNavigate } from 'react-router-dom';
import { arraySelectFilter } from './selectArray';
import data from './fakeData.json';
import { Col, Row } from 'antd';
import SearchComponent from '@shared/components/SearchComponent';
import ModalCancellationReason from './components/ModalCancellationReason';
import { ColumnsType } from 'antd/es/table';
import useTable from '@shared/components/TableComponent/hook';
import TableComponent from '@shared/components/TableComponent';
import contractAuthorizePresenter from '@modules/contractAuthorize/presenter';
import CircleLabel from '@shared/components/CircleLabel';
import moment from 'moment';

const AuthorizeContract = () => {
  const table = useTable();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [filter, setFilterOption] = useState<
    { field: string | undefined; value: string | number | undefined }[]
  >([{ field: 'authorized', value: 'all' }]);

  const idChooses = '';

  const arrayAction: IArrayAction[] = [
    {
      iconType: 'add',
      name: 'Thêm hợp đồng',
      handleAction: () => navigate('add-authorize-contract'),
    },
  ];

  interface DataType {
    id?: string;
    numberContract: string;
    nameContract: string;
    authorizationName: string;
    authorized: string;
    createAt: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'STT',
      dataIndex: 'STT',
      key: 'STT',
      render: (text, object, index) => <div> {index + 1}</div>,
    },
    {
      title: 'Số hợp đồng',
      dataIndex: 'numberContract',
    },
    {
      title: 'Tên hợp đồng',
      dataIndex: 'nameContract',
    },
    {
      title: 'Người ủy quyền',
      dataIndex: 'authorizationName',
    },
    {
      title: 'Quyền sở hữu',
      dataIndex: 'authorized',
      render: (authorized: any) => {
        return <>{authorized === 'Cá nhân' ? 'Người biểu diễn' : 'Nhà sản suất'}</>;
      },
    },

    {
      title: 'Hiệu lực hợp đồng',
      dataIndex: ['expirationDate', 'createDate'],
      render: (text, row) => {
        // thoi gian 3 ngay
        const duration = 259200000;
        const dateNow = new Date();
        const expirationDateNew = new Date(row['expirationDate']);
        const createAtNew = new Date((row['createDate'] = moment().format()));
        // kiem tra con thoi han hay khong
        const isTineLeft = dateNow.getTime() - expirationDateNew.getTime();
        // kiem tra hop dong moi tao
        const checkNew = dateNow.getTime() - createAtNew.getTime();

        if (checkNew < duration)
          return (
            <div className="flex justify-center">
              <CircleLabel text={'Mới'} colorCode="green" />
            </div>
          );
        return isTineLeft > 0 ? (
          <div className="flex justify-center">
            <CircleLabel text={'Còn thời hạn'} colorCode="blue" />
          </div>
        ) : (
          <div className="flex justify-center">
            <CircleLabel text={'Hết thời hạn'} colorCode="grey" />
          </div>
        );
      },
    },
    {
      title: 'Ngày tạo',
      key: 'createDate',
      dataIndex: 'createDate',
      render: createAt => {
        createAt = moment().format('YYYY-MM-DD HH:mm:ss');
        return <>{createAt}</>;
      },
    },
    {
      title: 'common.empty',
      dataIndex: 'id',
      render: (id: string) => {
        return (
          <Link
            to={`/manager/contract/authorize/${id}`}
            style={{ color: '#FF7506', textDecoration: 'underline' }}
          >
            Xem chi tiết
          </Link>
        );
      },
    },
    {
      title: 'common.empty',
      dataIndex: 'cancellationReason',
      render: cancellationReason => {
        return (
          <>
            {cancellationReason == null || undefined ? (
              ''
            ) : (
              <a
                onClick={() => {
                  setIsVisible(true);
                }}
                style={{ color: '#FF7506', textDecoration: 'underline' }}
              >
                Lý do hủy
              </a>
            )}
          </>
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

  return (
    <div className="">
      <Row>
        <Col span={22}>
          <div className="flex items-center justify-between">
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
              placeholder={'Tên hợp đồng, số hợp đồng, người uỷ quyền...'}
              classNames="mb-0 search-table !w-[500px]"
            />
          </div>
          <div className="pb-[40px]">
            <TableComponent
              apiServices={contractAuthorizePresenter.getContractAuthorizes}
              translateFirstKey="records"
              rowKey={res => res[idChooses]}
              register={table}
              columns={columns}
              // dataSource={data}
              disableFirstCallApi={true}
            />
          </div>
        </Col>
      </Row>
      <RightMenu arrayAction={arrayAction} />
      <ModalCancellationReason isModalVisible={isVisible} setIsModalVisible={setIsVisible} />
    </div>
  );
};

export default AuthorizeContract;
