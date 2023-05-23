import { PaginationEntity } from '@core/pagination/entity';
import { addData, changeData, getDatas, getSingleData } from 'src/firebase/firebase.fbServices';
import RecordEntity from './entity';

const collection = 'records';

const getRecords = (
  paging: any,
  option: any,
): Promise<{ data: Array<RecordEntity>; info: PaginationEntity }> => {
  return getDatas(paging, option, collection);
};

const getRecord = (documentId: string): Promise<{ data: RecordEntity; status: boolean }> => {
  return getSingleData(collection, documentId);
};

const addRecord = (data: Partial<RecordEntity>): Promise<{ status: boolean }> => {
  return addData(collection, data);
};

const changeRecord = (
  documentId: string,
  data: Partial<RecordEntity>,
): Promise<{ status: boolean }> => {
  return changeData(collection, documentId, data);
};

export default {
  getRecords,
  getRecord,
  addRecord,
  changeRecord,
};
