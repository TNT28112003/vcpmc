import ISelect from "@core/select";
import { ISelectAndLabel } from "@shared/components/SelectAndLabelComponent";

const dataString: ISelect[] = [
  {
    label: 'Khám tim mạch',
    value: 'Khám tim mạch',
  },
  {
    label: 'Khám sản - Phụ khoa',
    value: 'Khám sản - Phụ khoa',
  },
  {
    label: 'Khám tổng quát',
    value: 'Khám tổng quát',
  },
  {
    label: 'Khám răng hàm mặt',
    value: 'Khám răng hàm mặt',
  },
  {
    label: 'Khám tai mũi họng',
    value: 'Khám tai mũi họng',
  },
  {
    label: 'Khám hô hấp',
    value: 'Khám hô hấp',
  },
];

export const selectTypeDevice: ISelectAndLabel = {
  textLabel: 'Loại dịch vụ',
  dataString,
  keyLabel: 'serviceType',
};
