import ISelect from "@core/select";
import { ISelectAndLabel } from "@shared/components/SelectAndLabelComponent";

const dataStatus: ISelect[] = [
  { label: 'common.all', value: 'all' },
  { label: 'Người biểu diễn', value: '' },
  { label: 'Nhà sẵn suất', value: '' },
];
const dataDevice: ISelect[] = [
  { label: 'common.all', value: 'all' },
  { label: 'Mới', value: '' },
  { label: 'Còn thời hạn', value: '' },
  { label: 'Hết hạn', value: '' },
  { label: 'Hủy', value: '' },
];
export const arraySelectFilter: ISelectAndLabel[] = [
  { textLabel: 'Quyền sở hữu', dataString: dataStatus, keyLabel: 'status' },
  { textLabel: 'hiệu lực hợp đồng', dataString: dataDevice, keyLabel: 'device' },
];