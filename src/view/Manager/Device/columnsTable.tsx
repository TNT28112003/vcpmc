import { ColumnsType } from "antd/es/table";

export interface DataType {
  key: React.Key;
  id: string;
  name: string;
  status: number;
  address: string;
  contractTerm: string;
  macAddress: string;
  memory: string;
}

export const columns: ColumnsType<DataType> = [
  {
    title: 'Tên thiết bị',
    dataIndex: 'name',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
  },
  {
    title: 'Địa điểm',
    dataIndex: 'address',
  },
  {
    title: 'Hạn hợp đồng',
    dataIndex: 'contractTerm',
  },
  {
    title: 'MAC Addresss',
    dataIndex: 'macAddress',
  },
  {
    title: 'Memory',
    dataIndex: 'memory',
  },
];
