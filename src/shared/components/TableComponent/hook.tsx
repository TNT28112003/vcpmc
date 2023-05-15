import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { PaginationEntity } from '@core/pagination/entity';
import { IFilter, OptionEntity } from '@core/table';
import { sessionStorageGetItem, sessionStorageSetItem } from '@helper/functions';
import { IState, useAsync } from '@shared/hook/useAsync';

import { InitOption, InitPagination } from './interface';

export interface IUseTable<T> {
  fetchData: (obj?: { pagination?: PaginationEntity; option?: OptionEntity }) => void;
  fetchDataFilter: (obj: OptionEntity) => void;
  repository: IState<T>;
  pagination: PaginationEntity;
  option: OptionEntity;
  search: string;
  filter: IFilter;
  tableKey: string;
  selectedRowKeys: React.Key[];
  setSelectedRowKeys: (value: React.Key[]) => void;
}

const useTable: <RecordType>(obj: {
  tableKey: string;
  apiServices?: (...params: any) => Promise<{ data: Array<RecordType>; info: PaginationEntity }>;
}) => IUseTable<RecordType> = ({ tableKey, apiServices }) => {
  const [repository] = useAsync(apiServices || Promise.resolve);
  const [pagination, setPagination] = useState<PaginationEntity>(InitPagination);
  const [option, setOption] = useState<OptionEntity>(InitOption);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const location = useLocation();

  const fetchData = (_state?: { pagination?: PaginationEntity; option?: OptionEntity }) => {
    const oldState = sessionStorageGetItem(`${location.pathname}${tableKey}`);
    const newOption = Object.assign({}, option, oldState?.option, _state?.option);
    const newPagination = Object.assign({}, pagination, oldState?.pagination, _state?.pagination);

    if (apiServices) {
      repository.execute(newPagination, newOption).then((res: any) => {
        setOption(newOption);
        setPagination({
          ...newPagination,
          ...res?.info,
        });
        sessionStorageSetItem(`${location.pathname}${tableKey}`, {
          pagination: {
            ...newPagination,
            ...res?.info,
          },
          option: newOption,
        });
      });
    } else {
      setOption(newOption);
      setPagination({
        ...newPagination,
      });
      sessionStorageSetItem(`${location.pathname}${tableKey}`, {
        pagination: newPagination,
        option: newOption,
      });
    }
  };

  const fetchDataFilter = (_option: OptionEntity) => {
    fetchData({ pagination: { current: 1 }, option: _option });
  };

  return {
    fetchData,
    fetchDataFilter,
    repository,
    pagination,
    option,
    tableKey,
    search: option.search ? option.search : '',
    filter: option.filter ? option.filter : {},
    setSelectedRowKeys,
    selectedRowKeys,
  };
};

export default useTable;
