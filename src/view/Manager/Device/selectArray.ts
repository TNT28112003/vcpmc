import ISelect from '@core/select';
import { ISelectAndLabel } from '@shared/components/SelectAndLabelComponent';

const dataStatus: ISelect[] = [
  { label: 'Chọn nhóm tài khoảng', value: '5' },
  { label: 'Tất cả', value: '0' },
  { label: 'Công ty TMCP Bách Hóa Xanh', value: '2' },
  { label: 'Công ty TNHH XYZ', value: '3' },
  { label: 'Công ty TMCP Adora', value: '4' },
];
const dataDevice: ISelect[] = [
  { label: 'common.all', value: 'all' },
  { label: 'Mới', value: '' },
  { label: 'Còn thời hạn', value: '' },
  { label: 'Hết hạn', value: '' },
  { label: 'Hủy', value: '' },
];
export const arraySelectFilter: ISelectAndLabel[] = [
  { dataString: dataStatus, keyLabel: 'status' },
  { dataString: dataDevice, keyLabel: 'device' },
];
