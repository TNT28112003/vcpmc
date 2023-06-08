import React, { useState } from 'react';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import { routerManagerAddDevice, routerManagerDevice } from '@view/Manager/router';
import { Button, DatePicker, Form, Input, notification } from 'antd';
import { useNavigate } from 'react-router';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import devicePresenter from '@modules/device/presenter';
import { useSingleAsync } from '@shared/hook/useAsync';
import { v4 as uuidv4 } from 'uuid';

dayjs.extend(customParseFormat);

const AddDevice = () => {
  const [warrantyPeriod, setWarrantyPeriod] = useState<string>();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const { addDevice } = devicePresenter;
  const newDevice = useSingleAsync(addDevice);

  const successNotification = (description: string) => {
    api.success({
      message: 'SUCESS',
      description: description,
      placement: 'top',
    });
  };

  const openNotification = (description: string) => {
    api.error({
      message: 'ERROR',
      description: description,
      placement: 'top',
    });
  };

  const handleCancel = () => {
    navigate('/manager/device');
  };

  const handleAddDevice = values => {
    const newDeviceData = values;
    newDeviceData['warrantyPeriod'] = warrantyPeriod;
    newDeviceData['status'] = 1;
    newDeviceData['key'] = uuidv4();
    newDevice
      .execute(newDeviceData)
      .then(response => {
        if (response.status) {
          successNotification('Thêm thành công');
          navigate('/manager/device');
        }
      })
      .catch(err => {
        openNotification(err.message);
      });
  };

  return (
    <div>
      {contextHolder}
      <MainTitleComponent
        breadcrumbs={[routerManagerDevice, routerManagerAddDevice]}
        title={'Thêm thiết bị mới'}
      />
      <div className="mt-[20px]">
        <Form onFinish={handleAddDevice}>
          <div className="flex gap-[150px]">
            <div className="">
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Tên thiết bị: <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="deviceName" className="!mb-0">
                  <Input className="!w-[250px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  SKU/ID: <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="SKU" className="!mb-0">
                  <Input className="!w-[250px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Địa chỉ Mac: <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="IPAddress" className="!mb-0">
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
                  onChange={(date, dateString) => {
                    setWarrantyPeriod(dateString);
                  }}
                />
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Label: <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="label" className="!mb-0">
                  <Input className="!w-[250px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Thông tin: <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="information" className="!mb-0">
                  <Input className="!w-[250px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">Ghi chú</h3>
                <Form.Item name="note" className="!mb-0">
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
                <Form.Item name="userName" className="!mb-0">
                  <Input className="!w-[250px]" />
                </Form.Item>
              </div>
              <div className="flex items-center mb-[16px]">
                <h3 className="text-white font-semibold text-[13px] w-[165px]">
                  Mật khẩu <span className="text-[#FF4747]">*</span>
                </h3>
                <Form.Item name="password" className="!mb-0">
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
                <Form.Item name="location" className="!mb-0">
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
