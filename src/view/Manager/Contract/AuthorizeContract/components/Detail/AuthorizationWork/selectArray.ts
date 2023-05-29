import ISelect from '@core/select';
import { ISelectAndLabel } from '@shared/components/SelectAndLabelComponent';

const dataStatus: ISelect[] = [
  { label: 'common.all', value: 'all' },
  { label: 'Mới', value: '' },
  { label: 'Còn thời hạn', value: '' },
  { label: 'Hết hạn', value: '' },
  { label: 'Hủy', value: '' },
];
export const arraySelectFilter: ISelectAndLabel[] = [
  { textLabel: 'Tình trạng phê duyệt', dataString: dataStatus, keyLabel: 'status' },
];
