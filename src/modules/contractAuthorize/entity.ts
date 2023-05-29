import { Timestamp } from "firebase/firestore";

class ContractAuthorizeEntity {
  CCCD: string = '';
  accountNumber: string = '';
  authorizationName: string = '';
  authorized: string = '';
  bank: string = '';
  email: string = '';
  gender: string = '';
  issuedBy: string = '';
  nameContract: string = '';
  nationality: string = '';
  numberContract: string = '';
  password: string = '';
  phone: string = '';
  residence: string = '';
  taxCode: string = '';
  userName: string = '';
  DoB: string = '';
  effectiveDate: string = '';
  expirationDate: string = '';
  dateRange: string = '';
  createAt: string = '';

  constructor(contractAuthorize?: Partial<ContractAuthorizeEntity>) {
    if (!contractAuthorize) {
      return;
    }
    Object.assign(this, contractAuthorize);
  }
}

export default ContractAuthorizeEntity;
