import { PaginationEntity } from '@core/pagination/entity';
import httpRepository from '@core/repository/http';
import { OptionEntity, TableEntity } from '@core/table';

import DevicesEntity from './devicesEntity';

// API GET
export const getListDevices = (pagination: PaginationEntity, options: OptionEntity) => {
  const params = new TableEntity(pagination, options);
  return httpRepository.execute({
    path: '/api/Devices',
    showSuccess: false,
    showError: false,
    params,
    convert: res => {
      return {
        data: DevicesEntity.createListDevices(res?.pagedData),
        info: new PaginationEntity(res?.pageInfo),
      };
    },
  });
};

export const getListDevicesLocation = (
  locationId: string,
  pagination: PaginationEntity,
  options: OptionEntity,
) => {
  const paramsTable = new TableEntity(pagination, options);
  const params = { locationId, ...paramsTable };
  return httpRepository.execute({
    path: `/api/Locations/${locationId}/Devices`,
    showSuccess: false,
    showError: false,
    params,
    convert: res => {
      return {
        data: DevicesEntity.createListDevices(res?.pagedData),
        info: new PaginationEntity(res?.pageInfo),
      };
    },
  });
};

//and get detail
export const getDetailDevices = (id: string) => {
  return httpRepository.execute({
    path: '/api/Devices/' + id,
    showSuccess: false,
    showError: false,
    convert: res => {
      return new DevicesEntity(res);
    },
  });
};

//API ADD
export const createDevices = (payload: any) => {
  return httpRepository.execute({
    path: '/api/Devices',
    method: 'post',
    payload,
  });
};

//API EDIT/UPDATE
export const updateDevices = (id: string, payload: any) => {
  return httpRepository.execute({
    path: '/api/Devices/' + id,
    method: 'put',
    payload,
  });
};

//API DELETE
export const deleteDevices = (id: string) => {
  return httpRepository.execute({
    path: '/api/Devices/' + id,
    method: 'delete',
  });
};
