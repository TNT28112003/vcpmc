import { Col, Form, Input, Row } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react';

import { useAltaIntl } from '@hook/useTranslate';
import ButtonForm from '@shared/components/ButtonForm';
import { CameraOutlined } from '@ant-design/icons';
import Checkbox, { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CheckboxValueType } from 'antd/es/checkbox/Group';

import './styles.scss';

interface IChangePassWord {
  isModalVisible: boolean;
  setIsModalVisible: (arg: any) => void;
}

const ModalChangePassWord = (props: IChangePassWord) => {
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

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const CheckboxGroup = Checkbox.Group;

  const plainOptions = ['Quyền của người biểu diễn', 'Quyền của nhà sản xuất (bản ghi/video)'];

  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>();
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChangeAll = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <Modal
      title={formatMessage('Gia hạn uỷ quyền tác phẩm')}
      className="main-modal change-password-modal !w-[750px]"
      open={isModalVisible}
      destroyOnClose={true}
      onCancel={handleCancel}
      closable={false}
      footer={
        <ButtonForm
          formName="form-change-pass"
          nameButtonSubmit={'common.save'}
          onCancelForm={() => handleCancel()}
          onOkForm={() => form.submit()}
        />
      }
    >
      <Form
        className="main-form text-white"
        layout="vertical"
        name="formChangePassword"
        form={form}
        onFinish={onFinish}
        requiredMark={false}
      >
        <Row gutter={[30, 30]}>
          <Col span={12}>
            <h3 className="font-semibold mb-[10px]">Thời gian gia hạn</h3>
            <h3 className="mb-[6px]">Từ ngày : 02/08/2021</h3>
            <div className="flex items-center gap-x-[10px] mb-[6px]">
              <h3>Đến ngày :</h3>
              <Form.Item className="!mb-0">
                <Input type="date" className="placeholder:text-[#F5F5FF]" />
              </Form.Item>
            </div>
            <p className="text-[12px] text-[#FFD0AB] leading-[18px]">
              Lưu ý: Thời gian bắt đầu gia hạn hợp đồng mới được tính sau ngày hết hạn hợp đồng cũ
              một ngày.
            </p>
            <div className="flex items-center gap-x-[10px] mt-[50px]">
              <h3>Đính kèm tệp :</h3>
              <div className="button-icon-upload">
                <label htmlFor="input-media">
                  <CameraOutlined />
                  <h6>Tải lên</h6>
                </label>
                <input
                  hidden
                  onChange={e => {}}
                  type="file"
                  id="input-media"
                  accept="image/png, image/jpeg, image/jpg"
                />
              </div>
            </div>
          </Col>
          <Col span={12}>
            <h3 className="font-semibold mb-[10px]">Thời gian gia hạn</h3>
            <div className="mb-[6px]">
              <Checkbox onChange={onChange}>Checkbox</Checkbox>
            </div>
            <div className="mb-[6px]">
              <Checkbox onChange={onCheckAllChange} checked={checkAll}>
                Quyền liên quan:
              </Checkbox>
              <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChangeAll} />
            </div>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default ModalChangePassWord;
