import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';
import { Col, Row } from 'antd';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import { routerViewRevene, routerViewReveneSale } from '../router';
import { ISelectAndLabel } from '@shared/components/SelectAndLabelComponent';
import SelectNoneLableComponent from '@shared/components/SelectNoneLableComponent';
import ISelect from '@core/select';

const SalesReport = () => {
  const data = [
    { day: '1', value: 1 },
    { day: '2', value: 1.5 },
    { day: '3', value: 2 },
    { day: '4', value: 2.5 },
    { day: '5', value: 3 },
    { day: '6', value: 3.5 },
    { day: '7', value: 4 },
    { day: '8', value: 4.5 },
    { day: '9', value: 5 },
    { day: '10', value: 5.5 },
    { day: '11', value: 5 },
    { day: '12', value: 4.5 },
    { day: '13', value: 4 },
    { day: '14', value: 3.5 },
    { day: '15', value: 3 },
    { day: '16', value: 2.5 },
    { day: '17', value: 2 },
    { day: '18', value: 1.5 },
    { day: '19', value: 1 },
    { day: '20', value: 5 },
    { day: '21', value: 6.5 },
    { day: '22', value: 6.9 },
    { day: '23', value: 7 },
    { day: '24', value: 6.5 },
    { day: '25', value: 5.9 },
    { day: '26', value: 7 },
    { day: '27', value: 8 },
    { day: '28', value: 8 },
    { day: '29', value: 7 },
    { day: '30', value: 6 },
    { day: '31', value: 5 },
  ];

  const config = {
    data,
    xField: 'day',
    yField: 'value',
    color: '#FF7506',
    meta: {
      value: {
        min: 0,
        max: 9,
      },
    },
    xAxis: {
      range: [0, 1],
    },
    height: 350,
    smooth: true,
    areaStyle: {
      fill: 'transparent',
    },
  };

  const dataFilter1: ISelect[] = [{ label: 'Theo quý', value: 'all' }];
  const dataFilter2: ISelect[] = [{ label: 'Quý 2/2023', value: 'all' }];
  const arraySelectFilter: ISelectAndLabel[] = [
    { dataString: dataFilter1, keyLabel: '' },
    { dataString: dataFilter2, keyLabel: '' },
  ];

  return (
    <div className="pb-[60px]">
      <MainTitleComponent breadcrumbs={[routerViewRevene, routerViewReveneSale]} />
      <div className="flex items-center">
        <h3 className="mr-[20px]">Theo quý:</h3>
        {arraySelectFilter.map(item => (
          <SelectNoneLableComponent
            // onChange={onChangeSelectStatus(item.keyLabel)}
            key={item.name}
            className={`margin-select ${item.keyLabel}`}
            dataString={item.dataString}
          />
        ))}
      </div>
      <Row>
        <Col span={22}>
          <div className="bg-[#2a2a3b] p-[16px] rounded-[16px] flex items-center justify-around">
            <div className="flex flex-col justify-center items-center">
              <h6 className="text-white opacity-50 text-[16px] leading-[24px] font-semibold">
                Tổng số bài hát
              </h6>
              <h3 className="text-[#FFAC69] text-[20px] leading-[24px] font-semibold mt-[10px]">
                100
              </h3>
            </div>
            <span className="bg-[#95959d] w-[1px] h-[50px]"></span>
            <div className="flex flex-col justify-center items-center">
              <h6 className="text-white opacity-50 text-[16px] leading-[24px] font-semibold">
                Tổng số lượt phát
              </h6>
              <h3 className="text-[#FFAC69] text-[20px] leading-[24px] font-semibold mt-[10px]">
                32.000.000
              </h3>
            </div>
            <span className="bg-[#95959d] w-[1px] h-[50px]"></span>
            <div className="flex flex-col justify-center items-center">
              <h6 className="text-white opacity-50 text-[16px] leading-[24px] font-semibold">
                Doanh thu trên lượt phát
              </h6>
              <h3 className="text-[#FFAC69] text-[20px] leading-[24px] font-semibold mt-[10px]">
                1.564.745.000đ
              </h3>
            </div>
            <span className="bg-[#95959d] w-[1px] h-[50px]"></span>
            <div className="flex flex-col justify-center items-center">
              <h6 className="text-white opacity-50 text-[16px] leading-[24px] font-semibold">
                Doanh thu chưa phân phối
              </h6>
              <h3 className="text-[#FFAC69] text-[20px] leading-[24px] font-semibold mt-[10px]">
                1.564.745.000đ
              </h3>
            </div>
            <span className="bg-[#95959d] w-[1px] h-[50px]"></span>
            <div className="flex flex-col justify-center items-center">
              <h6 className="text-white opacity-50 text-[16px] leading-[24px] font-semibold">
                Hành chính phí
              </h6>
              <h3 className="text-[#FFAC69] text-[20px] leading-[24px] font-semibold mt-[10px]">
                3.253.000đ
              </h3>
            </div>
          </div>
          <div className="my-[30px]">
            <h3 className="text-white text-[18px] font-semibold leading-[24px]">
              Biểu đồ theo dõi lượt phát - 29/06/2021
            </h3>
          </div>
          <Area {...config} />
        </Col>
      </Row>
    </div>
  );
};

export default SalesReport;
