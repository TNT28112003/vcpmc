import { Form, Input } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import Modal from 'antd/lib/modal/Modal';
import React from 'react';

import { useAltaIntl } from '@hook/useTranslate';
import ButtonForm from '@shared/components/ButtonForm';

interface IDeleteDevice {
  isModalVisible: boolean;
  setIsModalVisible: (arg: any) => void;
  handleClick?: (event: any) => void;
}

const ModalDeleteDevice = (props: IDeleteDevice) => {
  const { isModalVisible, setIsModalVisible } = props;
  const { formatMessage } = useAltaIntl();
  const [form] = useForm();

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
      title={formatMessage('Xóa thiết bị')}
      className="main-modal change-password-modal"
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
      <p className='text-white text-[16px]'>Bạn có chắc chắn muốn xoá các thiết bị này? Hành động này không thể hoàn tác.</p>
    </Modal>
  );
};

export default ModalDeleteDevice;
