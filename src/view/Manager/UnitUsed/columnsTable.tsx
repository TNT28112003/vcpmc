import { ColumnsType } from "antd/es/table";

export interface DataType {
  key: React.Key;
  id: string;
  adminAccountName: string;
  someContract: string;
  admin: string;
  user: number;
  specifiedDevice: number;
  expirationDate: string;
  status: number;
}

export const columns: ColumnsType<DataType> = [
  {
    title: 'Tên tài khoản quản trị',
    dataIndex: 'adminAccountName',
  },
  {
    title: 'Số hợp đồng',
    dataIndex: 'someContract',
  },
  {
    title: 'admin',
    dataIndex: 'admin',
  },
  {
    title: 'Người dùng',
    dataIndex: 'user',
  },
  {
    title: 'Thiết bị được chỉ định',
    dataIndex: 'specifiedDevice',
  },
  {
    title: 'Ngày hết hạn',
    dataIndex: 'expirationDate',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
  },
];
