import React, { useState } from 'react';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import { routerManagerAuthorization, routerManagerUpdateAuthorization } from '@view/Manager/router';
import { Button, Form, Input, Radio, RadioChangeEvent, Row } from 'antd';
import useForm from 'rc-field-form/lib/useForm';
import { useNavigate } from 'react-router';

const Update = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const [value, setValue] = useState(true);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const handleCancel = () => {
    form.resetFields();
    navigate('/manager/authorization');
  };

  return (
    <div>
      <MainTitleComponent
        breadcrumbs={[routerManagerAuthorization, routerManagerUpdateAuthorization]}
        title={'Cập nhật thông tin'}
      />
      <Form className="mt-[30px]">
        <div className="flex justify-center gap-[80px]">
          <div className="">
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[165px]">
                Tên người dùng <span className="text-[#FF4747]">*</span>
              </h3>
              <Form.Item name="name" className="!mb-0">
                <Input className="!w-[250px]" />
              </Form.Item>
            </div>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[165px]">
                Email <span className="text-[#FF4747]">*</span>
              </h3>
              <Form.Item name="name" className="!mb-0">
                <Input className="!w-[250px]" />
              </Form.Item>
            </div>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[165px]">
                Số điện thoại <span className="text-[#FF4747]">*</span>
              </h3>
              <Form.Item name="name" className="!mb-0">
                <Input className="!w-[250px]" />
              </Form.Item>
            </div>
            <div className="flex items-center mb-[16px]">
              <h3 className="text-white font-semibold text-[13px] w-[165px]">
                Vai trò <span className="text-[#FF4747]">*</span>
              </h3>
              <Form.Item name="name" className="!mb-0">
                <Input className="!w-[250px]" />
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
                Trạng thái <span className="text-[#FF4747]">*</span>
              </h3>
              <Radio.Group onChange={onChange} value={value} className="!flex !justify-between">
                <Radio value={true}>Đã kích hoạt</Radio>
                <Radio value={false}>Ngưng kích hoạt</Radio>
              </Radio.Group>
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
  );
};

export default Update;
