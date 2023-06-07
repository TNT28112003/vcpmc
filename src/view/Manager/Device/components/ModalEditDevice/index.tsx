import { Form, Input, Radio, RadioChangeEvent } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react';

import { useAltaIntl } from '@hook/useTranslate';
import ButtonForm from '@shared/components/ButtonForm';

interface IDeleteDevice {
  isModalVisible: boolean;
  setIsModalVisible: (arg: any) => void;
  handleClick?: (event: any) => void;
}

const ModalEditDevice = (props: IDeleteDevice) => {
  const { isModalVisible, setIsModalVisible } = props;
  const { formatMessage } = useAltaIntl();
  const [form] = useForm();
  const [value, setValue] = useState(true);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const onFinish = (values: any) => {
    delete values.confirmPassword;
    if (values) {
    }
  };

  return (
    <Modal
      title={formatMessage('Chỉnh sửa thông tin thiết bị')}
      className="!w-[600px]"
      open={isModalVisible}
      destroyOnClose={true}
      onCancel={handleCancel}
      closable={false}
      footer={
        <ButtonForm
          formName="form-change-pass"
          nameButtonSubmit={'common.delete'}
          onCancelForm={() => handleCancel()}
          onOkForm={() => form.submit()}
        />
      }
    >
      <Form layout="vertical">
        <Form.Item required={true} label={'Tên thiết bị:'}>
          <Input className="py-[6px]" />
        </Form.Item>
        <Form.Item required={true} label={'SKU/ID:'}>
          <Input className="py-[6px]" />
        </Form.Item>
        <Form.Item required={true} label={'Địa chỉ Mac:'}>
          <Input className="py-[6px]" />
        </Form.Item>
        <Form.Item required={true} label={'Tên đăng nhập:'}>
          <Input className="py-[6px]" />
        </Form.Item>
        <Form.Item label={'Vị trí:'}>
          <Input className="py-[6px]" />
        </Form.Item>
        <div className="flex gap-[20px] items-center pb-[20px]">
          <h3 className="text-white font-semibold">
            Trạng thái thiết bị: <span className="text-[#FF4747]">*</span>
          </h3>
          <Radio.Group onChange={onChange} value={value} className="!flex gap-[80px]">
            <Radio value={true}>
              <span className="text-[14px] font-normal">Đã kích hoạt</span>
            </Radio>
            <Radio value={false}>
              <span className="text-[14px] font-normal">Ngưng kích hoạt</span>
            </Radio>
          </Radio.Group>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalEditDevice;
