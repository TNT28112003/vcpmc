import ISelect from '@core/select';
import { ISelectAndLabel } from '@shared/components/SelectAndLabelComponent';

const dataDevice: ISelect[] = [
  { label: 'Chọn nhóm tài khoảng', value: 'all' },
  { label: 'Công ty TMCP Bách Hóa Xanh', value: '2' },
  { label: 'Công ty TNHH XYZ', value: '3' },
  { label: 'Công ty TMCP Adora', value: '4' },
];
const dataStatus: ISelect[] = [
  { label: 'common.all', value: 'all' },
  { label: 'Mới', value: 1 },
  { label: 'Còn thời hạn', value: 2 },
  { label: 'Hết hạn', value: 3 },
  { label: 'Hủy', value: 4 },
];
export const arraySelectFilter: ISelectAndLabel[] = [
  { dataString: dataDevice, keyLabel: 'device' },
  { dataString: dataStatus, keyLabel: 'status' },
];
