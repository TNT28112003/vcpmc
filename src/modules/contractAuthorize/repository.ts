import { PaginationEntity } from '@core/pagination/entity';
import { addData, changeData, getDatas, getSingleData } from 'src/firebase/firebase.fbServices';
import ContractAuthorizeEntity from './entity';

const collection = 'contract_Authorize';

const getContractAuthorizes = (
  paging: any,
  option: any,
): Promise<{ data: Array<ContractAuthorizeEntity>; info: PaginationEntity }> => {
  return getDatas(paging, option, collection);
};

const getContractAuthorize = (
  documentId: string,
): Promise<{ data: ContractAuthorizeEntity; status: boolean }> => {
  return getSingleData(collection, documentId);
};

const addContractAuthorize = (
  data: Partial<ContractAuthorizeEntity>,
): Promise<{ status: boolean }> => {
  return addData(collection, data);
};

const changeContractAuthorize = (
  documentId: string,
  data: Partial<ContractAuthorizeEntity>,
): Promise<{ status: boolean }> => {
  return changeData(collection, documentId, data);
};

export default {
  getContractAuthorizes,
  getContractAuthorize,
  addContractAuthorize,
  changeContractAuthorize,
};
