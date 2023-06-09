import { Form, Input } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import Modal from 'antd/lib/modal/Modal';
import React from 'react';

import { useAltaIntl } from '@hook/useTranslate';
import ButtonForm from '@shared/components/ButtonForm';

interface IChangePassWord {
  isModalVisible: boolean;
  setIsModalVisible: (arg: any) => void;
}

const ModalCancel = (props: IChangePassWord) => {
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
      title={formatMessage('Lý do từ chối phê duyệt')}
      className="main-modal change-password-modal"
      open={isModalVisible}
      destroyOnClose={true}
      onCancel={handleCancel}
      closable={false}
      footer={
        <ButtonForm
          formName="form-change-pass"
          nameButtonSubmit={'Từ chối'}
          onCancelForm={() => handleCancel()}
          onOkForm={() => form.submit()}
        />
      }
    >
      <Form
        className="main-form"
        layout="vertical"
        name="formChangePassword"
        form={form}
        onFinish={onFinish}
        requiredMark={false}
      >
        <Form.Item
          name=""
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea
            rows={8}
            placeholder={formatMessage(
              'Cho chúng tôi biết lý do bạn muốn từ chối phê duyệt bản ghi này...',
            )}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalCancel;
