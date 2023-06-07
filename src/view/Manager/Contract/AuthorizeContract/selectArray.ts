import ISelect from '@core/select';
import { ISelectAndLabel } from '@shared/components/SelectAndLabelComponent';

const dataOwnership: ISelect[] = [
  { label: 'common.all', value: 'all' },
  { label: 'common.performers', value: 'Cá nhân' },
  { label: 'common.producer', value: 'Tổ chức' },
];
const dataContract: ISelect[] = [
  { label: 'common.all', value: 'all' },
  { label: 'common.status.new', value: 'Mới' },
  { label: 'common.status.time.left', value: 'Còn thời hạn' },
  { label: 'common.status.expirede', value: 'Hết hạn' },
  { label: 'common.status.cancel', value: 'Hủy' },
];
export const arraySelectFilter: ISelectAndLabel[] = [
  { textLabel: 'Quyền sở hữu', dataString: dataOwnership, keyLabel: 'authorized' },
  { textLabel: 'hiệu lực hợp đồng', dataString: dataContract, keyLabel: 'device' },
];
