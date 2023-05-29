import ISelect from '@core/select';
import { ISelectAndLabel } from '@shared/components/SelectAndLabelComponent';

const dataOwnership: ISelect[] = [
  { label: 'common.all', value: 'all' },
  { label: 'Người biểu diễn', value: 'Cá nhân' },
  { label: 'Nhà sẵn suất', value: 'Tổ chức' },
];
const dataContract: ISelect[] = [
  { label: 'common.all', value: 'all' },
  { label: 'Mới', value: '' },
  { label: 'Còn thời hạn', value: '' },
  { label: 'Hết hạn', value: '' },
  { label: 'Hủy', value: '' },
];
export const arraySelectFilter: ISelectAndLabel[] = [
  { textLabel: 'Quyền sở hữu', dataString: dataOwnership, keyLabel: 'authorized' },
  { textLabel: 'hiệu lực hợp đồng', dataString: dataContract, keyLabel: 'device' },
];
