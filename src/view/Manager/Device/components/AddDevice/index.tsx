import React, { useState } from 'react';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import { routerManagerAddDevice, routerManagerDevice } from '@view/Manager/router';
import { Button, DatePicker, Form, Input } from 'antd';
import { useNavigate } from 'react-router';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
const dateFormat = 'DD/MM/YYYY';

const AddDevice = () => {
  const [warrantyPeriod, setWarrantyPeriod] = useState<string>();
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/manager/device');
  };

  return (
    <div>
      <MainTitleComponent
        breadcrumbs={[routerManagerDevice, routerManagerAddDevice]}
        title={'Thêm thiết bị mới'}
      />
      <div className="mt-[20px]">
        <Form>
          <div className="flex gap-[150px]">
            <div className="">
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Tên thiết bị: <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="name" className="!mb-0">
                  <Input className="!w-[250px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  SKU/ID: <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="name" className="!mb-0">
                  <Input className="!w-[250px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Địa chỉ Mac: <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="name" className="!mb-0">
                  <Input className="!w-[250px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Thời hạn bảo hành: <span className="text-[#FF4747]">*</span>
                </h3>
                <DatePicker
                  name="effectiveDate"
                  className="!w-[180px]"
                  format={dateFormat}
                  onChange={(date, dateString) => {
                    setWarrantyPeriod(dateString);
                  }}
                />
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Label: <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="name" className="!mb-0">
                  <Input className="!w-[250px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Thông tin: <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="name" className="!mb-0">
                  <Input className="!w-[250px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">Ghi chú</h3>
                <Form.Item name="name" className="!mb-0">
                  <Input.TextArea className="!w-[250px]" />
                </Form.Item>
              </div>
              <p className="text-[13px] text-[#F5F5FF]">
                <span className="text-[#FF4747]">*</span>là những trường thông tin bắt buộc
              </p>
            </div>
            <div className="">
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Tên đăng nhập <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="name" className="!mb-0">
                  <Input className="!w-[250px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Mật khẩu <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="name" className="!mb-0">
                  <Input.Password className="!w-[250px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Nhập lại mật khẩu <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="name" className="!mb-0">
                  <Input.Password className="!w-[250px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Vị trí: <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="name" className="!mb-0">
                  <Input className="!w-[250px]" />
                </Form.Item>
              </div>
            </div>
          </div>
          <div className="mt-[20px] pb-[40px] flex justify-center">
            <div className="list__btn">
              <Button className="btn__cancel" onClick={handleCancel}>
                Hủy
              </Button>
              <Button className="btn__save" htmlType="submit">
                Lưu
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddDevice;
