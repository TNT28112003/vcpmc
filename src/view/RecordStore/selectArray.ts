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
  { textLabel: 'Thể loại:', dataString: dataStatus, keyLabel: 'status' },
  { textLabel: 'Định dạng:', dataString: dataDevice, keyLabel: 'device' },
  { textLabel: 'Thời hạn sử dụng:', dataString: dataDevice, keyLabel: 'device' },
  { textLabel: 'Trạng thái:', dataString: dataDevice, keyLabel: 'device' },
];