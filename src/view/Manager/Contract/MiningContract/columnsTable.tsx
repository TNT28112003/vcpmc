import React from "react";
import { ColumnsType } from "antd/es/table";

interface DataType {
  id?: string;
  numberContract: string;
  customer: string;
  expirationDate: string;
  createAtEffect: string;
  createAt: string;
  effectContract: string;
}

export const columns: ColumnsType<DataType> = [
  {
    title: 'STT',
    dataIndex: 'STT',
    key: 'STT',
    render: (text, object, index) => <div> {index + 1}</div>,
  },
  {
    title: 'Số hợp đồng',
    dataIndex: 'numberContract',
    key: 'numberContract',
  },
  {
    title: 'Khách hàng',
    dataIndex: 'customer',
    key: 'customer',
  },
  {
    title: 'Ngày tạo',
    key: 'createAt',
    dataIndex: 'createAt',
  },
  {
    title: 'Ngày hiệu lực',
    key: 'createAtEffect',
    dataIndex: 'createAtEffect',
  },
  {
    title: 'Ngày hết hạn',
    key: 'expirationDate',
    dataIndex: 'expirationDate',
  },
  {
    title: 'Hiệu lực hợp đồng',
    key: 'Effect',
    dataIndex: 'Effect',
    render: (action: any) => {
      return (
        <>
          <div>
            <div className="list_tag_time">
              <div className="tag__cicrle" />
              Còn hiệu lực
            </div>
          </div>
        </>
      );
    },
  },
  {
    title: '',
    key: 'update',
    dataIndex: 'update',
    render: () => {
      return <a style={{ color: '#FF7506', textDecoration: 'underline' }}>Xem chi tiết</a>;
    },
  },
  {
    title: '',
    key: 'listen',
    dataIndex: 'listen',
    render: () => {
      return <a style={{ color: '#FF7506', textDecoration: 'underline' }}>Sao chép hợp đồng</a>;
    },
  },
];
